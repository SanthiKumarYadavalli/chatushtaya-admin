"use client";
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button";

export const columns = [
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "status",
    header: "Status"
  },
]
