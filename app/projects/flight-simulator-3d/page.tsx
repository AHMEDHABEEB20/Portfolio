"use client"

import dynamic from "next/dynamic"
import { ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useSpring } from "framer-motion"

// Import ThreeScene with no SSR to avoid issues with window/canvas
const ThreeScene = dynamic(() => import("@/components/projects/three-scene"), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="text-white text-sm animate-pulse uppercase tracking-widest font-semibold">
        Engine Initializing...
      </div>
    </div>
  )
})

export default function FlightSimulator3DPage() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <main className="relative bg-black min-h-screen selection:bg-primary selection:text-black">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50 rounded-full"
        style={{ scaleX }}
      />

      {/* Navigation Overlay */}
      <nav className="fixed top-0 left-0 w-full z-40 p-6 md:p-8 flex items-center justify-between pointer-events-none">
        <Link 
          href="/" 
          className="pointer-events-auto group flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-xs font-bold uppercase tracking-widest">Back to Portfolio</span>
        </Link>
        <button className="pointer-events-auto group flex items-center justify-center w-11 h-11 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300">
          <Share2 className="w-4 h-4" />
        </button>
      </nav>

      {/* Info Overlay (Left Side) */}
      <div className="fixed bottom-0 left-0 w-full md:w-1/3 p-6 md:p-12 z-40 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pointer-events-auto flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
             <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em]">Exploded View</span>
             <h1 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none">
               Flight Sim<br/>Platform
             </h1>
          </div>
          <p className="text-[11px] text-white/40 leading-relaxed max-w-sm uppercase tracking-wider font-medium">
             Interactive 3D structural analysis of a 6-DOF motion cueing platform for pilot training simulation.
          </p>
          <div className="flex gap-3">
             <div className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-bold text-white/60 tracking-widest uppercase">Three.js</div>
             <div className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-bold text-white/60 tracking-widest uppercase">GSAP</div>
             <div className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-bold text-white/60 tracking-widest uppercase">Next.js</div>
          </div>
        </motion.div>
      </div>

      {/* 3D Scene Viewport (Fixed) */}
      <section className="fixed inset-0 w-full h-screen z-0">
        <ThreeScene modelPath="/ARP60-05-0A-R00-00000-02.glb" />
      </section>

      {/* Scrollable Container - Creating the Scroll Space */}
      <div id="scroll-container" className="relative h-[400vh] w-full z-10 pointer-events-none">
        {/* Sections can be added here if needed to sync with Three.js events */}
      </div>

      {/* Final Section */}
      <section className="relative z-20 min-h-screen bg-black flex items-center justify-center pointer-events-auto">
        <div className="text-center p-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic mb-6">Conclusion</h2>
            <p className="text-white/50 text-sm md:text-base mb-12 leading-loose">
              Designing this mechatronics project required a deep understanding of inverse kinematics and real-time control loops. This 3D experience showcases the complexity and precision of the flight simulator's internal mechanisms.
            </p>
            <Link 
               href="/" 
               className="inline-flex items-center gap-4 px-10 py-5 bg-primary text-black font-black text-xs uppercase tracking-[0.3em] rounded-full hover:scale-110 active:scale-95 transition-all duration-300"
            >
               Return to Projects
            </Link>
          </motion.div>
        </div>
      </section>

      <footer className="fixed bottom-6 right-6 md:right-12 z-40 pointer-events-none">
         <span className="text-[10px] text-white/20 uppercase tracking-[0.5em] font-medium">© 2026 Ahmad Essameldin</span>
      </footer>
    </main>
  )
}
