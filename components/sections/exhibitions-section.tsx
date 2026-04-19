"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  Calendar,
  Image as ImageIcon,
  ChevronRight,
  ChevronLeft,
  X,
  FileText,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"

const exhibitions = [
  {
    title: "WAM Saudi 2026",
    location: "Riyadh, Saudi Arabia",
    date: "Feb 2026",
    image: "/EXHIBITIONS/WAM Saudi 2026/photo_2026-02-26_21-57-39.jpg",
    description: "Participated in the WAM Saudi exhibition, showcasing advanced manufacturing technologies and automation solutions.",
    gallery: [
      "/EXHIBITIONS/WAM Saudi 2026/photo_2026-02-26_21-33-43.jpg",
      "/EXHIBITIONS/WAM Saudi 2026/photo_2026-02-26_21-33-59.jpg",
      "/EXHIBITIONS/WAM Saudi 2026/photo_2026-02-26_21-34-02.jpg",
      "/EXHIBITIONS/WAM Saudi 2026/photo_2026-02-26_21-34-05.jpg",
      "/EXHIBITIONS/WAM Saudi 2026/photo_2026-02-26_21-34-08.jpg",
      "/EXHIBITIONS/WAM Saudi 2026/photo_2026-02-26_21-34-10.jpg",
      "/EXHIBITIONS/WAM Saudi 2026/photo_2026-02-26_21-34-20.jpg",
      "/EXHIBITIONS/WAM Saudi 2026/photo_2026-02-26_21-34-22.jpg",
      "/EXHIBITIONS/WAM Saudi 2026/photo_2026-02-26_21-57-39.jpg",
    ]
  },
  {
    title: "Canton Fair 2025",
    location: "Guangzhou, China",
    date: "Apr 2025",
    image: "/EXHIBITIONS/Canton Fair 2025/IMG_3474.JPG",
    description: "Explored international trade opportunities and industrial equipment at the 137th Canton Fair.",
    gallery: [
      "/EXHIBITIONS/Canton Fair 2025/IMG_3474.JPG",
      "/EXHIBITIONS/Canton Fair 2025/IMG_3476.JPG",
      "/EXHIBITIONS/Canton Fair 2025/IMG_3488.JPG",
      "/EXHIBITIONS/Canton Fair 2025/IMG_4221.JPG",
    ]
  },
  {
    title: "Hannover Messe 2025",
    location: "Hannover, Germany",
    date: "Apr 2025",
    image: "/EXHIBITIONS/Industrial Transformation by Hannover Messi 2025/7c492c446ce63af0f7d506901ad5a1a0.jpg",
    description: "Attended the world's leading trade fair for industrial technology, focusing on Industry 4.0 and smart energy.",
    gallery: [
      "/EXHIBITIONS/Industrial Transformation by Hannover Messi 2025/7c492c446ce63af0f7d506901ad5a1a0.jpg",
      "/EXHIBITIONS/Industrial Transformation by Hannover Messi 2025/ad261474fd8e9698a1156319d7bc47ee.jpg",
    ]
  },
  {
    title: "LEAP 2025",
    location: "Riyadh, Saudi Arabia",
    date: "Mar 2025",
    image: "/EXHIBITIONS/LEAP 2025/IMG_1.JPG",
    description: "Engaged with the global tech community at LEAP, the tech event that brings together the world's greatest minds.",
    gallery: [
      "/EXHIBITIONS/LEAP 2025/IMG_4963.JPG",
      "/EXHIBITIONS/LEAP 2025/IMG_5013.JPG",
      "/EXHIBITIONS/LEAP 2025/IMG_5154.JPG",
      "/EXHIBITIONS/LEAP 2025/IMG_1.JPG",
    ]
  },
  {
    title: "MTC 2023",
    location: "Military Technical College",
    date: "2023",
    image: "/EXHIBITIONS/MTC 2023/photo_2024-08-16_22-37-36.jpg",
    description: "Showcased technical projects at the Military Technical College exhibition.",
    gallery: [
      "/EXHIBITIONS/MTC 2023/photo_2024-08-16_22-37-27.jpg",
      "/EXHIBITIONS/MTC 2023/photo_2024-08-16_22-37-32.jpg",
      "/EXHIBITIONS/MTC 2023/photo_2024-08-16_22-37-36.jpg",
      "/EXHIBITIONS/MTC 2023/photo_2024-08-16_22-37-39.jpg",
    ],
    documents: [
      { name: "MTC Participation", src: "/EXHIBITIONS/MTC 2023/MTC.pdf" }
    ]
  },
  {
    title: "16th URGF 2022",
    location: "University Research Grants Forum",
    date: "2022",
    image: "/EXHIBITIONS/16th URGF 2022/photo_2024-08-16_22-30-30.jpg",
    description: "Presented research findings and projects at the 16th University Research Grants Forum.",
    gallery: [
      "/EXHIBITIONS/16th URGF 2022/participations certificates v2_158.jpg",
      "/EXHIBITIONS/16th URGF 2022/photo_2023-05-01_00-13-39.jpg",
      "/EXHIBITIONS/16th URGF 2022/photo_2024-08-16_22-30-30.jpg",
      "/EXHIBITIONS/16th URGF 2022/photo_2024-08-16_22-30-35.jpg",
      "/EXHIBITIONS/16th URGF 2022/photo_2024-08-16_22-30-39.jpg",
      "/EXHIBITIONS/16th URGF 2022/photo_2024-08-16_22-30-59.jpg",
    ],
    documents: [
      { name: "URGF Document", src: "/EXHIBITIONS/16th URGF 2022/30008188800217.pdf" }
    ]
  },
  {
    title: "7th Cairo Innovation 2022",
    location: "Cairo, Egypt",
    date: "Feb 2022",
    image: "/EXHIBITIONS/7th Cairo Innovation 2022/photo_2023-02-13_12-39-43 (2).jpg",
    description: "Featured in the 7th Cairo International Exhibition of Innovation, presenting cutting-edge prototypes.",
    gallery: [
      "/EXHIBITIONS/7th Cairo Innovation 2022/1689027657703.jpeg",
      "/EXHIBITIONS/7th Cairo Innovation 2022/photo_2023-02-13_12-39-43 (2).jpg",
      "/EXHIBITIONS/7th Cairo Innovation 2022/photo_2023-02-13_12-39-43.jpg",
      "/EXHIBITIONS/7th Cairo Innovation 2022/photo_2023-02-14_18-18-03.jpg",
    ]
  },
]

export function ExhibitionsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  // Carousel State per dialog
  const [selectedExhibitionIndex, setSelectedExhibitionIndex] = useState<number | null>(null)
  const [imageIndex, setImageIndex] = useState(0)

  const handleNext = (length: number) => {
    setImageIndex((prev) => (prev + 1) % length)
  }

  const handlePrev = (length: number) => {
    setImageIndex((prev) => (prev - 1 + length) % length)
  }

  return (
    <section id="exhibitions" className="py-12 md:py-16 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
            Exhibitions
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-center">
            A showcase of various international and local exhibitions where I've participated, presenting innovations and exploring industrial trends.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exhibitions.map((exhibition, index) => (
            <motion.article
              key={exhibition.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={exhibition.image}
                  alt={exhibition.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                
                {/* Location Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider">
                    <MapPin className="h-3 w-3 text-primary" />
                    {exhibition.location}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                    {exhibition.date}
                  </span>
                  <div className="h-px w-8 bg-primary/30" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {exhibition.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {exhibition.description}
                </p>

                <div className="mt-auto">
                  <Dialog 
                    open={selectedExhibitionIndex === index} 
                    onOpenChange={(open) => {
                      if (!open) {
                        setSelectedExhibitionIndex(null)
                        setImageIndex(0)
                      } else {
                        setSelectedExhibitionIndex(index)
                        setImageIndex(0)
                      }
                    }}
                  >
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full bg-transparent border-white/10 hover:border-primary/50 text-xs font-bold uppercase tracking-wider h-11"
                        onClick={() => {
                          setSelectedExhibitionIndex(index)
                          setImageIndex(0)
                        }}
                      >
                        View Gallery
                      </Button>
                    </DialogTrigger>
                    {selectedExhibitionIndex === index && (
                      <DialogContent className="max-w-6xl w-[95vw] h-[90vh] bg-background/95 backdrop-blur-xl border-white/10 p-0 flex flex-col overflow-hidden">
                        <section className="flex flex-col h-full">
                          <DialogHeader className="p-6 md:p-8 border-b border-white/10 bg-background/50 flex-none">
                            <div className="flex items-center gap-4 mb-2">
                              <span className="flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                                <Calendar className="h-3 w-3" />
                                {exhibition.date}
                              </span>
                            </div>
                            <DialogTitle className="text-3xl font-bold uppercase tracking-tight">
                              {exhibition.title}
                            </DialogTitle>
                          </DialogHeader>

                          {/* Image Carousel Area */}
                          <div className="flex-1 relative bg-black/50 overflow-hidden flex flex-col">
                            {/* Main Image Slider */}
                            <div className="relative flex-1 flex items-center justify-center p-4">
                              <AnimatePresence mode="wait">
                                <motion.div
                                  key={imageIndex}
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.95 }}
                                  transition={{ duration: 0.2 }}
                                  className="relative w-full h-full max-h-[60vh] md:max-h-[65vh]"
                                >
                                  <Image
                                    src={exhibition.gallery[imageIndex]}
                                    alt={`${exhibition.title} gallery image ${imageIndex + 1}`}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 1024px) 100vw, 80vw"
                                    priority
                                  />
                                </motion.div>
                              </AnimatePresence>

                              {/* Navigation Buttons */}
                              {exhibition.gallery.length > 1 && (
                                <>
                                  <button
                                    onClick={() => handlePrev(exhibition.gallery.length)}
                                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 border border-white/10 text-white hover:bg-primary/80 hover:scale-105 transition-all outline-none z-10 backdrop-blur-md"
                                    aria-label="Previous image"
                                  >
                                    <ChevronLeft className="h-6 w-6" />
                                  </button>
                                  <button
                                    onClick={() => handleNext(exhibition.gallery.length)}
                                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 border border-white/10 text-white hover:bg-primary/80 hover:scale-105 transition-all outline-none z-10 backdrop-blur-md"
                                    aria-label="Next image"
                                  >
                                    <ChevronRight className="h-6 w-6" />
                                  </button>
                                </>
                              )}

                              {/* Image Counter Badge */}
                              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-xs font-bold text-white tracking-widest z-10">
                                {imageIndex + 1} / {exhibition.gallery.length}
                              </div>
                            </div>
                            
                            {/* Thumbnail Strip */}
                            {exhibition.gallery.length > 1 && (
                              <div className="flex-none p-4 w-full bg-background/40 border-t border-white/5">
                                <div className="flex gap-3 overflow-x-auto pb-2 px-2 snap-x hide-scrollbar justify-start md:justify-center">
                                  {exhibition.gallery.map((src, idx) => (
                                    <button
                                      key={idx}
                                      onClick={() => setImageIndex(idx)}
                                      className={`relative flex-none w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden snap-center transition-all ${
                                        idx === imageIndex 
                                          ? "border-2 border-primary ring-2 ring-primary/20 scale-105" 
                                          : "border border-white/10 opacity-50 hover:opacity-100"
                                      }`}
                                    >
                                      <Image
                                        src={src}
                                        alt={`Thumbnail ${idx + 1}`}
                                        fill
                                        className="object-cover"
                                      />
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Related Documents (scrollable at the bottom if present) */}
                          {exhibition.documents && exhibition.documents.length > 0 && (
                            <div className="flex-none p-6 md:p-8 bg-background border-t border-white/10">
                              <h3 className="text-xl font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
                                <FileText className="h-5 w-5 text-primary" />
                                Related Files
                              </h3>
                              <div className="grid sm:grid-cols-2 gap-4">
                                {exhibition.documents.map((doc, idx) => (
                                  <a
                                    key={idx}
                                    href={doc.src}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/doc border border-white/10 bg-white/5 p-4 rounded-xl flex items-center justify-between hover:bg-white/10 transition-all hover:border-primary/50"
                                  >
                                    <div className="flex items-center gap-4">
                                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                                        <FileText className="h-5 w-5" />
                                      </div>
                                      <span className="font-bold text-sm text-foreground">{doc.name}</span>
                                    </div>
                                    <ChevronRight className="h-4 w-4 text-primary opacity-0 group-hover/doc:opacity-100 transition-all transform group-hover/doc:translate-x-1" />
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </section>
                      </DialogContent>
                    )}
                  </Dialog>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
