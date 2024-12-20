"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DataTable } from "./data-table";

export default function TableWithFilter({ columns, data }) {
  const [selectedStatus, setSelectedStatus] = useState("unreviewed");
  const [selectedType, setSelectedtype] = useState("all");
  const filteredData = data.filter(
    (row) => (row.status === selectedStatus || selectedStatus === "all") &&
             (row.types.some(x => x.toLowerCase() === selectedType.toLowerCase()) || selectedType === "all")
  );
  const all_types = [
    "all",
    "Verbal Abuse",
    "Sexual Harassment",
    "Bullying",
    "Stalking",
    "Cyber Harassment",
    "Discrimination",
    "Abuse of Authority by staff or faculty",
  ];
  return (
    <div className="flex flex-col items-end">
      <div className="flex gap-4">
        <Select
          defaultValue="all"
          onValueChange={(value) => setSelectedtype(value)}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue>{selectedType}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {all_types.map((value) => <SelectItem key={value} value={value}>{value}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select
          defaultValue="unreviewed"
          onValueChange={(value) => setSelectedStatus(value)}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue>{selectedStatus}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="unreviewed">Unreviewed</SelectItem>
            <SelectItem value="pending">
              Pending
            </SelectItem>
            <SelectItem value="resolved">Resolved</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <DataTable columns={columns} data={filteredData} />
    </div>
  );
}
