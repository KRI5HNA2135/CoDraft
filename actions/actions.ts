'use server';

import { adminDb } from "@/firebase-admin";
import { auth } from "@clerk/nextjs/server";

export async function createNewDocument() {
  auth.protect();

  const { userId, sessionClaims } = await auth();

  const email = sessionClaims?.email as string | undefined;
  const fullName = sessionClaims?.fullName as string | undefined;
  const image = sessionClaims?.image as string | undefined;

  if (!email || !fullName || !image || !userId) {
    console.error("Missing data:", { email, fullName, image, userId });
    throw new Error("Missing user info in session");
  }

  const docRef = await adminDb.collection("documents").add({
    title: "New Document",
    owner: email,
    createdAt: new Date(),
  });

  await adminDb
    .collection("users")
    .doc(userId) // ✅ use userId here instead of email
    .collection("rooms")
    .doc(docRef.id)
    .set({
      userId, // ✅ store userId, not email
      role: "owner",
      createdAt: new Date(),
      roomId: docRef.id,
    });

  return { docId: docRef.id };
}
