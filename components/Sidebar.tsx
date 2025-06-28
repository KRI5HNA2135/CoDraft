"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";
import NewDocumentButton from "./NewDocumentButton";
import { useCollection } from "react-firebase-hooks/firestore";
import { useUser } from "@clerk/nextjs";
import { collectionGroup, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import { DocumentData } from "firebase-admin/firestore";

interface RoomDocument extends DocumentData {
  createdAt: string;
  role: "owner" | "editor";
  roomId: string;
  userId: string;
  title?: string;
}

export default function Sidebar() {
  console.log("asldkjflkasjdlfkkkkkkkkkkk")
  const { user } = useUser();

  const [groupedData, setGroupedData] = useState<{
    owner: RoomDocument[];
    editor: RoomDocument[];
  }>({
    owner: [],
    editor: [],
  });

  const [data, loading, error] = useCollection(
    user &&
      query(
        collectionGroup(db, "rooms"),
        where("userId", "==", user.id) // ✅ Using Clerk's user ID now
      )
  );

  useEffect(() => {
    console.log("🔥 useEffect triggered");
  console.log("📦 data from useCollection:", data);
  console.log("📋 loading:", loading);
  console.log("❌ error:", error);
    if (!data) return;
    console.log("hereeeee2");
    

    console.log("🔥 Raw Firestore docs:", data.docs.map((doc) => doc.data()));

    const grouped = data.docs.reduce<{
      owner: RoomDocument[];
      editor: RoomDocument[];
    }>((acc, curr) => {
      const roomData = curr.data() as RoomDocument;

      if (roomData.role === "owner") {
        acc.owner.push({
          id: curr.id,
          ...roomData,
        });
      } else {
        acc.editor.push({
          id: curr.id,
          ...roomData,
        });
      }

      return acc;
    }, {
      owner: [],
      editor: [],
    });

    console.log("✅ Grouped Owners:", grouped.owner);
    console.log("✅ Grouped Editors:", grouped.editor);
    console.log("✅ Owner Count:", grouped.owner.length);

    setGroupedData(grouped);
  }, [data]);

  const menuOptions = (
    <>
      <NewDocumentButton />

      {/* Owner Docs */}
      {groupedData.owner.length === 0 ? (
        <h2 className="text-gray-500 font-semibold text-sm mt-4">
          No documents found
        </h2>
      ) : (
        <>
          <h2 className="text-gray-500 font-semibold text-sm mt-4">
            My Documents
          </h2>
          {groupedData.owner.map((doc) => (
            <p key={doc.roomId} className="text-sm font-medium">
              {doc.title || `Untitled (${doc.roomId})`}
            </p>
          ))}
        </>
      )}

      {/* Shared Docs */}
      {groupedData.editor.length > 0 && (
        <>
          <h2 className="text-gray-500 font-semibold text-sm mt-4">
            Shared with me
          </h2>
          {groupedData.editor.map((doc) => (
            <p key={doc.roomId} className="text-sm font-medium">
              {doc.title || `Untitled (${doc.roomId})`}
            </p>
          ))}
        </>
      )}
    </>
  );

  return (
    <div className="p-2 md:p-5 bg-gray-200 relative">
      {/* Mobile sidebar */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="p-2 hover:opacity-50 rounded-lg" size={40} />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <div>{menuOptions}</div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:inline">{menuOptions}</div>
    </div>
  );
}
