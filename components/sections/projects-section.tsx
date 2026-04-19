"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useCallback } from "react"
import { Briefcase, GraduationCap } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

import { projects } from "@/lib/data/projects"
import { ProjectCard } from "@/components/projects/project-card"
import { ImageLightbox } from "@/components/projects/image-lightbox"
import { SplineViewerDialog } from "@/components/projects/spline-viewer-dialog"

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState("ARIA")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedSpline, setSelectedSpline] = useState<string | null>(null)

  const handleCloseSpline = useCallback(() => {
    setSelectedSpline(null)
  }, [])

  const handleCloseImage = useCallback(() => {
    setSelectedImage(null)
  }, [])

  return (
    <section id="projects" className="py-12 md:py-16 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
            Projects
          </h2>
        </motion.div>

        <Tabs defaultValue="ARIA" onValueChange={setActiveTab} className="w-full">
          {/* Segmented Control Style Tabs */}
          <div className="flex justify-center mb-12">
            <TabsList className="bg-muted/30 p-1.5 h-auto rounded-xl border border-white/5">
              <TabsTrigger
                value="ARIA"
                className="flex items-center gap-2.5 px-6 py-3 rounded-lg text-sm font-semibold transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-lg data-[state=inactive]:text-muted-foreground/60 hover:text-foreground"
              >
                <Briefcase className="h-4 w-4" />
                ARIA
              </TabsTrigger>
              <TabsTrigger
                value="Academic"
                className="flex items-center gap-2.5 px-6 py-3 rounded-lg text-sm font-semibold transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-lg data-[state=inactive]:text-muted-foreground/60 hover:text-foreground"
              >
                <GraduationCap className="h-4 w-4" />
                Academic
              </TabsTrigger>
            </TabsList>
          </div>

          <AnimatePresence mode="wait">
            <TabsContent key={activeTab} value={activeTab}>
              <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                {projects
                  .filter((project) => project.category === activeTab)
                  .map((project, index) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      index={index}
                      onSelectImage={setSelectedImage}
                      onSelectSpline={setSelectedSpline}
                    />
                  ))}
              </div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>

        {/* Extracted Lightbox */}
        <ImageLightbox image={selectedImage} onClose={handleCloseImage} />

        {/* Extracted Spline 3D Viewer */}
        <SplineViewerDialog url={selectedSpline} onClose={handleCloseSpline} />
      </div>
    </section>
  )
}