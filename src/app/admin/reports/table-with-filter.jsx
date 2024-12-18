"use client";
import { useState } from 'react'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import { DataTable } from './data-table';

export default function TableWithFilter({ columns, data }) {
  const [selectedStatus, setSelectedStatus] = useState("unreviewed");
  const filteredData = data.filter(row => (row.status === selectedStatus) || (selectedStatus === 'all'));
  return (
    <div className="flex flex-col items-end">
    <Select defaultValue="unreviewed" onValueChange={(value) => setSelectedStatus(value)}>
      <SelectTrigger className="w-[200px]">
        <SelectValue>{selectedStatus}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="unreviewed">Unreviewed</SelectItem>
        <SelectItem value="under investigation">Under Investigation</SelectItem>
        <SelectItem value="resolved">Resolved</SelectItem>
      </SelectContent>
    </Select>
    <DataTable columns={columns} data={filteredData} />
    </div>
  )
}
