"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, MenuIcon } from "lucide-react";
import { useState } from "react";
import NewDocumentButton from "./NewDocumentButton";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

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
