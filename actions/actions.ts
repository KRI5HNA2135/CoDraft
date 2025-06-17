"use server";

import { adminDb } from "@/firebase-admin";
import { auth } from "@clerk/nextjs/server";

export async function createNewDoc() {
  const authInstance = await auth();
  const { sessionClaims } = authInstance;

  const email = sessionClaims?.email;

  if (!email) {
    throw new Error("Unauthorized");
  }

  const docCollectionRef = adminDb.collection("documents");
  const docRef = await docCollectionRef.add({
    title: "New Document",
  });

  // return docRef;
  await adminDb
    .collection("users")
    .doc(email)
    .collection("rooms")
    .doc(docRef.id)
    .set({
      userId: sessionClaims?.email!,
      role: "owner",
      createdAt: new Date(),
      roomId: docRef.id,
    });
    return { docId: docRef.id };
}


