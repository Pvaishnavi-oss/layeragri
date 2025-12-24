"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Phone,
  Mail,
  MapPin,
  FileText,
  Leaf,
  Droplets,
  Sprout,
  CheckCircle2,
  ChevronDown,
} from "lucide-react"
import Footer from "./Footer"
import Navbar from "./Navbar"

interface ProductData {
  title: string
  subtitle?: string
  description: string
  image: string
  secondaryImage?: string
  benefits: string[]
  specifications?: {
    label: string
    value: string
  }[]
  applicationMethod?: string[]
  crops?: string[]
  dosage?: string
  packing?: string
  themeColor?: string
}

interface ProductPageLayoutProps {
  product: ProductData
}

export default function ProductPageLayout({ product }: ProductPageLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7
    }
  }, [])

  const themeColor = product.themeColor || "#22c55e"

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Video Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src="/assest/Background.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(0,0,0,0.75) 0%, ${themeColor}20 50%, rgba(0,0,0,0.75) 100%)`,
          }}
        />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl animate-float"
            style={{ background: `${themeColor}40` }}
          />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl animate-float"
            style={{ background: `${themeColor}30`, animationDelay: "1.5s" }}
          />
        </div>
      </div>

      {/* Navbar */}
      <Navbar variant="transparent" themeColor={themeColor} />

      {/* Hero Section */}
      <motion.section style={{ y, opacity }} className="relative min-h-[80vh] flex items-center py-16 sm:py-20 pt-24 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white"
            >
              {product.subtitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                  style={{ background: `${themeColor}30`, color: themeColor }}
                >
                  {product.subtitle}
                </motion.span>
              )}

              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight">
                <span className="gradient-text">{product.title}</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 leading-relaxed">
                {product.description}
              </p>

              {product.packing && (
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <div className="glass px-4 sm:px-6 py-2 sm:py-3 rounded-xl">
                    <span className="text-white/60 text-xs sm:text-sm">Packing</span>
                    <p className="text-white font-semibold text-sm sm:text-base">{product.packing}</p>
                  </div>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-white transition-all animate-glow text-sm sm:text-base"
                style={{ background: `linear-gradient(135deg, ${themeColor}, ${themeColor}cc)` }}
              >
                Learn More
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
              </motion.button>
            </motion.div>

            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 rounded-full opacity-20 hidden sm:block"
                  style={{
                    background: `conic-gradient(from 0deg, ${themeColor}, transparent, ${themeColor})`,
                  }}
                />
                <div className="relative glass rounded-2xl sm:rounded-3xl p-3 sm:p-4 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[280px] sm:h-[350px] md:h-[400px] object-cover rounded-xl sm:rounded-2xl"
                  />
                  <div
                    className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none"
                    style={{
                      background: `linear-gradient(180deg, transparent 60%, ${themeColor}40 100%)`,
                    }}
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 glass px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2"
              >
                <Leaf className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: themeColor }} />
                <span className="text-white text-xs sm:text-sm font-medium">Premium Quality</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 glass px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2"
              >
                <Sprout className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: themeColor }} />
                <span className="text-white text-xs sm:text-sm font-medium">100% Effective</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <section id="benefits" className="py-12 sm:py-20 relative">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Key <span style={{ color: themeColor }}>Benefits</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Discover why {product.title} is the preferred choice for farmers and agricultural professionals.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {product.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 group cursor-pointer"
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-all group-hover:scale-110"
                  style={{ background: `${themeColor}20` }}
                >
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: themeColor }} />
                </div>
                <p className="text-white font-medium text-sm sm:text-base">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-12 sm:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Secondary Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="glass rounded-2xl sm:rounded-3xl p-3 sm:p-4 overflow-hidden">
                <img
                  src={product.secondaryImage || product.image}
                  alt={`${product.title} Detail`}
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-xl sm:rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
                Product <span style={{ color: themeColor }}>Details</span>
              </h3>

              {product.specifications && product.specifications.length > 0 && (
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="glass rounded-xl p-3 sm:p-4 flex justify-between items-center">
                      <span className="text-white/60 text-sm sm:text-base">{spec.label}</span>
                      <span className="text-white font-semibold text-sm sm:text-base">{spec.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {product.crops && product.crops.length > 0 && (
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                    <Sprout className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: themeColor }} />
                    Recommended Crops
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.crops.map((crop, index) => (
                      <span
                        key={index}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-white"
                        style={{ background: `${themeColor}30` }}
                      >
                        {crop}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {product.applicationMethod && product.applicationMethod.length > 0 && (
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                    <Droplets className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: themeColor }} />
                    Application Method
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {product.applicationMethod.map((method, index) => (
                      <li key={index} className="flex items-start gap-2 sm:gap-3 text-white/80 text-sm sm:text-base">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" style={{ color: themeColor }} />
                        {method}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-20 relative">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Get in <span style={{ color: themeColor }}>Touch</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Looking for {product.title} in bulk or custom packaging? Contact us for product details, pricing, and delivery options.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {[
              { icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Phone", content: ["9987654332", "7875685434", "8657645324", "7756564545"], color: "#3B82F6" },
              { icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Email", content: ["layeragri2023@gmail.com"], color: "#EC4899" },
              { icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Address", content: ["PPW - B - 107, Talewade IT Park", "TALWADE, PUNE 410500"], color: "#22C55E" },
              { icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />, title: "GSTIN", content: ["24AS3465768SW"], color: "#F59E0B" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center group cursor-pointer"
              >
                <div
                  className="w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-all group-hover:scale-110"
                  style={{ background: `${item.color}20` }}
                >
                  <div style={{ color: item.color }}>{item.icon}</div>
                </div>
                <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h4>
                {item.content.map((line, i) => (
                  <p key={i} className="text-white/60 text-xs sm:text-sm break-all sm:break-normal">{line}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
