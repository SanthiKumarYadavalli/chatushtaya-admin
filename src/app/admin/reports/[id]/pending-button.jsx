"use client"
import { Plus, Loader2, Router } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
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
import { updateReport } from "@/backend/utils"
import { useRouter } from "next/navigation"
import SubmitButton from "@/components/submit-button"
import { useReports } from "@/utils/report-context"
 
export default function PendingButton({ reportId }) {
  const [selectedRating, setSelectedRating] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { toast } = useToast()
  const router = useRouter()
  const { data, setData } = useReports()

  const handleConfirm = async () => {
    setIsLoading(true);
    await updateReport(reportId, { status: 'pending', adminPriority: selectedRating });
    data.forEach((r) => {
      if (r.id === reportId) {
        r.status = 'pending';
        r.adminPriority = selectedRating;
      }
    });
    setData(data);
    localStorage.setItem('reports', JSON.stringify(data));
    setIsLoading(false);
    setIsDialogOpen(false);
    toast({
      title: 'Added to Pending',
      duration: 1000,
    })
    router.refresh()
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
          <SubmitButton text="Add" disabled={isLoading || !selectedRating} onClick={handleConfirm} isLoading={isLoading} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}