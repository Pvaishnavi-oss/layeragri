"use client"

import ProductPageLayout from "@/app/components/ProductPageLayout"

export default function NPK174400Page() {
  const product = {
    title: "NPK 17-44-00",
    subtitle: "Urea Phosphate Formula",
    description:
      "NUTRIX NPK 17-44-00, also known as Urea Phosphate, is a water-soluble fertilizer containing 17% nitrogen (N), 44% phosphorus (P), and 0% potassium (K). Ideal for foliar application and fertigation, especially during early growth and flowering stages.",
    image: "/assest/17-44.jpg",
    secondaryImage: "/assest/17-44.jpg",
    packing: "1kg",
    themeColor: "#6366F1",
    benefits: [
      "Contains 17% nitrogen (N) and 44% phosphorus (P) for essential nutrition",
      "Zero potassium - tailored for specific crop requirements",
      "100% water-soluble for quick and efficient nutrient delivery",
      "Ideal for foliar application and fertigation methods",
      "Supports early growth and flowering stages",
      "Low pH helps in nutrient availability in alkaline soils",
    ],
    specifications: [
      { label: "Nitrogen (N)", value: "17%" },
      { label: "Phosphorus (P2O5)", value: "44%" },
      { label: "Potassium (K2O)", value: "0%" },
      { label: "pH (1% solution)", value: "1.5-2.5" },
      { label: "Solubility", value: "100% Water Soluble" },
    ],
    crops: [
      "Vegetables",
      "Fruits",
      "Flowers",
      "Field Crops",
      "Plantation Crops",
    ],
    applicationMethod: [
      "Drip Irrigation: 2-3 kg per acre",
      "Foliar Spray: 3-5 grams per liter of water",
      "Apply at early growth stage for root establishment",
      "Use during flowering initiation for better fruit set",
    ],
  }

  return <ProductPageLayout product={product} />
}
