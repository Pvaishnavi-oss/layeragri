"use client"

import React, { useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  PhoneCall,
  Mail,
  MapPin,
  ArrowRight,
  ArrowDown,
  Droplets,
  Sun,
  Sprout,
  Package,
  Award,
  Users,
  Globe,
  Leaf,
} from "lucide-react"

import ProductsGallery from "./components/productsGallery"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

const stats = [
  { icon: <Package className="w-6 h-6 sm:w-8 sm:h-8" />, value: "50+", label: "Products", color: "#22C55E" },
  { icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />, value: "10K+", label: "Farmers Served", color: "#3B82F6" },
  { icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />, value: "15+", label: "States Covered", color: "#F59E0B" },
  { icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />, value: "100%", label: "Quality Assured", color: "#EC4899" },
]

const features = [
  {
    icon: <Leaf className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Premium Quality",
    description: "100% water-soluble fertilizers with optimal nutrient ratios for maximum crop yield.",
    color: "#22C55E",
  },
  {
    icon: <Droplets className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Drip Fertigation",
    description: "Specially formulated for drip irrigation systems ensuring efficient nutrient delivery.",
    color: "#3B82F6",
  },
  {
    icon: <Sun className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "All Seasons",
    description: "Products designed for every growth stage from sowing to harvest.",
    color: "#F59E0B",
  },
  {
    icon: <Sprout className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Sustainable Growth",
    description: "Eco-friendly formulations that promote sustainable agricultural practices.",
    color: "#EC4899",
  },
]

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const productsWrapRef = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  // Set video playback rate
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7
    }
  }, [])

  // Auto-scroll products gallery
  useEffect(() => {
    const root = productsWrapRef.current
    if (!root) return

    let raf = 0
    let dir: 1 | -1 = 1
    const speed = 0.8

    const step = () => {
      const max = root.scrollWidth - root.clientWidth
      if (max > 0) {
        root.scrollLeft += speed * dir
        if (root.scrollLeft >= max - 1) dir = -1
        if (root.scrollLeft <= 0) dir = 1
      }
      raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Video Background - Same style as Product Pages */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src="/assest/Background1.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(34,197,94,0.2) 50%, rgba(0,0,0,0.75) 100%)",
          }}
        />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl animate-float"
            style={{ background: "rgba(34,197,94,0.4)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl animate-float"
            style={{ background: "rgba(34,197,94,0.3)", animationDelay: "1.5s" }}
          />
        </div>
      </div>

      {/* Navigation */}
      <Navbar variant="transparent" />

      {/* Hero Section */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-screen flex items-center justify-center pt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="inline-block px-6 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-6 border border-green-500/30"
            >
              Premium Agricultural Solutions
            </motion.span>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              <span className="block">Grow Better</span>
              <span className="block gradient-text">Harvest More</span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
              Premium water-soluble fertilizers and bio-stimulants designed for maximum crop yield and sustainable agriculture.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-base sm:text-lg flex items-center justify-center gap-2 animate-glow"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>

              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white/30 text-white font-bold text-base sm:text-lg hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-white/50"
            >
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="relative py-12 sm:py-20">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center"
                  style={{ background: `${stat.color}20` }}
                >
                  <div style={{ color: stat.color }}>{stat.icon}</div>
                </motion.div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-white/60 text-xs sm:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="relative py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Why Choose <span className="text-green-500">LayerAgri</span>?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-lg px-2">
              We provide premium quality fertilizers and agricultural solutions that help farmers achieve better yields while promoting sustainable farming practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl mb-3 sm:mb-4 flex items-center justify-center"
                  style={{ background: `${feature.color}20` }}
                >
                  <div style={{ color: feature.color }}>{feature.icon}</div>
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm sm:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative py-12 sm:py-20">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Our <span className="text-green-500">Products</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-lg px-2">
              Explore our wide range of premium fertilizers and bio-stimulants designed for different crops and growth stages.
            </p>
          </motion.div>

          {/* Mobile: Vertical Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:hidden"
          >
            <ProductsGallery variant="mobile" />
          </motion.div>

          {/* Desktop: Horizontal Auto-Scroll */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            ref={productsWrapRef}
            className="hidden md:block [&_*]:scrollbar-none overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
          >
            <ProductsGallery variant="desktop" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8 sm:mt-10 px-4"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-base sm:text-lg flex items-center justify-center gap-2 mx-auto"
              >
                Request Product Catalog
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center relative overflow-hidden"
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-emerald-500/10" />

            <div className="relative">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Ready to Boost Your Crop Yield?
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-lg px-2">
                Get in touch with our agricultural experts to find the perfect fertilizer solution for your crops.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-6 sm:mb-8">
                <div className="flex items-center gap-3 text-white/80 w-full sm:w-auto justify-center sm:justify-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs sm:text-sm text-white/50">Call us at</p>
                    <p className="font-semibold text-sm sm:text-base">+91 9987654332</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-white/80 w-full sm:w-auto justify-center sm:justify-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs sm:text-sm text-white/50">Email us at</p>
                    <p className="font-semibold text-sm sm:text-base break-all sm:break-normal">layeragri2023@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-white/80 w-full sm:w-auto justify-center sm:justify-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs sm:text-sm text-white/50">Visit us at</p>
                    <p className="font-semibold text-sm sm:text-base">Talewade IT Park, Pune</p>
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-base sm:text-lg animate-glow"
                >
                  Contact Us Today
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
