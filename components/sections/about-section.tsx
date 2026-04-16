"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, GraduationCap, Award, Briefcase } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    {
      icon: Briefcase,
      title: "Current Role",
      description: "Mechanical Design Engineer at ARIA Technologies",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.S. Mechatronics Engineering, MSA University (GPA: 3.94/4.00)",
    },
    {
      icon: Award,
      title: "Achievement",
      description: "Honor Shield Winner - 16th UGRF",
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Saint Paul, Minnesota, USA (U.S. Citizen)",
    },
  ]

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            About <span className="text-primary">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 glow-border">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am Ahmad, a U.S. citizen born in Minnesota, currently working in a hybrid role 
                from Egypt as a <span className="text-primary">Mechanical Design Engineer</span>. 
                I&apos;m planning a permanent relocation to the U.S. and actively seeking opportunities 
                in <span className="text-primary">robotics and industrial automation</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I specialize in developing innovative mechanical solutions tailored to industry-specific 
                challenges, with a strong focus on <span className="text-primary">robotics integration</span>, 
                advanced mechanical design, and complex surface applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m committed to advancing my career by continuously improving both my technical 
                and interpersonal skills, bringing value through precision engineering and 
                collaborative problem-solving.
              </p>
            </div>
          </motion.div>

          {/* Right column - Highlights */}
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass rounded-xl p-6 group hover:border-primary/50 transition-all duration-300 glow-border"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 glass rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold mb-6">Languages</h3>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-foreground font-medium">Arabic</span>
              <span className="text-muted-foreground text-sm">Native</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary/70" />
              <span className="text-foreground font-medium">English</span>
              <span className="text-muted-foreground text-sm">Proficient</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
