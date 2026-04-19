"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Trophy, BookOpen, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const publications = [
  {
    title: "Designing an Optimal Washout Filter for a Flight Simulator Using Linear Quadratic Regulator (LQR)",
    journal: "Arabian Journal for Science and Engineering",
    date: "June 2023",
    link: "#",
  },
  {
    title: "Flight Simulator Motion Cueing Platform: Interfacing and Pilot Controls Prototyping",
    journal: "MSA Engineering Journal",
    date: "February 2023",
    link: "#",
  },
]

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="py-12 md:py-16 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Achievements & <span className="text-primary">Publications</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Achievement Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-8 glow-border relative overflow-hidden group"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-primary/10 text-primary">
                  <Trophy className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Honor Shield Winner</h3>
                  <p className="text-primary">16th UGRF Competition</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Awarded first place for the graduation project at the 16th Undergraduate Research Forum 
                (UGRF) hosted by Nile University and the Egyptian Knowledge Bank. The project showcased 
                innovative engineering solutions in flight simulation technology.
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">1st Place</span>
                <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                  Nile University
                </span>
              </div>
            </div>
          </motion.div>

          {/* Publications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Research Publications
            </h3>

            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                className="glass rounded-xl p-6 group hover:border-primary/50 transition-all duration-300 glow-border"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                      {pub.title}
                    </h4>
                    <p className="text-sm text-primary mb-1">{pub.journal}</p>
                    <p className="text-xs text-muted-foreground">{pub.date}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="shrink-0 text-muted-foreground hover:text-primary hover:bg-primary/10"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
