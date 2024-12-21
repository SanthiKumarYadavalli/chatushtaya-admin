"use client";
import { ArrowUpDown, Star } from "lucide-react"
import { Button } from "@/components/ui/button";
import moment from "moment";

export const columns = [
  {
    accessorKey: "types",
    header: "Types",
    cell: ({ row }) => {
      const types = row.getValue("types");
      return types.map((type) => (
        <div key={type} className="text-sm">{type}</div>
      ))
    }
  },
  {
    accessorKey: "datetime",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Incident Time
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const date = row.getValue("datetime");
      return moment(date).fromNow();
    },
    sortDescFirst: true
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      if (status === "pending") {
        let icons = [];
        for (let i = 0; i < row.original.adminPriority; i++) {
          icons.push(<Star key={i} className="h-4 w-4" />);
        }
        return <div className="flex gap-1">{icons}</div>
      } else {
        return <div>{status}</div>
      }
    }
  },
]
