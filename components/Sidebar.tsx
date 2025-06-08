"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Plus, FileText, Users, Menu } from "lucide-react";
import NewDocumentButton from "./NewDocumentButton";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

const Sidebar = () => {
  return (
    <>
    {/* Mobile ani tablet sathi  */}
    <div>
      <Sheet>
  <SheetTrigger asChild>
    <Button variant="ghost" className="" >
      <Menu />
    </Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
    </div>
    </>
  );
};

export default Sidebar;
