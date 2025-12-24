"use client"

import { useEffect, useRef } from "react"
import { Box } from "@mui/material"

interface VideoBackgroundProps {
  videoSrc?: string
  overlayColor?: string
  overlayOpacity?: number
  children?: React.ReactNode
}

export default function VideoBackground({
  videoSrc = "/assest/Background.mp4",
  overlayColor = "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,50,0,0.5) 50%, rgba(0,0,0,0.7) 100%)",
  overlayOpacity = 1,
  children,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
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
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: overlayColor,
          opacity: overlayOpacity,
        }}
      />

      {/* Animated Particles Effect */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `
            radial-gradient(circle at 20% 80%, rgba(34,197,94,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(59,130,246,0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(168,85,247,0.05) 0%, transparent 40%)
          `,
          animation: "pulse 8s ease-in-out infinite",
          "@keyframes pulse": {
            "0%, 100%": { opacity: 0.5 },
            "50%": { opacity: 1 },
          },
        }}
      />

      {children}
    </Box>
  )
}
