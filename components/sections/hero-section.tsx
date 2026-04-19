"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16 lg:pt-48"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] left-[-10%] md:left-[10%] w-72 h-72 md:w-[500px] md:h-[500px] bg-primary/20 rounded-full blur-[100px] md:blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[10%] right-[-10%] md:right-[10%] w-64 h-64 md:w-[400px] md:h-[400px] bg-purple-500/10 rounded-full blur-[80px] md:blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          
          {/* Top subtle badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            
          >
            
          </motion.div>

          {/* Name with typing effect / premium typography */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter"
          >
            <span className="text-foreground">Ahmad </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-purple-500 drop-shadow-sm">
              Essameldin
            </span>
          </motion.h1>

          {/* Role titles with glass capsules */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8"
          >
            {["Mechanical Design Engineer", "Robotics & Automation", "CAD Specialist"].map(
              (role, index) => (
                <div
                  key={role}
                  className={`px-4 py-2 rounded-2xl border ${
                    index === 0 
                      ? "bg-primary/10 border-primary/30 text-primary shadow-[0_0_15px_rgba(var(--primary),0.2)]" 
                      : "bg-white/5 border-white/10 text-muted-foreground"
                  } backdrop-blur-md text-sm md:text-base font-semibold`}
                >
                  {role}
                </div>
              )
            )}
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          >
            Transforming innovative concepts into precision-engineered mechanical solutions.
            Specializing in <span className="text-foreground font-medium">robotics integration</span>, advanced <span className="text-foreground font-medium">CAD design</span>, and <span className="text-foreground font-medium">manufacturing optimization</span>.
          </motion.p>

          {/* CTA Buttons - Liquid Glass style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(var(--primary),0.3)] hover:shadow-[0_0_50px_rgba(var(--primary),0.5)] transition-all duration-300 rounded-full px-8 h-14 text-base font-bold group relative overflow-hidden"
              asChild
            >
              <a href="/Ahmad_Essameldin_Resume_US_2025.pdf" download>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" />
                  Download Resume
                </span>
              </a>
            </Button>
          </motion.div>

          {/* Stats Bento */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16 md:mt-24 w-full"
          >
            {[
              { value: "2+", label: "Years Experience" },
              { value: "5+", label: "Projects Completed" },
              { value: "2", label: "Publications" },
              { value: "30%", label: "Cost Reduction" },
            ].map((stat, i) => (
              <div 
                key={stat.label} 
                className="glass rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center border border-white/5 hover:border-primary/20 transition-colors bg-gradient-to-b from-white/5 to-transparent relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-primary to-primary/40 mb-2 drop-shadow-sm">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-muted-foreground text-center">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 pb-safe hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-primary transition-colors cursor-pointer"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          
        </motion.div>
      </motion.div>
    </section>
  )
}

