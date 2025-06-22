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

export default function Sidebar() {
  // const [open, setOpen] = useState(false);
  const {user} = useUser();

  const [data,loading,error] = useCollection(
    user && 
      query(
      collectionGroup(db, 'rooms'),
      where("userId", "==", user.emailAddresses[0].toString())
    )
  );

  useEffect(() => {
    if(!data) return;
  })

  const menuOptions = (
    <>
    <NewDocumentButton />

    {/* My Documents */}
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
