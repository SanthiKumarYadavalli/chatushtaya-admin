"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
    const router = useRouter()
    const handleClick = () => {
        router.back()
        router.refresh()
    }
    return (
        <Button variant="ghost" className="ml-10 w-10 h-10" onClick={handleClick}><ArrowLeft /></Button>
    )
}