"use client"
import { Copy, Plus } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { RatingSelection } from "./rating-selection"
 
export default function PendingButton() {
  const [selectedRating, setSelectedRating] = useState(null)
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline"><Plus />Add to Pending</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Select Priority</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center m-5">
          <RatingSelection selectedRating={selectedRating} setSelectedRating={setSelectedRating} />
        </div>
        <DialogFooter className="">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button type="submit">Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}