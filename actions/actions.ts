"use server";

import { auth } from "@clerk/nextjs/server";
import { adminDb } from "@/firebase-admin";
import { User } from "@/types/types";

export async function createNewDoc() {
  const { sessionClaims } = await auth();

  if (!sessionClaims) {
    throw new Error("Unauthorized");
  }

  const user = sessionClaims as unknown as User;

  if (!user.email) {
    throw new Error("Missing email in session claims");
  }

  const docRef = await adminDb.collection("documents").add({
    title: "New Document",
    owner: user.email,
    createdAt: new Date(),
  });

  await adminDb
    .collection("users")
    .doc(user.email!)
    .collection("rooms")
    .doc(docRef.id)
    .set({
      userId: user.email!,
      role: "owner",
      createdAt: new Date(),
      roomId: docRef.id,
    });

  return { docId: docRef.id };
}
