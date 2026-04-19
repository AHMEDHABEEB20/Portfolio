import {
  Plane,
  Hand,
  Cpu,
  Printer,
  type LucideIcon
} from "lucide-react"

export type ProjectGalleryItem = {
  type: "image" | "video"
  src: string
  title: string
}

export type ProjectDocument = {
  name: string
  src: string
}

export type Project = {
  title: string
  subtitle: string
  description: string
  category: "ARIA" | "Academic"
  icon: LucideIcon
  image: string
  tags: string[]
  date: string
  link: string
  highlight: string
  techStack: string[]
  spline?: string
  threeModel?: string
  interactive3D?: boolean
  gallery?: ProjectGalleryItem[]
  documents?: ProjectDocument[]
}

export const projects: Project[] = [
  {
    icon: Plane,
    category: "ARIA",
    image: "/FFB Yoke Iteration 3_2 v622.png",
    title: "Flight Simulator Platform",
    subtitle: "Motion Cueing & Active Controls",
    description:
      "Led the development of a 6-DOF motion simulator rig to replicate realistic pilot feedback. Included development of active joystick/yoke and pedal peripherals for full immersion.",
    tags: ["Robotics", "Arduino", "Control Systems", "Inverse Kinematics", "CAD"],
    date: "Feb 2023 - Jun 2023",
    link: "https://www.linkedin.com/in/ahmad-essameldin-ahmad-b266321b3/details/projects/",
    highlight: "25% Training Efficiency Improvement",
    techStack: ["Arduino", "Python", "SolidWorks"],
    spline: "https://my.spline.design/untitled-tPH33gVmv0oHfzeExihW67FX/",
    threeModel: "/ARP60-05-0A-R00-00000-02.glb",
    interactive3D: true,
    gallery: [
      { type: "image", src: "/Gallery/FFB Yoke Iteration 3_2 v622.png", title: "Technical Model" },
      { type: "image", src: "/Gallery/FFB_Yoke_2023-Jan-06_06-02-56PM-000_CustomizedView11165307741_png_alpha.png", title: "CAD Visualization" },
      { type: "image", src: "/Gallery/FFB_Yoke_2023-Jan-06_06-03-33PM-000_CustomizedView31748582587_jpg.jpg", title: "Pov View" },
      { type: "video", src: "/Gallery/Flight Sim Anim 22.mp4", title: "Project Animation" },
    ],
    documents: [
      { name: "Graduation Project II Report", src: "/Gallery/Graduation Project II Report.pdf" },
      { name: "Graduation Project II Poster", src: "/Gallery/Graduation Project II Poster.pdf" },
      { name: "Graduation Project I Presentation", src: "/Gallery/Copy of Graduation Project I Presentation.pdf" },
    ],
  },
  {
    icon: Hand,
    category: "ARIA",
    image: "/FFB Yoke Iteration 3_2 v622.png",
    title: "EMG-Based Prosthetic Arm",
    subtitle: "Force Feedback Integration (Gen.2)",
    description:
      "Led development of a 3D-printed smart prosthetic arm using EMG control and force feedback integration. Implemented feedback loop using vibration motors for sensory output.",
    tags: ["EMG", "3D Printing", "Servo Control", "Biomechanics", "Accessibility"],
    date: "Aug 2022 - Jan 2023",
    link: "https://www.linkedin.com/in/ahmad-essameldin-ahmad-b266321b3/details/projects/",
    highlight: "30% Cost Reduction",
    techStack: ["C++", "3D Printing", "Sensors"],
    spline: "https://my.spline.design/untitled-VLfL081gOapsNT7sShafv5qM/",
  },
  {
    icon: Cpu,
    category: "Academic",
    image: "/FFB Yoke Iteration 3_2 v622.png",
    title: "AI Real-Time Gesture Prosthetic",
    subtitle: "Computer Vision Control (Gen.1)",
    description:
      "Led a team to create a low-cost, lightweight prosthetic arm controlled by real-time hand gestures. Used computer vision and glove-based sensors for gesture recognition.",
    tags: ["Computer Vision", "AI", "Rapid Prototyping", "Accessibility"],
    date: "Jan 2022 - Apr 2022",
    link: "https://www.linkedin.com/in/ahmad-essameldin-ahmad-b266321b3/details/projects/",
    highlight: "Real-time Control Logic",
    techStack: ["Python", "OpenCV", "TensorFlow"],
  },
  {
    icon: Printer,
    category: "Academic",
    image: "/FFB Yoke Iteration 3_2 v622.png",
    title: "Custom 3D Printer Design",
    subtitle: "FDM Prototyping Machine",
    description:
      "Led the complete design and construction of a custom 3D printer for academic prototyping use. Designed Cartesian-style frame and motion system and programmed Marlin firmware.",
    tags: ["3D Printing", "FDM", "Stepper Motors", "Marlin", "Mechanical Design"],
    date: "Jan 2021 - Mar 2021",
    link: "https://www.linkedin.com/in/ahmad-essameldin-ahmad-b266321b3/details/projects/",
    highlight: "Complete Design & Build",
    techStack: ["Marlin", "Electronics", "CAD"],
  },
]
