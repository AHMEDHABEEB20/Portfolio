"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  GraduationCap, 
  Briefcase, 
  FileCheck, 
  ExternalLink, 
  Award, 
  Globe, 
  ShieldCheck,
  User,
  Zap,
  CheckCircle2,
  Cpu,
  Trophy
} from "lucide-react"

const trainings = [
  {
    title: "CEC Training",
    description: "Advanced certification in mechanical systems & engineering principles.",
    pdf: "/TRAININGS/Copy of CEC Training.pdf",
    date: "2023",
    icon: Zap
  },
  {
    title: "ECC Training",
    description: "Professional program in industrial automation & control systems.",
    pdf: "/TRAININGS/Copy of ECC Training.pdf",
    date: "2023",
    icon: ShieldCheck
  }
]

const certifications = [
  {
    title: "CSWP",
    fullName: "Certified SOLIDWORKS Professional",
    id: "C-Q5ZMUKCNBH",
    pdf: "/CERTIFICATIONS/CSWP_Certificate_C-Q5ZMUKCNBH.pdf",
    issuer: "Dassault Systèmes"
  },
  {
    title: "CSWA",
    fullName: "Certified SOLIDWORKS Associate",
    id: "C-Y7A2KRMQ54",
    pdf: "/CERTIFICATIONS/CSWA_Certificate_C-Y7A2KRMQ54.pdf",
    issuer: "Dassault Systèmes"
  }
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-12 md:py-16 relative overflow-hidden" ref={ref}>
      {/* Background Orbs */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight uppercase">
            About Me
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Bio Card - Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 glass rounded-3xl p-8 md:p-12 border border-white/5 flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                 The Engineer
              </h3>
              <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                <p>
                  I am a <span className="text-primary font-bold">Mechanical Design Engineer</span> specializing in 
                  <span className="text-foreground"> robotics and industrial automation</span>. 
                  Operating from Egypt in a hybrid capacity, I focus on 
                  advancing high-precision mechanical solutions for global industrial applications.
                </p>
                <p>
                  My expertise includes <span className="text-foreground">robotics integration</span> and 
                  complex surface modeling. I am dedicated to pushing the boundaries of mechanical systems, 
                  ensuring they are as <span className="text-primary italic">efficient</span> as they are <span className="text-primary italic">innovative</span>.
                </p>
              </div>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-4 relative z-10">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider">
                    <Briefcase className="h-3.5 w-3.5 text-primary" />
                    Mechanical Design Engineer
                </div>
            </div>
          </motion.div>

          {/* Education Card - Vertical */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1 glass-dark rounded-3xl p-8 border border-primary/20 flex flex-col justify-between bg-primary/[0.02] hover:bg-primary/[0.05] transition-colors relative group"
          >
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/20 transition-all" />
            <div>
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shadow-xl shadow-primary/30 mb-8">
                <GraduationCap className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">Education</h3>
              <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-8">Academic Achievement</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">B.S. Mechatronics Engineering</h4>
                  <p className="text-sm text-muted-foreground mt-2">MSA University & University of Greenwich</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm font-semibold">
                    <Award className="h-4 w-4 text-primary" />
                    GPA: 3.94 / 4.00
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Professional Credentials Card - Balanced with Vertical Separator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-3 glass rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-stretch gap-12 relative">
              
              {/* Certifications (Left) */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <Cpu className="h-5 w-5 text-primary" />
                  <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Certifications</h3>
                </div>
                <div className="grid gap-4">
                  {certifications.map((cert) => (
                    <a 
                      key={cert.title}
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all group/cert"
                    >
                      <div>
                        <h4 className="font-bold text-primary text-lg tracking-tight mb-1">{cert.title}</h4>
                        <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{cert.fullName}</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-primary opacity-0 group-hover/cert:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Vertical Divider (Desktop Only) */}
              <div className="hidden md:block w-px bg-white/10 self-stretch my-4" />

              {/* Professional Training (Right) */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Professional Training</h3>
                </div>
                <div className="grid gap-4">
                  {trainings.map((training, idx) => (
                    <a 
                      key={idx}
                      href={training.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all group/train"
                    >
                      <div className="flex items-center gap-5">
                         <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                            <training.icon className="h-5 w-5" />
                         </div>
                         <div>
                            <h4 className="font-bold text-foreground text-lg tracking-tight group-hover:text-primary transition-colors mb-1">
                                {training.title}
                            </h4>
                            <p className="text-[11px] text-muted-foreground line-clamp-1 max-w-[200px] md:max-w-xs font-medium">
                                {training.description}
                            </p>
                         </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-primary opacity-0 group-hover/train:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
