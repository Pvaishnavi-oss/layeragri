"use client"

import ProductPageLayout from "@/app/components/ProductPageLayout"

export default function NPK144800Page() {
  const product = {
    title: "NPK 14-48-00 + TE",
    subtitle: "High Phosphorus Formula",
    description:
      "NUTRIX 14-48-00 NPK + TE is a high-phosphorus, nitrogen-rich fertilizer with zero potassium, enriched with trace elements (TE). It is mainly used for root development, flowering, and early crop establishment.",
    image: "/assest/14-48-00+TE.jpg",
    secondaryImage: "/assest/14-48-00+TE.jpg",
    packing: "1kg",
    themeColor: "#DC2626",
    benefits: [
      "High phosphorus (48%) and nitrogen (14%) for robust root development",
      "Zero potassium - tailored for specific crop nutrient requirements",
      "Enriched with trace elements (TE) for enhanced plant nutrition",
      "Promotes healthy flowering and early crop establishment",
      "Supports healthy growth during critical initial stages",
      "Ideal for transplanting and seedling development",
    ],
    specifications: [
      { label: "Nitrogen (N)", value: "14%" },
      { label: "Phosphorus (P2O5)", value: "48%" },
      { label: "Potassium (K2O)", value: "0%" },
      { label: "Trace Elements", value: "Fe, Mn, Zn, Cu, B, Mo" },
      { label: "Solubility", value: "100% Water Soluble" },
    ],
    crops: [
      "Vegetables",
      "Fruits",
      "Flowers",
      "Nursery Plants",
      "Transplants",
    ],
    applicationMethod: [
      "Drip Irrigation: 2-3 kg per acre per application",
      "Foliar Spray: 3-5 grams per liter of water",
      "Apply during transplanting and root establishment",
      "Use for seedling development in nurseries",
    ],
  }

  return <ProductPageLayout product={product} />
}
