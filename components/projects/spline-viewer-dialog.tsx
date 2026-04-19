"use client"

import { useState, useCallback } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X, Box, RotateCcw, ZoomIn } from "lucide-react"

interface SplineViewerDialogProps {
  url: string | null
  onClose: () => void
}

export function SplineViewerDialog({ url, onClose }: SplineViewerDialogProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (!open) {
        setIsLoaded(false)
        onClose()
      }
    },
    [onClose]
  )

  return (
    <Dialog open={!!url} onOpenChange={handleOpenChange}>
      <DialogContent
        className="
          max-w-[100vw] w-full h-[100dvh]
          md:max-w-[92vw] md:h-[90vh] md:rounded-2xl
          p-0 border-0
          bg-black
          overflow-hidden flex flex-col
          shadow-[0_32px_80px_-12px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.06)]
          focus:outline-none [&>button:last-child]:hidden
        "
      >
        {/* Top loading bar */}
        <div
          aria-hidden
          className={`
            absolute top-0 left-0 h-[2px] z-50 bg-primary
            transition-all duration-700 ease-out
            ${isLoaded ? "w-full opacity-0" : "w-2/3 opacity-100"}
          `}
          style={{ transitionDelay: isLoaded ? "300ms" : "0ms" }}
        />

        {/* Header bar */}
        <header className="relative z-40 flex items-center justify-between px-6 py-4 md:px-8 border-b border-white/[0.05]">
          {/* Left: icon + label */}
          <div className="flex items-center gap-3.5">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 border border-primary/15">
              <Box className="w-4 h-4 text-primary" />
              {/* Live indicator dot */}
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground/50">
                Interactive Model
              </span>
              <DialogTitle className="text-sm font-semibold text-foreground/90 leading-tight">
                3D Viewer
              </DialogTitle>
            </div>
          </div>

          {/* Right: close */}
          <button
            onClick={() => handleOpenChange(false)}
            className="
              group flex items-center gap-2 px-3 py-2 rounded-xl
              bg-white/5 border border-white/[0.08]
              text-muted-foreground/60 hover:text-foreground
              hover:bg-white/10 hover:border-white/15
              transition-all duration-200 active:scale-95
            "
          >
            <span className="text-[11px] font-semibold tracking-wider uppercase hidden md:inline">
              Close
            </span>
            <X className="w-4 h-4 transition-transform duration-200 group-hover:rotate-90" />
          </button>
        </header>

        {/* Main canvas */}
        <main className="relative flex-1 z-10 overflow-hidden bg-black">
          {/* Loading overlay */}
          <div
            aria-hidden={isLoaded}
            className={`
              absolute inset-0 z-20 flex flex-col items-center justify-center gap-6
              bg-black transition-opacity duration-700 ease-out pointer-events-none
              ${isLoaded ? "opacity-0" : "opacity-100"}
            `}
          >
            <div className="relative w-14 h-14">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full border border-primary/25" />
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full border border-primary/15"
                style={{ animationDelay: "0.3s" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Box className="w-5 h-5 text-primary/70" />
              </div>
            </div>
            <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground/40">
              Loading model
            </p>
          </div>

          {/* Spline iframe */}
          <div className="absolute inset-0 w-full h-full">
            {url && (
              <iframe
                key={url}
                src={url}
                className={`
                  absolute w-full h-[calc(100%+120px)] border-0 -top-[60px]
                  transition-opacity duration-700
                  ${isLoaded ? "opacity-100" : "opacity-0"}
                `}
                title="3D Model Viewer"
                allow="autoplay; fullscreen; vr"
                onLoad={() => setIsLoaded(true)}
              />
            )}
          </div>
        </main>

        {/* Footer hint bar */}
        <footer className="relative z-40 flex items-center justify-center gap-6 px-6 py-3 md:px-8 border-t border-white/[0.05]">
          <div className="flex items-center gap-5 text-muted-foreground/30">
            <span className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.18em] uppercase">
              <RotateCcw className="w-3 h-3" />
              Drag to rotate
            </span>
            <span className="w-px h-3 bg-white/10" />
            <span className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.18em] uppercase">
              <ZoomIn className="w-3 h-3" />
              Scroll to zoom
            </span>
          </div>
        </footer>
      </DialogContent>
    </Dialog>
  )
}
