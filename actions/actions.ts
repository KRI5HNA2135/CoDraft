"use server";

import { auth } from "@clerk/nextjs/server";
import { adminDb } from "@/firebase-admin";

export async function createNewDoc() {
  const { userId, sessionClaims } = await auth();

  if (!userId || !sessionClaims) {
    throw new Error("Unauthorized");
  }

  const email = sessionClaims?.email as string | undefined;
  const fullName = sessionClaims?.name as string | undefined;
  const image = sessionClaims?.picture as string | undefined;

  if (!email || !fullName || !image) {
    throw new Error("Missing user info in session");
  }

  const docRef = await adminDb.collection("documents").add({
    title: "New Document",
    owner: email,
    createdAt: new Date(),
  });

  await adminDb
    .collection("users")
    .doc(userId) // ✅ Correct doc path
    .collection("rooms")
    .doc(docRef.id)
    .set({
      userId: userId, // 🔥 Not email
      role: "owner",
      createdAt: new Date(),
      roomId: docRef.id,
    });

  return { docId: docRef.id };
}
