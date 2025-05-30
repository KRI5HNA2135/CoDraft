"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Plus, FileText, Users } from "lucide-react";
import NewDocumentButton from "./NewDocumentButton";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2">
          <FileText className="w-4 h-4" />
          Open Sidebar
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[300px] p-4">
        <SheetHeader>
          <SheetTitle className="text-lg font-semibold">My Workspace</SheetTitle>
        </SheetHeader>

        <div className="mt-6">
          <NewDocumentButton />
        </div>

        <Separator className="my-4" />

        <div className="space-y-6">
          {/* My Documents */}
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <FileText className="w-4 h-4" />
              My Documents
            </div>
            <ScrollArea className="h-40 mt-3 pr-1">
              <ul className="space-y-2">
                <li className="text-sm px-2 py-1 rounded hover:bg-muted transition cursor-pointer">
                  Project Plan
                </li>
                <li className="text-sm px-2 py-1 rounded hover:bg-muted transition cursor-pointer">
                  Meeting Notes
                </li>
                <li className="text-sm px-2 py-1 rounded hover:bg-muted transition cursor-pointer">
                  Roadmap
                </li>
              </ul>
            </ScrollArea>
          </div>

          <Separator />

          {/* Shared with Me */}
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Users className="w-4 h-4" />
              Shared with Me
            </div>
            <ScrollArea className="h-40 mt-3 pr-1">
              <ul className="space-y-2">
                <li className="text-sm px-2 py-1 rounded hover:bg-muted transition cursor-pointer">
                  Team Strategy
                </li>
                <li className="text-sm px-2 py-1 rounded hover:bg-muted transition cursor-pointer">
                  Collaboration Notes
                </li>
              </ul>
            </ScrollArea>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
