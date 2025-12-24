"use client"

import ProductPageLayout from "@/app/components/ProductPageLayout"

export default function NPK055517TEPage() {
  const product = {
    title: "NPK 05:55:17 + TE",
    subtitle: "Root & Flower Booster",
    description:
      "NPK 5-55-17 + TE is a high-phosphorus fertilizer with moderate potassium and low nitrogen, enriched with trace elements (TE). It is ideal for promoting root development, early plant growth, and flowering.",
    image: "/assest/5-55-17.jpg",
    secondaryImage: "/assest/55-55-17+TE.jpg",
    packing: "1kg",
    themeColor: "#7C3AED",
    benefits: [
      "Ultra-high phosphorus (55%) for exceptionally strong root growth",
      "Moderate potassium (17%) for balanced plant strength",
      "Low nitrogen for controlled vegetative growth",
      "Trace elements enhance overall nutrient absorption",
      "Perfect for transplanting and flowering initiation",
      "Improves flower and fruit set quality",
    ],
    specifications: [
      { label: "Nitrogen (N)", value: "5%" },
      { label: "Phosphorus (P2O5)", value: "55%" },
      { label: "Potassium (K2O)", value: "17%" },
      { label: "Trace Elements", value: "Fe, Mn, Zn, Cu, B, Mo" },
      { label: "Solubility", value: "100% Water Soluble" },
    ],
    crops: [
      "Flowers",
      "Fruits",
      "Vegetables",
      "Ornamentals",
      "Nursery Crops",
    ],
    applicationMethod: [
      "Drip Irrigation: 2-3 kg per acre per application",
      "Foliar Spray: 3-5 grams per liter of water",
      "Apply at transplanting for root establishment",
      "Use during flowering initiation for better blooms",
    ],
  }

  return <ProductPageLayout product={product} />
}
