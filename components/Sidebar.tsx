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
import { Menu } from "lucide-react";


const Sidebar = () => {
  return (
    <>
    {/* Mobile ani tablet sathi  */}
    <div className="p-3 ml-5 size-5">
      <Sheet>
  <SheetTrigger asChild>
    <Button 
      variant="ghost" 
      className="p-2 hover:bg-muted hover:rounded-xl transition"
    >
      <Menu className="h-6 w-6 text-foreground" />
    </Button>
  </SheetTrigger>

  <SheetContent side="left" className="sm:max-w-xs">
    <SheetHeader>
      <SheetTitle className="text-lg font-semibold">
        Are you absolutely sure?
      </SheetTitle>
      <SheetDescription className="text-sm text-muted-foreground mt-2">
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
