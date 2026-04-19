"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Box, Image as ImageIcon, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/data/projects"
import { ProjectGalleryDialog } from "./project-gallery-dialog"

interface ProjectCardProps {
  project: Project
  index: number
  onSelectImage: (src: string) => void
  onSelectSpline: (url: string) => void
}

export function ProjectCard({ project, index, onSelectImage, onSelectSpline }: ProjectCardProps) {
  const isInteractive3D = project.interactive3D && project.title === "Flight Simulator Platform"
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 flex flex-col h-full"
    >
      {/* Image Section - Top Half */}
      <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden bg-black/20">
        {project.spline ? (
          <div className="absolute inset-0 w-full h-full">
            <iframe
              src={project.spline}
              className="absolute w-full h-[calc(100%+120px)] border-0 -top-[60px] pointer-events-none"
              title={`${project.title} 3D Model`}
              allow="autoplay; fullscreen; vr"
              loading="lazy"
            />
          </div>
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 pointer-events-none" />

        {/* Tags atop image */}
        <div className="absolute bottom-4 left-6 flex flex-wrap gap-2">
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-md bg-primary/20 backdrop-blur-md text-primary text-[10px] uppercase font-bold tracking-widest border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link icon overlay / Gallery Trigger */}
        <div className="absolute top-4 right-6 flex gap-2">
          {project.gallery && (
            <ProjectGalleryDialog project={project} onSelectImage={onSelectImage}>
              <button className="p-2.5 rounded-full bg-background/50 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground transform active:scale-90">
                <ImageIcon className="h-4 w-4" />
              </button>
            </ProjectGalleryDialog>
          )}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-background/50 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground transform active:scale-90"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Content Section - Bottom Half */}
      <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Stack & Footer */}
        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-[10px] font-mono border border-primary/10 rounded-sm text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {isInteractive3D ? (
              <Button
                variant="link"
                className="p-0 h-auto text-primary font-bold uppercase tracking-wider text-xs hover:no-underline flex items-center gap-2 group/btn"
                asChild
              >
                <Link href="/projects/flight-simulator-3d">
                  View Experience
                  <Zap className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            ) : (
              <Button
                variant="link"
                className="p-0 h-auto text-primary font-bold uppercase tracking-wider text-xs hover:no-underline flex items-center gap-2 group/btn"
                asChild
                onClick={(e) => {
                  if (project.spline) {
                    e.preventDefault()
                    onSelectSpline(project.spline)
                  }
                }}
              >
                <a
                  href={project.spline ? "#" : project.link}
                  target={project.spline ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                >
                  {project.spline ? "View 3D Model" : "View Project"}
                  {project.spline ? (
                    <Box className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                  ) : (
                    <ExternalLink className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                  )}
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
