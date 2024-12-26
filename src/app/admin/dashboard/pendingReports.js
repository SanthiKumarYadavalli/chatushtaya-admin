import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { ArrowRight } from 'lucide-react'
import Link from "next/link"


export default function ScrollAreaDemo({ reports }) {
  return (
    <ScrollArea className="h-[370px] w-full rounded-md border-none">
      <div className="p-4">
        <h4 className="mb-6 text-md font-medium leading-none">Pending Reports</h4>
        <div className="grid grid-cols-3 gap-4 text-sm font-semibold mb-4">
          <h3>Reported By</h3>
          <h3>Date</h3>
          <h3 className="text-right">See more</h3>
        </div>
        <Separator className="my-2" />
        {reports.map((report) => (
          <React.Fragment key={report.id}>
            <div className="grid grid-cols-3 gap-4 py-2 text-sm">
              <div>{report.username || "Anonymous"}</div>
              <div>{new Date(report.createdAt).toLocaleDateString()}</div>
              <div className="text-right">
                <Link href={`reports/${report.id}`} className="inline-flex items-center hover:text-primary">
                  <span className="mr-1">View</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  )
}

