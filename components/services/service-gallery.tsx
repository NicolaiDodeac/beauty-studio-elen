"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface ServiceGalleryProps {
  images: string[]
  title: string
}

export default function ServiceGallery({ images, title }: ServiceGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="my-16">
      <h2 className="text-2xl font-bold mb-6 font-heading">Gallery</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${title} example ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <div className="relative w-full h-[80vh]">
            {selectedImage && (
              <Image src={selectedImage || "/placeholder.svg"} alt={title} fill className="object-contain" />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
