"use server";

import { adminDb } from "@/firebase-admin";
import { auth } from "@clerk/nextjs/server";

export async function createNewDoc() {
  const authInstance = await auth();
  const { userId, sessionClaims } = authInstance;

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const docCollectionRef = adminDb.collection("documents");
  const docRef = await docCollectionRef.add({
    title: "New Document"
  });

  return docRef;
}
