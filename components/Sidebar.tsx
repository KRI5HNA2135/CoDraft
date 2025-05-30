'use client'

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { X, ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  return (
    <aside className="w-80 h-screen bg-white border-r shadow-sm p-4 flex flex-col">
      {/* Sidebar Header with Close Button */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-gray-900">Documents</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="p-1 hover:bg-gray-100"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>

      <Button className="mb-4" variant="default">New Document</Button>

      <ScrollArea className="flex-1">
        {/* My Documents */}
        <div>
          <h3 className="text-sm font-semibold text-gray-600 mb-2">My Documents</h3>
          <nav className="space-y-2">
            <SidebarItem label="✍️ Legal Agreement" />
            <SidebarItem label="New Doc 123" />
          </nav>
        </div>

        <Separator className="my-4" />

        {/* Shared with Me */}
        <div>
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Shared with Me</h3>
          <nav className="space-y-2">
            <SidebarItem label="👥 Team Plan" />
            <SidebarItem label="📆 Weekly OKRs" />
            <SidebarItem label="🛒 Grocery List" active />
            <SidebarItem label="📋 Master Plan" />
          </nav>
        </div>
      </ScrollArea>
    </aside>
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