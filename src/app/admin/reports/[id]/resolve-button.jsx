import { CheckCheck } from "lucide-react"
 
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
 
export default function ResolveButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant=""><CheckCheck />Mark as Resolved</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
        </DialogHeader>
        <DialogFooter className="mt-4">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Close
            </Button>
          </DialogClose>
          <Button type="submit">Yes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}