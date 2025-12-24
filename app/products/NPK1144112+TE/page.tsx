"use client"

import ProductPageLayout from "@/app/components/ProductPageLayout"

export default function NPK1144112Page() {
  const product = {
    title: "NPK 11-44-11-2 + TE",
    subtitle: "Balanced Growth Formula",
    description:
      "NUTRIX NPK 11-44-11-2+TE fertilizer with its high phosphorus content is particularly useful for stimulating root growth, promoting flowering and fruit set, and supporting overall plant health especially during the early stages of growth.",
    image: "/assest/11-44-11-2+TE.jpg",
    secondaryImage: "/assest/11-44-11-2+TE.jpg",
    packing: "1kg",
    themeColor: "#EC4899",
    benefits: [
      "High phosphorus content (44%) to stimulate robust root growth",
      "Promotes healthy flowering and improves fruit set",
      "Supports overall plant health during critical early growth stages",
      "Enriched with trace elements (TE) for better nutrient absorption",
      "Helps plants establish quickly with stronger structures",
      "Balanced NPK ratio for comprehensive nutrition",
    ],
    specifications: [
      { label: "Nitrogen (N)", value: "11%" },
      { label: "Phosphorus (P2O5)", value: "44%" },
      { label: "Potassium (K2O)", value: "11%" },
      { label: "Sulfur (S)", value: "2%" },
      { label: "Trace Elements", value: "Fe, Mn, Zn, Cu, B, Mo" },
      { label: "Solubility", value: "100% Water Soluble" },
    ],
    crops: [
      "Vegetables",
      "Fruits",
      "Cereals",
      "Pulses",
      "Oilseeds",
      "Flowers",
    ],
    applicationMethod: [
      "Drip Irrigation: 2-3 kg per acre per application",
      "Foliar Spray: 3-5 grams per liter of water",
      "Apply at transplanting and during vegetative growth",
      "Repeat application every 10-15 days during growth phase",
    ],
  }

  return <ProductPageLayout product={product} />
}
