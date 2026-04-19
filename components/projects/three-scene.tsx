"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Loader2 } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface ThreeSceneProps {
  modelPath: string
}

export default function ThreeScene({ modelPath }: ThreeSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const sceneRef = useRef<{
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    model?: THREE.Group
  } | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // --- Scene Setup ---
    const scene = new THREE.Scene()
    scene.background = new THREE.Color("#050505")

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      2000000 // Huge far plane to prevent clipping
    )
    camera.position.set(0, 0, 100) // Initial position

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x050505, 1) // Force clear color
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.5
    containerRef.current.appendChild(renderer.domElement)

    sceneRef.current = { scene, camera, renderer }

    // --- Lighting (Ultra Robust) ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.0)
    scene.add(ambientLight)

    const mainLight = new THREE.DirectionalLight(0xffffff, 3.0)
    mainLight.position.set(500, 1000, 750)
    scene.add(mainLight)
    
    const fillLight = new THREE.DirectionalLight(0x4488ff, 2.0)
    fillLight.position.set(-500, 200, -500)
    scene.add(fillLight)

    // --- Environment Map ---
    const pmremGenerator = new THREE.PMREMGenerator(renderer)
    pmremGenerator.compileEquirectangularShader()
    scene.environment = pmremGenerator.fromScene(new THREE.Scene()).texture


    // --- Model Loading ---
    const loader = new GLTFLoader()
    console.log("Starting model load from:", modelPath)
    loader.load(
      modelPath,
      (gltf: any) => {
        console.log("GLTF success callback fired")
        const model = gltf.scene as THREE.Group
        if (!model) {
          console.error("Loaded GLTF has no scene")
          return
        }
        
        // --- 1. Normalize Scale & Center ---
        const box = new THREE.Box3().setFromObject(model)
        const size = box.getSize(new THREE.Vector3())
        const center = box.getCenter(new THREE.Vector3())
        
        console.log("Original Model Size:", size)
        console.log("Original Model Center:", center)

        // Reset position to center geometry at (0,0,0)
        model.position.x += (model.position.x - center.x)
        model.position.y += (model.position.y - center.y)
        model.position.z += (model.position.z - center.z)

        // Normalize scale to 100 units for the largest dimension
        const maxDim = Math.max(size.x, size.y, size.z)
        if (maxDim > 0) {
          const scale = 100 / maxDim
          model.scale.setScalar(scale)
          console.log("Model scale normalized by factor:", scale)
        }
        
        model.traverse((child: any) => {
          if (child.isMesh) {
            child.material.side = THREE.DoubleSide
            child.material.transparent = false
            child.material.opacity = 1.0
            child.castShadow = true
            child.receiveShadow = true
            child.visible = true
            
            // Fix potential black materials
            if (child.material.color) {
               if (child.material.color.r === 0 && child.material.color.g === 0 && child.material.color.b === 0) {
                  child.material.color.set(0x888888)
               }
            }
          }
        })
        
        scene.add(model)
        sceneRef.current!.model = model

        // --- 2. Fit Camera to Model (Normalized) ---
        fitCameraToModel(model, camera)
        
        setLoading(false)
        console.log("Model added and visible")

        // Setup Animation Logic
        setupScrollAnimation(model, camera)
      },
      (xhr: ProgressEvent) => {
        if (xhr.total > 0) {
          setProgress(Math.round((xhr.loaded / xhr.total) * 100))
        } else {
           setProgress(Math.min(99, Math.floor(xhr.loaded / 1000000)))
        }
      },
      (error: ErrorEvent) => {
        console.error("Error loading model:", error)
        setLoading(false)
      }
    )

    const fitCameraToModel = (model: THREE.Object3D, camera: THREE.PerspectiveCamera) => {
      // Since we normalized the model to 100 units max dim, 
      // we can set a fixed camera distance that always fits.
      const fov = camera.fov * (Math.PI / 180)
      const cameraDistance = Math.abs(100 / 2 / Math.tan(fov / 2)) * 2.5
      
      camera.position.set(0, 0, cameraDistance)
      camera.lookAt(0, 0, 0)
      camera.updateProjectionMatrix()
    }

    const setupScrollAnimation = (model: THREE.Group, camera: THREE.PerspectiveCamera) => {
      const parts: { [key: string]: THREE.Object3D } = {}
      
      // Find parts by name or just use chunks
      model.traverse((child: THREE.Object3D) => {
        if ((child as THREE.Mesh).isMesh) {
          const name = (child.name || "").toLowerCase()
          if (name.includes("base") || name.includes("platform")) parts.base = child
          if (name.includes("arm") || name.includes("link") || name.includes("actuator")) parts.arm = child
          if (name.includes("joint") || name.includes("pivot")) parts.joint = child
        }
      })

      // Calculate translation distance based on model size
      const box = new THREE.Box3().setFromObject(model)
      const size = box.getSize(new THREE.Vector3())
      const explodeFactor = Math.max(size.x, size.y, size.z) * 0.8

      // GSAP Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#scroll-container",
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
          immediateRender: false
        }
      })

      // 1. Exploded View
      if (parts.base) {
        tl.to(parts.base.position, { y: -explodeFactor, duration: 2 }, 0)
      }
      if (parts.arm) {
        tl.to(parts.arm.position, { x: explodeFactor, z: explodeFactor, duration: 2 }, 0)
      }
      if (parts.joint) {
        tl.to(parts.joint.position, { y: explodeFactor, duration: 2 }, 0)
      }

      // Fallback: Animate random children if parts not found
      if (Object.keys(parts).length < 2) {
        const childrenToAnimate = model.children.slice(0, 20)
        childrenToAnimate.forEach((child: THREE.Object3D) => {
           tl.to(child.position, { 
             x: (Math.random() - 0.5) * explodeFactor, 
             y: (Math.random() - 0.5) * explodeFactor, 
             z: (Math.random() - 0.5) * explodeFactor,
             duration: 2 
           }, 0)
        })
      }

      // 2. Camera Movement - Dynamic based on model size
      const initialZ = camera.position.z
      tl.to(camera.position, { z: initialZ * 1.5, y: initialZ * 0.5, duration: 4 }, 0)
      tl.to(model.rotation, { y: Math.PI * 1.5, duration: 4 }, 0)

      // 3. Floating UI Fades
      tl.to(".label-base", { opacity: 1, duration: 0.5 }, "0.5")
      tl.to(".label-base", { opacity: 0, duration: 0.5 }, "1.5")
      
      tl.to(".label-arm", { opacity: 1, duration: 0.5 }, "2")
      tl.to(".label-arm", { opacity: 0, duration: 0.5 }, "3")
      
      tl.to(".label-joint", { opacity: 1, duration: 0.5 }, "3.5")
    }

    // --- Render Loop ---
    const animate = () => {
      if (!sceneRef.current) return
      requestAnimationFrame(animate)
      const { scene, camera, renderer } = sceneRef.current
      renderer.render(scene, camera)
    }
    animate()

    // --- Resize Handling ---
    const handleResize = () => {
      if (!sceneRef.current) return
      const { camera, renderer } = sceneRef.current
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    // --- Cleanup ---
    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement)
      }
      scene.traverse((object: THREE.Object3D) => {
        if ((object as THREE.Mesh).isMesh) {
          const mesh = object as THREE.Mesh
          mesh.geometry.dispose()
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((m: THREE.Material) => m.dispose())
          } else {
            mesh.material.dispose()
          }
        }
      })
      renderer.dispose()
      ScrollTrigger.getAll().forEach((t: any) => {
        if (typeof t.kill === 'function') t.kill()
      })
    }
  }, [modelPath])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Loading Screen */}
      {loading && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black">
          <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
          <div className="text-xl font-bold tracking-widest text-white uppercase">
            Loading {progress}%
          </div>
          <div className="mt-2 text-sm text-white/50">Initializing 3D Engine</div>
        </div>
      )}

      {/* 3D Canvas Container */}
      <div ref={containerRef} className="w-full h-full" />

      {/* Floating UI Labels */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="label-base absolute top-1/4 left-1/4 opacity-0 transition-opacity bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-lg">
          <h3 className="text-primary font-bold uppercase text-sm mb-1">Base Platform</h3>
          <p className="text-xs text-white/70 max-w-[200px]">The heavy-duty 6-DOF foundation providing stability and force feedback mapping.</p>
        </div>

        <div className="label-arm absolute top-1/2 right-1/4 opacity-0 transition-opacity bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-lg">
          <h3 className="text-primary font-bold uppercase text-sm mb-1">Actuator Arm</h3>
          <p className="text-xs text-white/70 max-w-[200px]">High-torque servo system controlling the precise pitch and roll of the cockpit.</p>
        </div>

        <div className="label-joint absolute bottom-1/4 left-1/3 opacity-0 transition-opacity bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-lg">
          <h3 className="text-primary font-bold uppercase text-sm mb-1">Kinematic Joint</h3>
          <p className="text-xs text-white/70 max-w-[200px]">Omnidirectional movement system allowing for complex motion cues and realism.</p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-[10px] uppercase tracking-[0.3em] animate-bounce">
        Scroll Down
      </div>
    </div>
  )
}
