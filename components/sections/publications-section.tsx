"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  FileText,
  ExternalLink,
  BookOpen,
  Calendar,
  User,
  Quote,
  Trophy,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const items = [
  {
    type: "achievement",
    title: "Honor Shield Winner",
    category: "16th UGRF Competition",
    date: "2023",
    description: "Awarded first place for the graduation project at the 16th Undergraduate Research Forum (UGRF) hosted by Nile University and the Egyptian Knowledge Bank. The project showcased innovative engineering solutions in flight simulation technology.",
    institution: "Nile University",
    highlight: "1st Place",   
    tags: ["Robotics", "Flight Simulation", "Engineering Excellence"],
    image: "/Gallery/Essam1.jpeg",
  },
  {
    type: "publication",
    title: "Designing an Optimal Washout Filter for a Flight Simulator Using Linear Quadratic Regulator (LQR)",
    conference: "Research Paper",
    journal: "Technical Report",
    date: "2023",
    description: "Developed an advanced motion cueing algorithm for a 6-DOF flight simulator using LQR-based optimal control to improve pilot experience and simulator realism.",
    authors: ["Ahmed Essameldin Ahmad"],
    pdf: "/PUBLICATIONS/Designing an Optimal Washout Filter for a Flight Simulator Using Linear Quadratic Regulator (LQR)/Designing an Optimal Washout Filter for a Flight Simulator Using Linear Quadratic Regulator (LQR).pdf",
    tags: ["Optimal Control", "LQR", "Flight Simulation", "Robotics"],
  },
  {
    type: "publication",
    title: "International Conference on ARTIFICIAL INTELLIGENCE & SUSTAINABLE ENGINEERING",
    conference: "AISE 2023",
    journal: "Conference Proceedings",
    date: "Mar 2023",
    description: "Presented research on sustainable engineering solutions powered by AI, focusing on industrial automation and intelligent systems.",
    authors: ["Ahmed Essameldin Ahmad"],
    pdf: "/PUBLICATIONS/International Conference ARTIFICIAL INTELLIGENCE & SUSTAINABLE ENGINEERING/Copy of Copy of Conference Paper ME15.pdf",
    tags: ["Artificial Intelligence", "Sustainable Engineering", "Industrial Automation"],
    image: "/PUBLICATIONS/International Conference ARTIFICIAL INTELLIGENCE & SUSTAINABLE ENGINEERING/IMG-20230314-WA0006(1).jpg"
  },
]

export function PublicationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="py-12 md:py-16 relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
            Achievements & <span className="text-primary">Publications</span>
          </h2>
        </motion.div>

        <div className="grid gap-8">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`group glass p-8 md:p-10 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 ${item.type === 'achievement' ? 'bg-primary/5' : ''}`}
            >
              <div className="flex flex-col lg:flex-row gap-10">
                {/* Content Side */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                      {item.type === 'achievement' ? <Trophy className="h-3 w-3" /> : <Calendar className="h-3 w-3" />}
                      {item.date}
                    </span>
                    <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-muted-foreground text-[10px] font-bold uppercase tracking-widest border border-white/10">
                       {item.type === 'achievement' ? <Trophy className="h-3 w-3" /> : <BookOpen className="h-3 w-3" />}
                       {item.type === 'achievement' ? item.category : item.conference}
                    </span>
                    {item.type === 'achievement' && item.institution && (
                        <span className="px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-widest">
                            {item.institution}
                        </span>
                    )}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </h3>

                  {item.authors && (
                    <div className="flex items-center gap-2 text-muted-foreground mb-6">
                        <User className="h-4 w-4 text-primary/60" />
                        <span className="text-sm font-medium">
                            {item.authors.join(", ")}
                        </span>
                    </div>
                  )}

                  <div className="relative mb-8">
                    <Quote className="absolute -left-6 -top-2 h-10 w-10 text-primary/5 -z-0" />
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl relative z-10">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-[10px] font-mono border border-primary/10 rounded-sm text-muted-foreground bg-primary/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    {item.pdf && (
                        <Button
                        variant="outline"
                        className="rounded-full px-6 border-white/10 hover:border-primary/50 transition-all group/btn"
                        asChild
                        >
                        <a href={item.pdf} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-primary" />
                            {item.pdf === '#' ? 'View Details' : 'Download Paper'}
                            <ExternalLink className="h-3 w-3 opacity-0 group-hover/btn:opacity-100 transition-opacity ml-1" />
                        </a>
                        </Button>
                    )}
                    {item.highlight && (
                         <span className="text-primary font-bold uppercase tracking-widest text-xs">
                             {item.highlight}
                         </span>
                    )}
                  </div>
                </div>

                {/* Optional Image / Visual Side */}
                {(item.image || item.type === 'achievement') && (
                  <div className="lg:w-1/3 flex items-center justify-center">
                    <div className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 ${item.type === 'achievement' && !item.image ? 'bg-primary/10 flex items-center justify-center' : ''}`}>
                       {item.image ? (
                        <img
                         src={item.image}
                         alt={item.title}
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                       />
                       ) : (
                         <Trophy className="h-24 w-24 text-primary animate-pulse" />
                       )}
                       <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                    </div>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
