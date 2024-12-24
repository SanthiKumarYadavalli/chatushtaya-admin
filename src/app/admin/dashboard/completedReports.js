import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export default function ScrollAreaDemo({reports}) {
    return (
        <ScrollArea className="h-72 w-full rounded-md border ">
            <div className="p-4">
                <h4 className=" pl-6 mb-6 text-md font-medium leading-none">Completed Reports</h4>
                {reports.map((report) => (
                    <>
                        <div key={report.id} className=" pl-10 flex justify-between items-center text-sm">
                            <div>
                                Reported By : {report.username?report.username:"Anonymous"} <br />
                            </div>
                            <div>
                                completed
                            </div>
                        </div>
                        <Separator className="my-2" />
                    </>
                ))}
            </div>
        </ScrollArea>
    )
}
