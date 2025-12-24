"use client"

import React, { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Phone,
  Mail,
  MapPin,
  FileText,
  Clock,
  Send,
  MessageCircle,
  Building2,
  Headphones,
} from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const contactInfo = [
  {
    icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Phone Numbers",
    content: ["+91 9987654332", "+91 7875685434", "+91 8657645324", "+91 7756564545"],
    color: "#22C55E",
    action: "tel:+919987654332",
  },
  {
    icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Email Address",
    content: ["layeragri2023@gmail.com"],
    color: "#3B82F6",
    action: "mailto:layeragri2023@gmail.com",
  },
  {
    icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Office Address",
    content: ["PPW - B - 107, Talewade IT Park", "TALWADE, PUNE 410500"],
    color: "#EC4899",
    action: null,
  },
  {
    icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "GSTIN Number",
    content: ["24AS3465768SW"],
    color: "#F59E0B",
    action: null,
  },
]

const features = [
  {
    icon: <Headphones className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "24/7 Support",
    description: "Our expert team is available round the clock to assist you.",
    color: "#22C55E",
  },
  {
    icon: <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Quick Response",
    description: "We respond to all inquiries within 24 hours.",
    color: "#3B82F6",
  },
  {
    icon: <Building2 className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Bulk Orders",
    description: "Special pricing and support for bulk agricultural orders.",
    color: "#EC4899",
  },
]

export default function ContactPage() {
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
              x: [0, 80, 0],
              y: [0, -40, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 40, 0],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-pink-500/20 blur-3xl"
          />
        </div>
      </div>

      {/* Navbar */}
      <Navbar variant="transparent" />

      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity }}
        className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center pt-20 sm:pt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-block px-4 sm:px-6 py-2 rounded-full bg-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-blue-500/30"
            >
              We&apos;re Here to Help
            </motion.span>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              <span className="block">Get in</span>
              <span className="block gradient-text">Touch</span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
              Have questions about our fertilizers? Need bulk pricing? Our agricultural experts are ready to help you grow.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Cards Section */}
      <section className="relative py-10 sm:py-16">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.action || undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -8 }}
                className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center group cursor-pointer block"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center transition-all"
                  style={{ background: `${info.color}20` }}
                >
                  <div style={{ color: info.color }}>{info.icon}</div>
                </motion.div>
                <h3 className="text-sm sm:text-lg font-bold text-white mb-2 sm:mb-3">{info.title}</h3>
                {info.content.map((line, i) => (
                  <p key={i} className="text-white/60 text-xs sm:text-sm leading-relaxed break-all sm:break-normal">
                    {line}
                  </p>
                ))}
                {info.action && (
                  <div
                    className="mt-3 sm:mt-4 inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium transition-colors"
                    style={{ color: info.color }}
                  >
                    <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                    Contact Now
                  </div>
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Why <span className="text-green-500">Contact Us</span>?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base px-2">
              We&apos;re committed to providing exceptional service to all our customers.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-xl sm:rounded-2xl p-5 sm:p-8 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center"
                  style={{ background: `${feature.color}20` }}
                >
                  <div style={{ color: feature.color }}>{feature.icon}</div>
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-white/60 text-sm sm:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-10 sm:py-16">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12"
          >
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Send Us a <span className="text-green-500">Message</span>
              </h2>
              <p className="text-white/60 text-sm sm:text-base px-2">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <form className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-white/80 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all text-sm sm:text-base"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  <label className="block text-white/80 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 9876543210"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all text-sm sm:text-base"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-white/80 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all text-sm sm:text-base"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
              >
                <label className="block text-white/80 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                  Subject
                </label>
                <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all text-sm sm:text-base">
                  <option value="" className="bg-slate-800">Select a subject</option>
                  <option value="product" className="bg-slate-800">Product Inquiry</option>
                  <option value="bulk" className="bg-slate-800">Bulk Order</option>
                  <option value="pricing" className="bg-slate-800">Pricing Information</option>
                  <option value="support" className="bg-slate-800">Technical Support</option>
                  <option value="other" className="bg-slate-800">Other</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-white/80 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all resize-none text-sm sm:text-base"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-base sm:text-lg flex items-center justify-center gap-2 mx-auto animate-glow"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  Send Message
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="relative py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Business Hours</h3>
                </div>
                <p className="text-white/60 mb-4 sm:mb-6 text-sm sm:text-base">
                  We&apos;re available during these hours to assist you with all your agricultural needs.
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/10">
                    <span className="text-white/80 text-sm sm:text-base">Monday - Friday</span>
                    <span className="text-white font-semibold text-sm sm:text-base">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/10">
                    <span className="text-white/80 text-sm sm:text-base">Saturday</span>
                    <span className="text-white font-semibold text-sm sm:text-base">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 sm:py-3">
                    <span className="text-white/80 text-sm sm:text-base">Sunday</span>
                    <span className="text-red-400 font-semibold text-sm sm:text-base">Closed</span>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-blue-500/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Need Urgent Help?</h4>
                <p className="text-white/60 mb-3 sm:mb-4 text-sm sm:text-base">
                  For urgent inquiries, reach us via WhatsApp for faster response.
                </p>
                <motion.a
                  href="https://wa.me/919987654332"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-sm sm:text-base"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  WhatsApp Us
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
