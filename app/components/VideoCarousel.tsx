"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface VideoCarouselProps {
  overlayClassName?: string
}

export default function VideoCarousel({
  overlayClassName = "bg-gradient-to-b from-black/70 via-black/50 to-black/80",
}: VideoCarouselProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Set playback rate
    video.playbackRate = 0.7

    // Handle loaded data
    const handleLoadedData = () => {
      setIsLoaded(true)
      video.play().catch((err) => {
        console.log("Video autoplay failed:", err)
      })
    }

    // Handle errors
    const handleError = (e: Event) => {
      console.log("Video error:", e)
    }

    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("error", handleError)

    // Try to play
    video.load()

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("error", handleError)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          minWidth: "100%",
          minHeight: "100%",
          width: "auto",
          height: "auto",
          transform: "translate(-50%, -50%)",
          objectFit: "cover",
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <source src="/assest/Background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fallback background */}
      <div
        className="absolute inset-0 bg-slate-900"
        style={{ opacity: isLoaded ? 0 : 1, transition: "opacity 0.5s ease-in-out" }}
      />

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 ${overlayClassName}`} />

      {/* Animated gradient overlays */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-green-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-emerald-500/10 blur-3xl"
        />
      </div>
    </div>
  )
}
