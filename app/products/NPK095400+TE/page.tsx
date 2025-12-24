"use client"

import ProductPageLayout from "@/app/components/ProductPageLayout"

export default function NPK095400Page() {
  const product = {
    title: "NPK 09:54:00 + TE",
    subtitle: "High Phosphorus Fertilizer",
    description:
      "NUTRIX NPK 9:54:00+TE is a high-phosphorus fertilizer enriched with trace elements (TE) to support plant growth, flowering, and fruit development. Its unique formulation ensures optimal nutrient absorption for superior crop performance.",
    image: "/assest/09-54-00+TE.jpg",
    secondaryImage: "/assest/09-54-00+TE.jpg",
    packing: "1kg",
    themeColor: "#F97316",
    benefits: [
      "High phosphorus content (54%) promotes strong root development",
      "Enriched with trace elements for enhanced nutrient absorption",
      "Supports healthy flowering and fruit formation",
      "Improves crop yields and quality significantly",
      "Ideal for early growth stages and transplanting",
      "Water-soluble formula for quick plant uptake",
    ],
    specifications: [
      { label: "Nitrogen (N)", value: "9%" },
      { label: "Phosphorus (P2O5)", value: "54%" },
      { label: "Potassium (K2O)", value: "0%" },
      { label: "Trace Elements", value: "Included" },
      { label: "Solubility", value: "100% Water Soluble" },
    ],
    crops: [
      "Vegetables",
      "Fruits",
      "Flowers",
      "Cotton",
      "Sugarcane",
      "Cereals",
      "Pulses",
    ],
    applicationMethod: [
      "Drip Irrigation: 2-3 kg per acre per application",
      "Foliar Spray: 3-5 grams per liter of water",
      "Fertigation: Apply during early growth and flowering stages",
      "Best applied during morning or evening hours",
    ],
  }

  return <ProductPageLayout product={product} />
}
