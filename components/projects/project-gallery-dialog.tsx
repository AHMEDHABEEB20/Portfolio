import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Image as ImageIcon, FileText, Maximize2, PlayCircle, ChevronRight } from "lucide-react"
import Image from "next/image"
import type { Project } from "@/lib/data/projects"

interface ProjectGalleryDialogProps {
  project: Project
  onSelectImage: (src: string) => void
  children: React.ReactNode
}

export function ProjectGalleryDialog({ project, onSelectImage, children }: ProjectGalleryDialogProps) {
  if (!project.gallery && !project.documents) {
    return <>{children}</>
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-5xl h-[85vh] overflow-y-auto bg-background/95 backdrop-blur-xl border-white/10 p-0">
        <section className="p-6 md:p-10">
          <DialogHeader className="mb-8">
            <DialogTitle className="text-3xl font-bold uppercase tracking-tight flex items-center gap-3">
              {project.title}
            </DialogTitle>
          </DialogHeader>

          <Tabs defaultValue="media" className="w-full">
            <TabsList className="bg-muted/50 p-1 mb-8">
              <TabsTrigger value="media" className="gap-2 px-6">
                <ImageIcon className="h-4 w-4" /> Media
              </TabsTrigger>
              <TabsTrigger value="docs" className="gap-2 px-6">
                <FileText className="h-4 w-4" /> Documents
              </TabsTrigger>
            </TabsList>

            <TabsContent value="media">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery?.map((item, idx) => (
                  <div key={idx} className="relative group/item rounded-xl overflow-hidden aspect-video border border-white/5 bg-black/20">
                    {item.type === "image" ? (
                      <div
                        className="relative w-full h-full cursor-zoom-in group/img"
                        onClick={() => onSelectImage(item.src)}
                      >
                        <Image src={item.src} alt={item.title} fill className="object-cover transition-transform group-hover/item:scale-105" />
                        <div className="absolute top-4 left-4 right-4 flex justify-between items-center bg-black/60 backdrop-blur-md p-3 rounded-lg opacity-0 group-hover/item:opacity-100 transition-all transform -translate-y-2 group-hover/item:translate-y-0 pointer-events-none">
                          <span className="text-[10px] font-bold uppercase tracking-widest">{item.title}</span>
                          <Maximize2 className="h-3.5 w-3.5 text-primary" />
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full h-full group/vid">
                        <video src={item.src} controls className="w-full h-full object-cover z-0" />
                        <div className="absolute top-4 left-4 right-4 flex justify-between items-center bg-black/60 backdrop-blur-md p-3 rounded-lg opacity-0 group-hover/vid:opacity-100 transition-all transform -translate-y-2 group-hover/vid:translate-y-0 pointer-events-none z-10">
                          <span className="text-[10px] font-bold uppercase tracking-widest">{item.title}</span>
                          <PlayCircle className="h-3.5 w-3.5 text-primary" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="docs">
              <div className="flex flex-col gap-4">
                {project.documents?.map((doc, idx) => (
                  <a
                    key={idx}
                    href={doc.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/doc border border-white/10 bg-white/5 p-5 rounded-2xl flex items-center justify-between hover:bg-white/10 transition-all hover:border-primary/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{doc.name}</h4>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest">Formal Documentation</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase opacity-0 group-hover/doc:opacity-100 transition-opacity">
                      View Document <ChevronRight className="h-4 w-4" />
                    </div>
                  </a>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </DialogContent>
    </Dialog>
  )
}
