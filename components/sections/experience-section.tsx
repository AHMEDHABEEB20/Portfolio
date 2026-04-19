"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Building2 } from "lucide-react"

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const responsibilities = [
    "Design and develop mechanical systems and assemblies for robotic automation projects, including the Aria Robot P60",
    "Create detailed 2D and 3D engineering drawings using SolidWorks and AutoCAD for manufacturing and prototyping",
    "Lead the transition of component manufacturing to in-house CNC machining",
    "Collaborate with cross-functional teams in R&D, electrical, and production departments",
    "Participate in DFMA (Design for Manufacturing and Assembly) reviews",
    "Implement revision control and maintain drawing standards per ISO/ASME standards",
  ]

  return (
    <section id="experience" className="py-12 md:py-16 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
            Work Experience
          </h2>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-8 md:p-10 glow-border mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
            <div className="flex items-start gap-4 mb-4 md:mb-0">
              <div className="p-4 rounded-xl bg-primary/10 text-primary">
                <Building2 className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Mechanical Design Engineer</h3>
                <p className="text-primary text-lg">ARIA Technologies</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Engineering firm specializing in innovative technology solutions
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Full-time
              </span>
              <span className="text-sm">Aug 2023 - Present</span>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4 text-foreground">Key Responsibilities</h4>
            <ul className="grid md:grid-cols-2 gap-3">
              {responsibilities.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        </div>

        {/* Timeline decoration */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute left-8 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block"
          style={{ transformOrigin: "top" }}
        />
      </div>
    </section>
  )
}
