import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"
import Image from "next/image"

interface ImageLightboxProps {
  image: string | null
  onClose: () => void
}

export function ImageLightbox({ image, onClose }: ImageLightboxProps) {
  return (
    <Dialog open={!!image} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[95vw] h-fit max-h-[95vh] p-0 border-none bg-transparent shadow-none overflow-hidden">
        <DialogHeader className="sr-only">
          <DialogTitle>Project Image Detail</DialogTitle>
        </DialogHeader>
        {image && (
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="relative w-full h-[80vh]">
              <Image
                src={image}
                alt="Zoomed Project Image"
                fill
                className="object-contain"
              />
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-primary transition-colors z-50"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
