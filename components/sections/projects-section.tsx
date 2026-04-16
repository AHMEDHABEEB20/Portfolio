"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Plane, Hand, Printer, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    icon: Plane,
    title: "6-DOF Flight Simulator Platform",
    subtitle: "Motion Cueing & Active Controls",
    description:
      "Led the development of a 6-DOF motion simulator rig to replicate realistic pilot feedback. Included development of active joystick/yoke and pedal peripherals for full immersion. Applied control systems using Arduino and inverse kinematics for platform motion.",
    tags: ["Robotics", "Arduino", "Control Systems", "Inverse Kinematics", "CAD"],
    date: "Feb 2023 - Jun 2023",
    link: "https://www.linkedin.com/in/ahmad-essameldin-ahmad-b266321b3/details/projects/",
    highlight: "25% Training Efficiency Improvement",
  },
  {
    icon: Hand,
    title: "EMG-Based Prosthetic Arm",
    subtitle: "Force Feedback Integration (Gen.2)",
    description:
      "Led development of a 3D-printed smart prosthetic arm using EMG control and force feedback integration. Implemented feedback loop using vibration motors for sensory output. Presented at Innovation Catalyst, focusing on accessibility and cost-efficiency.",
    tags: ["EMG", "3D Printing", "Servo Control", "Biomechanics", "Accessibility"],
    date: "Aug 2022 - Jan 2023",
    link: "https://www.linkedin.com/in/ahmad-essameldin-ahmad-b266321b3/details/projects/",
    highlight: "30% Cost Reduction",
  },
  {
    icon: Cpu,
    title: "AI Real-Time Gesture Prosthetic",
    subtitle: "Computer Vision Control (Gen.1)",
    description:
      "Led a team to create a low-cost, lightweight prosthetic arm controlled by real-time hand gestures. Used computer vision and glove-based sensors for gesture recognition. Targeted for users with upper-limb disability in developing regions.",
    tags: ["Computer Vision", "AI", "Rapid Prototyping", "Accessibility"],
    date: "Jan 2022 - Apr 2022",
    link: "https://www.linkedin.com/in/ahmad-essameldin-ahmad-b266321b3/details/projects/",
    highlight: "Real-time Control Logic",
  },
  {
    icon: Printer,
    title: "Custom 3D Printer Design",
    subtitle: "FDM Prototyping Machine",
    description:
      "Led the complete design and construction of a custom 3D printer for academic prototyping use. Designed Cartesian-style frame and motion system. Selected and installed stepper motors, drivers, and extruder system. Programmed Marlin firmware.",
    tags: ["3D Printing", "FDM", "Stepper Motors", "Marlin", "Mechanical Design"],
    date: "Jan 2021 - Mar 2021",
    link: "https://www.linkedin.com/in/ahmad-essameldin-ahmad-b266321b3/details/projects/",
    highlight: "Complete Design & Build",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group glass rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 glow-border relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <project.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">{project.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-primary text-sm mb-3">{project.subtitle}</p>

                {/* Highlight badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  {project.highlight}
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary hover:bg-primary/10 p-0"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
