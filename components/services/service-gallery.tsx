"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface ServiceGalleryProps {
  images: string[]
  title: string
  /** Shown when images are placeholder or not yet final — avoids implying they are client before/afters */
  disclaimer?: string
}

export default function ServiceGallery({ images, title, disclaimer }: ServiceGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="my-16">
      <h2 className={`text-2xl font-bold font-heading ${disclaimer ? "mb-2" : "mb-6"}`}>Gallery</h2>
      {disclaimer ? <p className="mb-6 text-sm leading-relaxed text-stone-500">{disclaimer}</p> : null}

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
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <div className="relative w-full h-[80vh]">
            {selectedImage && (
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt={title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
