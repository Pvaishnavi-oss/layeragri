"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Divider,
  Button,
} from "@mui/material"
import { Menu as MenuIcon, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type ProductItem = { id: string; title: string }

export default function SiteNavbar({ products }: { products: ProductItem[] }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const open = Boolean(anchorEl)

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleMenuClose = () => setAnchorEl(null)

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        px: { xs: 2, md: 4 },
        py: 2,
        boxShadow: 2,
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Link href="/" style={{ textDecoration: "none" }}>
          <Typography variant="h5" fontWeight="bold" sx={{ color: "#0F172A" }}>
            LayerAgri
          </Typography>
        </Link>

        {/* Desktop Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4, alignItems: "center" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Typography sx={{ color: "#0F172A", fontWeight: "bold" }}>Home</Typography>
          </Link>

          <Box>
            <Button
              onClick={handleMenuOpen}
              endIcon={<ChevronDown size={18} />}
              sx={{
                fontWeight: "bold",
                color: "#0F172A",
                textTransform: "none",
              }}
            >
              Products
            </Button>

            <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
              {products.map((p) => (
                <MenuItem key={p.id} onClick={handleMenuClose}>
                  <Link
                    href={`/products/${p.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {p.title}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Link href="/contact" style={{ textDecoration: "none" }}>
            <Typography sx={{ color: "#0F172A", fontWeight: "bold" }}>Contact</Typography>
          </Link>

          <Link href="/privacy-policy" style={{ textDecoration: "none" }}>
            <Typography sx={{ color: "#0F172A", fontWeight: "bold" }}>
              Privacy Policy
            </Typography>
          </Link>
        </Box>

        {/* Mobile Toggle */}
        <IconButton onClick={() => setMobileOpen((v) => !v)} sx={{ display: { xs: "block", md: "none" } }}>
          {mobileOpen ? <X /> : <MenuIcon />}
        </IconButton>
      </Box>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Box sx={{ mt: 2, borderRadius: 2, border: "1px solid #E5E7EB", overflow: "hidden" }}>
              <Box sx={{ p: 2, display: "grid", gap: 1 }}>
                <Link href="/" style={{ textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
                  <Typography fontWeight="bold" color="#0F172A">Home</Typography>
                </Link>

                <Divider />

                <Typography fontWeight="bold" color="#0F172A">Products</Typography>
                <Box sx={{ pl: 1, display: "grid", gap: 0.5 }}>
                  {products.slice(0, 8).map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${p.id}`}
                      style={{ textDecoration: "none" }}
                      onClick={() => setMobileOpen(false)}
                    >
                      <Typography sx={{ color: "#334155" }}>• {p.title}</Typography>
                    </Link>
                  ))}
                  <Typography sx={{ color: "#64748B", fontSize: 13 }}>
                    (Open desktop for full list)
                  </Typography>
                </Box>

                <Divider />

                <Link href="/contact" style={{ textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
                  <Typography fontWeight="bold" color="#0F172A">Contact</Typography>
                </Link>

                <Link href="/privacy-policy" style={{ textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
                  <Typography fontWeight="bold" color="#0F172A">Privacy Policy</Typography>
                </Link>
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  )
}
