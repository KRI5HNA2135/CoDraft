// components/Sidebar.tsx
'use client'

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"

const Sidebar = () => {
  // return (
  //   <aside className="w-64 h-full bg-white border-r shadow-sm p-4 flex flex-col">
  //     <Button className="mb-4" variant="default">New Document</Button>

  //     <ScrollArea className="flex-1">
  //       {/* My Documents */}
  //       <div>
  //         <h2 className="text-sm font-semibold text-gray-600 mb-2">My Documents</h2>
  //         <nav className="space-y-2">
  //           <SidebarItem label="✍️ Legal Agreement" />
  //           <SidebarItem label="New Doc 123" />
  //         </nav>
  //       </div>

  //       <Separator className="my-4" />

  //       {/* Shared with Me */}
  //       <div>
  //         <h2 className="text-sm font-semibold text-gray-600 mb-2">Shared with Me</h2>
  //         <nav className="space-y-2">
  //           <SidebarItem label="👥 Team Plan" />
  //           <SidebarItem label="📆 Weekly OKRs" />
  //           <SidebarItem label="🛒 Grocery List" active />
  //           <SidebarItem label="📋 Master Plan" />
  //         </nav>
  //       </div>
  //     </ScrollArea>
  //   </aside>
  // )


  return (
    <Sheet>
  <SheetTrigger>Open</SheetTrigger>
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
  )
}

const SidebarItem = ({ label, active = false }: { label: string; active?: boolean }) => {
  return (
    <button
      className={cn(
        "w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors",
        active
          ? "bg-blue-100 text-blue-600 font-semibold"
          : "hover:bg-gray-100 text-gray-700"
      )}
    >
      {label}
    </button>
  )
}

export default Sidebar
