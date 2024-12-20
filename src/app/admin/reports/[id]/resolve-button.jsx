"use client"
import { CheckCheck, Loader2 } from "lucide-react"
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
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { updateReport } from "@/backend/utils"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import SubmitButton from "@/components/submit-button"
 
export default function ResolveButton({ reportId }) {
  const [openDialog, setOpenDialog] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [remarks, setRemarks] = useState('')
  const { toast } = useToast()
  const router = useRouter()

  const handleConfirm = async () => {
    setIsLoading(true)
    await updateReport(reportId, { status: 'resolved', adminRemarks: remarks })
    setIsLoading(false)
    setOpenDialog(false)
    toast({
      title: 'Marked as Resolved',
      duration: 1000,
    })
    router.refresh()
  }

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button><CheckCheck />Mark as Resolved</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Send any remarks to the reporter</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Input type="text" placeholder="Enter your remarks" onChange={(e) => setRemarks(e.target.value)} />
        </div>
        <DialogFooter className="mt-4">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Close
            </Button>
          </DialogClose>
          <SubmitButton text="Confirm & Send" onClick={handleConfirm} isLoading={isLoading} />  
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}