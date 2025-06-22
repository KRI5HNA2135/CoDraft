"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, MenuIcon } from "lucide-react";
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
}


export default function Sidebar() {
  // const [open, setOpen] = useState(false);
  const {user} = useUser();

  const [groupedData, setGroupedData] = useState<{
    owner: RoomDocument[];
    editor: RoomDocument[];
  }>({
    owner: [],
    editor: [],
  })

  const [data,loading,error] = useCollection(
    user && 
      query(
      collectionGroup(db, 'rooms'),
      where("userId", "==", user.emailAddresses[0].emailAddress)
    )
  );

  useEffect(() => {
    if(!data) return;
    console.log("Docs fetched:", data.docs.map(d => d.data()));


    const grouped = data.docs.reduce<{
      owner: RoomDocument[];
      editor: RoomDocument[];
    }>(
      (acc, curr) => {
        const roomData = curr.data() as RoomDocument;

        if(roomData.role === "owner") {
          acc.owner.push({
            id: curr.id,
            ...roomData,
          })
        } else {
          acc.editor.push({
            id: curr.id,
            ...roomData,
          })
        }

        return acc;
      }, {
        owner: [],
        editor: [],
      }
    )
  }, [data])

  const menuOptions = (
    <>
    <NewDocumentButton />

    {/* My Documents */}

    {groupedData.owner.length === 0 ? (
      <h2 className="text-gray-500 font-semibold text-sm">No documents found</h2>
     ) : (
      <>
      <h2 className="text-gray-500 font-semibold text-sm">My Documents</h2>
      {groupedData.owner.map((doc) => (
        <p>{doc.roomId}</p>

        
      ))}


      </>
     ) }

    {/* List */}

    {/* Shared with me  */}
    {/* List */}

    </>
  )

  return (
    <div className="p-2 md:p-5 bg-gray-200 relative">
      <div className="md:hidden">

      {/* here we are going to add the contents of functions or new task  */}

        <Sheet>
          <SheetTrigger>
            <MenuIcon className="p-2 hover:opacity-30 rounded-lg" size={40} />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <div> {menuOptions} </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:inline">
       {menuOptions}
      </div>
    </div>
  );
}
