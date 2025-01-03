"use client";
import { useState, useEffect } from "react";
import { utils, writeFile } from "xlsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useReports } from "@/utils/report-context";
import { fetchAllReports } from "@/backend/utils";
import Loading from "../loading";
import { Button } from "@/components/ui/button";
import {  Download } from "lucide-react";

export default function TableWithFilter() {
  const { data, setData, selectedStatus, selectedType, setSelectedStatus, setSelectedType } = useReports();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchAndSet = async () => {
      const reports = await fetchAllReports();
      localStorage.setItem("reports", JSON.stringify(reports));
      setData(reports);
      setIsLoading(false)
    }
    fetchAndSet();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const filteredData = data.filter(
    (row) => (row.status === selectedStatus || selectedStatus === "All") &&
             (row.types.some(x => x.toLowerCase() === selectedType.toLowerCase()) || selectedType === "All")
  );
  const all_types = [
    "All",
    "Verbal Abuse",
    "Sexual Harassment",
    "Bullying",
    "Stalking",
    "Cyber Harassment",
    "Discrimination",
    "Abuse of Authority by staff or faculty",
  ];

  const exportToExcel = ()=>{
    const worksheet = utils.json_to_sheet(filteredData);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Reports");
    writeFile(workbook, "filtered_reports.xlsx");
  }

  return (
    <div className="flex flex-col items-end">
      <div className="flex gap-4">
        <Select
          defaultValue={selectedType}
          onValueChange={(value) => setSelectedType(value)}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue>{selectedType}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {all_types.map((value) => <SelectItem key={value} value={value}>{value}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select
          defaultValue={selectedStatus}
          onValueChange={(value) => setSelectedStatus(value)}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue>{selectedStatus}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="unreviewed">Unreviewed</SelectItem>
            <SelectItem value="pending">
              Pending
            </SelectItem>
            <SelectItem value="resolved">Resolved</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={exportToExcel}>Download <Download /> </Button>
      </div>
      <DataTable columns={columns} data={filteredData} />
    </div>
  );
}
