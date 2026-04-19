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
  ShieldCheck,
  Zap,
  DraftingCompass,
  Laptop,
  Palette,
  Factory,
  Activity,
  ClipboardList
} from "lucide-react"

const technicalSkills = [
  // CAD & Design
  { name: "SolidWorks (CSWP)", level: 95, icon: DraftingCompass, description: "Advanced Assemblies & Surfacing" },
  { name: "Fusion 360", level: 90, icon: Laptop, description: "Cloud-based CAD/CAM" },
  { name: "Autodesk Inventor", level: 85, icon: Cog, description: "Parametric Part Design" },
  { name: "Blender", level: 80, icon: Palette, description: "3D Modeling & Animation" },
  // Simulation & Analysis
  { name: "MATLAB & Simscape", level: 90, icon: Activity, description: "Control System Modeling" },
  { name: "FEA Analysis", level: 85, icon: BarChart3, description: "Structural & Thermal Simulation" },
  { name: "KUKA Process Simulate", level: 88, icon: Cpu, description: "Robot Workspace Simulation" },
  { name: "Yaskawa Simulation", level: 85, icon: Zap, description: "Industrial Robot Setup" },
  // Visualization & Rendering
  { name: "KeyShot", level: 90, icon: Palette, description: "Photorealistic Rendering" },
  { name: "DaVinci Resolve", level: 85, icon: Presentation, description: "Post-Production & Color" },
  // Manufacturing & Standards
  { name: "DFM / DFA", level: 92, icon: Factory, description: "Design for Manufacture" },
  { name: "GD&T", level: 90, icon: Pencil, description: "ISO/ASME Standard Drafting" },
  { name: "CNC Machining", level: 85, icon: Wrench, description: "G-Code & Protocol Prep" },
  // Robot Brands
  { name: "KUKA Robots", level: 92, icon: Cpu, description: "Integration & Programming" },
  { name: "Yaskawa Robots", level: 90, icon: Zap, description: "Industrial Automation" },
  { name: "Mitsubishi Robots", level: 82, icon: Cog, description: "Factory Integration" },
  // Productivity & Planning
  { name: "Notion", level: 95, icon: ClipboardList, description: "Project & Knowledge Mgmt" },
  { name: "Microsoft Excel", level: 92, icon: BarChart3, description: "Data Analysis & Logic" },
  { name: "Technical Presentations", level: 90, icon: Presentation, description: "Communication & Delivery" },
]

const softSkills = [
  {
    name: "Leadership",
    icon: Users,
    description: "Driving teams toward milestones.",
    color: "from-blue-500/20 to-blue-600/5",
    textColor: "text-blue-400"
  },
  {
    name: "Presentation",
    icon: Presentation,
    description: "Clear insights from data.",
    color: "from-purple-500/20 to-purple-600/5",
    textColor: "text-purple-400"
  },
  {
    name: "Problem Solving",
    icon: Lightbulb,
    description: "Innovative technical paths.",
    color: "from-amber-500/20 to-amber-600/5",
    textColor: "text-amber-400"
  },
  {
    name: "Time Management",
    icon: Clock,
    description: "Optimized efficient workflows.",
    color: "from-emerald-500/20 to-emerald-600/5",
    textColor: "text-emerald-400"
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-12 md:py-16 relative overflow-hidden" ref={ref}>
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-24 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight uppercase">
            Skills & <span className="text-primary">Tools</span>
          </h2>
        </motion.div>

        {/* Top Row: Professional Mastery */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10 w-fit mx-auto lg:mx-0">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary shrink-0 flex items-center gap-3">
               <ShieldCheck className="h-4 w-4" />
               Professional Mastery
            </h3>
            <div className="h-px w-24 bg-gradient-to-r from-primary/30 to-transparent" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className={`glass p-4 rounded-xl border border-white/5 bg-gradient-to-br ${skill.color} group hover:border-primary/30 transition-all duration-300 flex items-center gap-4`}
              >
                <div className={`p-2.5 w-fit rounded-lg bg-white/5 ${skill.textColor} group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shrink-0`}>
                  <skill.icon className="h-4 w-4" />
                </div>
                <div>
                   <h4 className="font-bold text-foreground text-sm tracking-tight">{skill.name}</h4>
                   <p className="text-[9px] leading-tight text-muted-foreground mt-0.5 line-clamp-1">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Area: Technical Stack */}
        <div>
           <div className="flex items-center gap-4 mb-10 w-fit mx-auto lg:mx-0">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary shrink-0 flex items-center gap-3">
               <Cpu className="h-4 w-4" />
               Technical Stack
            </h3>
            <div className="h-px w-24 bg-gradient-to-r from-primary/30 to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {technicalSkills.map((skill, skillIdx) => (
              <div
                key={skill.name}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/50 hover:bg-primary/[0.02] transition-all duration-500 relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                        <skill.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors text-base tracking-tight">{skill.name}</h4>
                        <p className="text-[10px] text-muted-foreground mt-0.5 line-clamp-1 uppercase tracking-wide font-medium">{skill.description}</p>
                      </div>
                    </div>
                    <div className="text-[10px] font-mono text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-full">{skill.level}%</div>
                  </div>
                </div>
                
                {/* Progress bar integrated at the bottom of card */}
                <div className="mt-4">
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.6 + (skillIdx * 0.05) }}
                      className="h-full bg-primary relative"
                    >
                      <div className="absolute top-0 right-0 h-full w-8 bg-white/20 blur-sm" />
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
