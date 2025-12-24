"use client"

import ProductPageLayout from "@/app/components/ProductPageLayout"

export default function SileraPage() {
  const product = {
    title: "SILERA",
    subtitle: "Bio-Stimulant Solution",
    description:
      "SILIGRIP is a plant-based bio-stimulant that can help improve the health, yield, and quality of crops. It contains a stabilized form of silicon called ortho-silicic acid (OSA), which enhances plant strength and disease resistance.",
    image: "/assest/Potassium schoenite.jpg",
    secondaryImage: "/assest/Potassium schoenite.jpg",
    packing: "250ml, 500ml",
    themeColor: "#16A34A",
    benefits: [
      "Improved root development for stronger plant establishment",
      "Increased nutrient uptake efficiency",
      "Stronger plants with enhanced cell wall structure",
      "Higher yields through improved plant vigor",
      "Improved immunity against biotic and abiotic stress",
      "Better photosynthesis and energy production",
      "Enhanced defense signaling against pests and diseases",
    ],
    specifications: [
      { label: "Active Ingredient", value: "Ortho-Silicic Acid (OSA)" },
      { label: "Silicon Content", value: "2% Stabilized Si" },
      { label: "Form", value: "Liquid Concentrate" },
      { label: "pH", value: "5.5-6.5" },
      { label: "Compatibility", value: "Most Agrochemicals" },
    ],
    crops: [
      "All Vegetables",
      "Fruits",
      "Cereals",
      "Pulses",
      "Flowers",
      "Plantation Crops",
    ],
    applicationMethod: [
      "Foliar Spray: 1-2 ml per liter of water",
      "Drip Irrigation: 250-500 ml per acre",
      "Apply every 15-20 days during crop cycle",
      "Can be tank-mixed with most fertilizers and pesticides",
    ],
  }

  return <ProductPageLayout product={product} />
}
