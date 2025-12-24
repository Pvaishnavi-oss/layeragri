"use client"

import React, { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Shield,
  Eye,
  Database,
  Lock,
  Cookie,
  Share2,
  Clock,
  UserCheck,
  Mail,
  CheckCircle2,
} from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const sections = [
  {
    icon: <Eye className="w-6 h-6" />,
    title: "1. Overview",
    content:
      "At LayerAgri, we respect your privacy. This policy explains what information we collect and how we use it when you browse our website, contact us, or purchase our products. We are committed to protecting your personal data and being transparent about our practices.",
    color: "#22C55E",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "2. Information We Collect",
    content:
      "We may collect contact details (name, phone, email, address) when you submit forms or make purchases. We also collect basic analytics data (pages visited, device type, browser information) to improve our website and services. For business customers, we may collect company details and GSTIN information.",
    color: "#3B82F6",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "3. How We Use Information",
    content:
      "We use your information to: respond to your inquiries and provide customer support, process orders and deliver products, improve our services and website experience, send updates about new products (only if you opt-in), and maintain website security and prevent fraud.",
    color: "#8B5CF6",
  },
  {
    icon: <Cookie className="w-6 h-6" />,
    title: "4. Cookies & Analytics",
    content:
      "We use cookies for essential website functionality and to understand how visitors interact with our site. You can control cookie settings in your browser. We use analytics tools to track page views and user behavior, which helps us improve our website. No personally identifiable information is shared with analytics providers.",
    color: "#EC4899",
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "5. Sharing & Disclosure",
    content:
      "We do not sell, trade, or rent your personal data to third parties. We may share information only with trusted service providers (hosting, payment processing, delivery partners) who help us operate our business. We may disclose information if required by law or to protect our rights.",
    color: "#F59E0B",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "6. Security & Protection",
    content:
      "We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes secure servers, encrypted connections, and regular security audits. However, no internet transmission is 100% secure.",
    color: "#06B6D4",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "7. Data Retention",
    content:
      "We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. Order records are kept for a minimum of 7 years for tax and legal purposes.",
    color: "#10B981",
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "8. Your Rights",
    content:
      "You have the right to: access the personal data we hold about you, request correction of inaccurate data, request deletion of your data (subject to legal requirements), opt-out of marketing communications, and lodge a complaint with relevant authorities if you believe your rights have been violated.",
    color: "#EF4444",
  },
]

const highlights = [
  { label: "Transparent", icon: <Eye className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { label: "Secure", icon: <Lock className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { label: "User-First", icon: <UserCheck className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { label: "Updated 2024", icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" /> },
]

export default function PrivacyPolicyPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-900">
      {/* Fixed Video Background */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

        {/* Animated gradient overlays */}
        <div className="absolute inset-0 opacity-40">
          <motion.div
            animate={{
              x: [0, 60, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -60, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-3xl"
          />
        </div>
      </div>

      {/* Navbar */}
      <Navbar variant="transparent" />

      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity }}
        className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center pt-20 sm:pt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4 sm:mb-6"
            >
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              <span className="block">Privacy</span>
              <span className="block gradient-text">Policy</span>
            </h1>

            <p className="text-base sm:text-xl text-white/70 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
              Your privacy matters to us. Learn how LayerAgri collects, uses, and protects your personal information.
            </p>

            {/* Highlight Tags */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-white/80"
                >
                  {item.icon}
                  <span className="text-xs sm:text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Policy Sections */}
      <section className="relative py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 sm:space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 group"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all"
                    style={{ background: `${section.color}20` }}
                  >
                    <div style={{ color: section.color }}>{section.icon}</div>
                  </motion.div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-green-400 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed text-sm sm:text-base">{section.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-10 sm:py-16">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 text-center"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-green-500/20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
              Questions About This Policy?
            </h2>

            <p className="text-white/70 max-w-xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base px-2">
              If you have any questions about our privacy practices or would like to exercise your rights, please contact us.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
              <div className="flex items-center gap-2 text-white/80 text-sm sm:text-base">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <span className="break-all sm:break-normal">layeragri2023@gmail.com</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
              <div className="flex items-center gap-2 text-white/80 text-sm sm:text-base">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <span>Response within 48 hours</span>
              </div>
            </div>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-base sm:text-lg"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="relative py-6 sm:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/50 text-xs sm:text-sm"
          >
            Last updated: December 2024 | LayerAgri Fertilizers Pvt. Ltd.
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
