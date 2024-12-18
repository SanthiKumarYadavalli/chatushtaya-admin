'use client'

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { X } from 'lucide-react'
import { DialogTitle } from '@radix-ui/react-dialog'

export function MediaCard({ src, alt, type }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Card className="overflow-hidden cursor-pointer group">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className="relative w-full h-full">
            {type === 'image' ? (
              <img 
                src={src} 
                alt={alt} 
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            ) : (
              <video 
                src={src} 
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity" />
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-full max-h-full p-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-90">
          <DialogTitle className="text-white"></DialogTitle>
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-white hover:text-gray-300 focus:outline-none bg-black z-20"
            aria-label="Close fullscreen view"
          >
            <X size={30} />
          </button>
          {type === 'image' ? (
            <img src={src} alt={alt} className="max-w-full max-h-full object-contain" />
          ) : (
            <video src={src} controls className="max-w-full max-h-full object-contain" />
          )}
        </DialogContent>
      </Dialog>
    </Card>
  )
}
