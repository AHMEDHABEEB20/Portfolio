"use client"

import { ParticlesBackground } from "@/components/particles-background"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ExhibitionsSection } from "@/components/sections/exhibitions-section"
import { PublicationsSection } from "@/components/sections/publications-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen gradient-bg grid-pattern">
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ExhibitionsSection />
        <PublicationsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
