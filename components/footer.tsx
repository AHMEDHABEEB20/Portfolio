"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail, Github, ArrowUp } from "lucide-react"

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ahmad-essameldin-ahmad-b266321b3/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:ahmad.essameldin20@gmail.com",
    label: "Email",
  },
  {
    icon: Github,
    href: "#",
    label: "GitHub",
  },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-8 border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-xl font-bold text-primary glow-text"
            whileHover={{ scale: 1.05 }}
          >
            {"Ahmed Essameldin"}
          </motion.a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Ahmad Essameldin. All rights reserved.
          </p>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </motion.a>
            ))}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
