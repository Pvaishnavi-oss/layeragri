"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  Home,
  Package,
  Phone,
  FileText,
  ChevronDown,
  Leaf,
} from "lucide-react"

const navLinks = [
  { href: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
  { href: "/#products", label: "Products", icon: <Package className="w-4 h-4" /> },
  { href: "/contact", label: "Contact", icon: <Phone className="w-4 h-4" /> },
  { href: "/privacy-policy", label: "Privacy Policy", icon: <FileText className="w-4 h-4" /> },
]

const products = [
  { id: "NPK095400+TE", title: "NPK 09:54:00+TE" },
  { id: "NPK126100", title: "NPK 12-61-00" },
  { id: "PotassiumSchoenite", title: "Potassium Schoenite" },
  { id: "NPK005234", title: "NPK 00-52-34" },
  { id: "NPK1144112+TE", title: "NPK 11-44-11-2+TE" },
  { id: "NPK151530+TE", title: "NPK 15-15-30+TE" },
  { id: "NPK144800+TE", title: "NPK 14-48-00+TE" },
  { id: "NPK1608322+TE", title: "NPK 16-08-32-2+TE" },
  { id: "NPK134013", title: "NPK 13-40-13" },
  { id: "NPK174400", title: "NPK 17-44-00" },
  { id: "mycon", title: "Mycon-DF" },
  { id: "SILERA", title: "SILERA" },
]

interface NavbarProps {
  variant?: "transparent" | "solid"
  themeColor?: string
}

export default function Navbar({ variant = "transparent", themeColor = "#22C55E" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href.replace("/#", "/"))
  }

  const navBackground = variant === "solid" || isScrolled
    ? "bg-slate-900/95 backdrop-blur-xl border-b border-white/10"
    : "bg-transparent"

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm p-1 border border-white/20 group-hover:border-green-500/50 transition-all duration-300">
                  <Image
                    src="/assest/logo.png"
                    alt="LayerAgri Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <motion.div
                  className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${themeColor}40, transparent)`,
                    filter: "blur(8px)",
                    zIndex: -1,
                  }}
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Layer<span style={{ color: themeColor }}>Agri</span>
                </span>
                <span className="text-[9px] sm:text-[10px] text-white/50 tracking-wider uppercase">
                  Premium Fertilizers
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.href} className="relative">
                  {link.label === "Products" ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsProductsOpen(true)}
                      onMouseLeave={() => setIsProductsOpen(false)}
                    >
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                          isActive(link.href)
                            ? "bg-white/10 text-white"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {link.icon}
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProductsOpen ? "rotate-180" : ""}`} />
                      </motion.button>

                      {/* Products Dropdown */}
                      <AnimatePresence>
                        {isProductsOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-64 py-2 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl"
                          >
                            <div className="px-3 py-2 border-b border-white/10">
                              <p className="text-xs text-white/50 uppercase tracking-wider">Our Products</p>
                            </div>
                            <div className="max-h-80 overflow-y-auto py-2">
                              {products.map((product, index) => (
                                <Link
                                  key={product.id}
                                  href={`/products/${product.id}`}
                                  className="block"
                                >
                                  <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.03 }}
                                    whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.05)" }}
                                    className="px-4 py-2 text-sm text-white/70 hover:text-white flex items-center gap-2 transition-colors"
                                  >
                                    <Leaf className="w-3 h-3" style={{ color: themeColor }} />
                                    {product.title}
                                  </motion.div>
                                </Link>
                              ))}
                            </div>
                            <div className="px-3 py-2 border-t border-white/10">
                              <Link href="/#products" className="text-xs text-green-400 hover:text-green-300 transition-colors">
                                View All Products →
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link href={link.href}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                          isActive(link.href)
                            ? "bg-white/10 text-white"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {link.icon}
                        {link.label}
                        {isActive(link.href) && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                            style={{ backgroundColor: themeColor }}
                          />
                        )}
                      </motion.div>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              <Link href="/contact" className="hidden sm:block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 rounded-full text-white font-semibold text-sm relative overflow-hidden group"
                  style={{
                    background: `linear-gradient(135deg, ${themeColor}, ${themeColor}cc)`,
                  }}
                >
                  <span className="relative z-10">Get Quote</span>
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${themeColor}cc, ${themeColor})`,
                    }}
                  />
                </motion.button>
              </Link>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[85vw] max-w-80 bg-slate-900 border-l border-white/10 overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/10 p-1">
                      <Image
                        src="/assest/logo.png"
                        alt="LayerAgri Logo"
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-lg font-bold text-white">LayerAgri</span>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg bg-white/5 text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav Links */}
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.label === "Products" ? (
                        <div>
                          <button
                            onClick={() => setIsProductsOpen(!isProductsOpen)}
                            className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all"
                          >
                            <div className="flex items-center gap-3">
                              {link.icon}
                              {link.label}
                            </div>
                            <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
                          </button>
                          <AnimatePresence>
                            {isProductsOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-8 py-2 space-y-1">
                                  {products.map((product) => (
                                    <Link
                                      key={product.id}
                                      href={`/products/${product.id}`}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="block px-3 py-2 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                                    >
                                      {product.title}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                            isActive(link.href)
                              ? "bg-white/10 text-white"
                              : "text-white/70 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {link.icon}
                          {link.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8"
                >
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <button
                      className="w-full py-3 rounded-xl text-white font-semibold"
                      style={{
                        background: `linear-gradient(135deg, ${themeColor}, ${themeColor}cc)`,
                      }}
                    >
                      Get Quote
                    </button>
                  </Link>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 pt-8 border-t border-white/10"
                >
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-4">Contact Us</p>
                  <div className="space-y-3 text-sm text-white/70">
                    <p>+91 9987654332</p>
                    <p>layeragri2023@gmail.com</p>
                    <p>Talewade IT Park, Pune</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
