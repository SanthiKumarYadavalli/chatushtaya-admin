"use client"

import * as React from "react"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useRouter } from "next/navigation"
import Loading from "../loading"
import moment from "moment"
import { ScrollArea } from "@/components/ui/scroll-area"

export const columns = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="text-left">{row.getValue("status")}</div>
    ),
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
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => {
        const date = row.getValue("datetime");
        return (
          <div className="text-left ml-6">
            {moment(date).fromNow()}
          </div>  
          )
    },
    sortDescFirst: true
  },
  {
    accessorKey: "severity",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
          Severity
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => {
      const severity = row.getValue("severity");
      return (
        <div className="text-center ml-[-20]">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold 'bg-gradient-to-r from-green-400 to-blue-500 text-white'} transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md`}>
            {`${severity?severity:"unknown"}`}
          </span>
        </div>
      );
    },
    sortDescFirst: true
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => (
      <div className="text-left ml-3">{row.getValue("location")}</div>
    ),
  },
  {
    accessorKey: "type",
    header: () => <div>Type(s)</div>,
    cell: ({ row }) => {
      const type = row.original.types;
      const formatted = type.join(', ');
      return <div className="text-left font-medium">{formatted}</div>
    },
  },
]

export default function DataTableDemo({ data }) {
  console.log([...data]);
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false)

  const router = useRouter();

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="fixed top-0 left-[15rem] w-full h-full z-10 bg-black opacity-50"></div>
        <div className="mt-20"><Loading /></div>
      </div>
    )
  }

  return (
    <div className="w-full border-none overflow-y-auto">
      <div className="flex items-center py-4 border-none">
        <Input
          placeholder="Filter Location..."
          value={String((table.getColumn("location")?.getFilterValue()) ?? "")}
          onChange={(event) =>
            table.getColumn("location")?.setFilterValue(String(event.target.value))
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="border rounded-md">
        <ScrollArea className="h-[400px]">
          <Table>
            <TableHeader >
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} className="sticky top-0 bg-background ">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className="align-center text-center"
                    onClick={() => {
                      setIsLoading(true);
                      router.push(`/admin/reports/${row.original.id}`)
                    }}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
    </div>
  )
}

