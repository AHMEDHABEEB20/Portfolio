"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Pencil,
  Cog,
  BarChart3,
  Cpu,
  Wrench,
  Users,
  Presentation,
  Lightbulb,
  Clock,
} from "lucide-react"

const technicalSkills = [
  {
    name: "SolidWorks",
    level: 95,
    icon: Pencil,
    description: "3D CAD Design & Assemblies",
  },
  {
    name: "AutoCAD",
    level: 90,
    icon: Pencil,
    description: "2D Technical Drawings",
  },
  {
    name: "Autodesk Fusion 360",
    level: 85,
    icon: Cog,
    description: "CAD/CAM Integration",
  },
  {
    name: "Inventor",
    level: 80,
    icon: Cog,
    description: "Mechanical Design",
  },
  {
    name: "FEA Analysis",
    level: 85,
    icon: BarChart3,
    description: "Structural Simulations",
  },
  {
    name: "Robotics",
    level: 90,
    icon: Cpu,
    description: "System Integration",
  },
  {
    name: "Arduino",
    level: 88,
    icon: Cpu,
    description: "Embedded Systems",
  },
  {
    name: "Manufacturing",
    level: 85,
    icon: Wrench,
    description: "CNC & Prototyping",
  },
]

const softSkills = [
  {
    name: "Leadership",
    icon: Users,
    description: "Team management and project leadership",
  },
  {
    name: "Presentation",
    icon: Presentation,
    description: "Clear communication of complex concepts",
  },
  {
    name: "Problem Solving",
    icon: Lightbulb,
    description: "Innovative solutions for engineering challenges",
  },
  {
    name: "Time Management",
    icon: Clock,
    description: "Efficient project delivery and prioritization",
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Skills & <span className="text-primary">Tools</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary" />
              Technical Skills
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="glass rounded-xl p-5 group hover:border-primary/50 transition-all duration-300 glow-border"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <skill.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{skill.name}</h4>
                      <p className="text-xs text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                    />
                  </div>
                  <div className="text-right mt-1">
                    <span className="text-xs text-primary font-mono">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary" />
              Professional Skills
            </h3>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="glass rounded-xl p-5 group hover:border-primary/50 transition-all duration-300 glow-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <skill.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{skill.name}</h4>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
