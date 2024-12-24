"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Edit, StickyNote } from 'lucide-react'
import { updateReport } from "@/backend/utils"
import SubmitButton from "@/components/submit-button"
import { useReports } from "@/utils/report-context"


export default function EditableNotesPopover({ reportId, initialNotes }) {
  const { data, setData } = useReports()
  const [notes, setNotes] = useState(initialNotes)
  const [tempNotes, setTempNotes] = useState(notes)
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSave = async () => {
    setNotes(tempNotes)
    setIsLoading(true)
    await updateReport(reportId, { adminNotes: tempNotes })
    data.forEach((r) => {
      if (r.id === reportId) {
        r.adminNotes = tempNotes
      }
    })
    setData(data)
    localStorage.setItem("reports", JSON.stringify(data))
    setIsLoading(false)
    setIsOpen(false)
  }

  const handleCancel = () => {
    setTempNotes(notes)
    setIsOpen(false)
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex gap-2"><StickyNote className="h-4 w-4" />Notes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-start">
          <p className="flex-grow whitespace-pre-wrap">{notes}</p>
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon">
                <Edit className="h-5 w-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <Textarea
                value={tempNotes}
                onChange={(e) => setTempNotes(e.target.value)}
                className="min-h-[150px] mb-2"
              />
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={handleCancel}>Cancel</Button>
                <SubmitButton text="Save" onClick={handleSave} isLoading={isLoading} disabled={isLoading} loadingText="Saving" />
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </CardContent>
    </Card>
  )
}

