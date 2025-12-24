"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  PhoneCall,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Leaf,
  ArrowRight,
} from "lucide-react"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/#products", label: "Products" },
  { href: "/contact", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
]

const contactInfo = [
  {
    icon: <PhoneCall className="w-5 h-5" />,
    label: "Phone",
    value: "+91 9987654332, 7875685434",
    subValue: "Mon-Sat 9am-6pm",
    color: "#22C55E",
    href: "tel:+919987654332",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "layeragri2023@gmail.com",
    color: "#3B82F6",
    href: "mailto:layeragri2023@gmail.com",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Address",
    value: "PPW - B - 107, Talewade IT Park",
    subValue: "TALWADE, PUNE 410500",
    color: "#EC4899",
  },
]

const socialLinks = [
  { href: "https://www.instagram.com/", icon: <Instagram className="w-5 h-5" />, label: "Instagram", color: "#E1306C" },
  { href: "https://www.facebook.com/", icon: <Facebook className="w-5 h-5" />, label: "Facebook", color: "#1877F2" },
  { href: "mailto:layeragri2023@gmail.com", icon: <Mail className="w-5 h-5" />, label: "Email", color: "#EA4335" },
  { href: "https://wa.me/919987654332", icon: <PhoneCall className="w-5 h-5" />, label: "WhatsApp", color: "#25D366" },
]

export default function Footer() {
  return (
    <footer className="relative">
      {/* Background with glass effect */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-white">
                Layer<span className="text-green-500">Agri</span>
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed mb-6 text-sm sm:text-base">
              Your trusted partner for premium quality fertilizers and agricultural solutions.
              Empowering farmers with innovative products for sustainable crop growth.
            </p>

            {/* Social Links */}
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white transition-colors"
                  style={{
                    background: `${social.color}15`,
                    borderColor: `${social.color}30`,
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-green-500 transition-colors flex items-center gap-2 group text-sm sm:text-base"
                  >
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 -ml-5 sm:-ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6">Contact Us</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-xl p-3 sm:p-4 flex items-start gap-3 sm:gap-4"
                >
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${info.color}20` }}
                  >
                    <div style={{ color: info.color }}>{info.icon}</div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white/50 text-xs sm:text-sm mb-1">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white font-medium hover:text-green-500 transition-colors text-sm sm:text-base break-all sm:break-normal"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium text-sm sm:text-base">{info.value}</p>
                    )}
                    {info.subValue && (
                      <p className="text-white/50 text-xs sm:text-sm">{info.subValue}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* GSTIN Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass rounded-xl p-3 sm:p-4 flex items-start gap-3 sm:gap-4"
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#F59E0B20" }}
                >
                  <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-white/50 text-xs sm:text-sm mb-1">GSTIN</p>
                  <p className="text-white font-medium text-sm sm:text-base">24AS3465768SW</p>
                  <p className="text-white/50 text-xs sm:text-sm">Registered Business</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-6 sm:my-10" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4"
        >
          <p className="text-white/50 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} LayerAgri Fertilizers Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/privacy-policy"
              className="text-white/50 text-xs sm:text-sm hover:text-green-500 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="/contact"
              className="text-white/50 text-xs sm:text-sm hover:text-green-500 transition-colors"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
