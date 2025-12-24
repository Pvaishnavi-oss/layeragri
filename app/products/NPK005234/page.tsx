"use client"

import ProductPageLayout from "@/app/components/ProductPageLayout"

export default function NPK005234Page() {
  const product = {
    title: "NPK 00-52-34",
    subtitle: "Phosphate-Potash Premium",
    description:
      "NUTRIX NPK 0:52:34 is a water-soluble fertilizer with high phosphate content along with optimum potash levels. It is readily soluble in water and is best for drip irrigation and foliar application.",
    image: "/assest/52-34.jpg",
    secondaryImage: "/assest/52-34.jpg",
    packing: "1kg",
    themeColor: "#0891B2",
    benefits: [
      "High phosphate (52%) for strong root and flower development",
      "Optimal potash (34%) for balanced nutrition and fruit quality",
      "Zero nitrogen - ideal for flowering and fruiting stages",
      "100% water-soluble for quick plant absorption",
      "Perfect for drip irrigation and foliar applications",
      "Enhances nutrient uptake and promotes healthy growth",
    ],
    specifications: [
      { label: "Nitrogen (N)", value: "0%" },
      { label: "Phosphorus (P2O5)", value: "52%" },
      { label: "Potassium (K2O)", value: "34%" },
      { label: "Form", value: "Crystalline Powder" },
      { label: "Solubility", value: "100% Water Soluble" },
    ],
    crops: [
      "Tomatoes",
      "Peppers",
      "Grapes",
      "Strawberries",
      "Cucurbits",
      "Flowers",
    ],
    applicationMethod: [
      "Drip Irrigation: 2-4 kg per acre per application",
      "Foliar Spray: 3-5 grams per liter of water",
      "Apply during flowering and fruit development stages",
      "Excellent for phosphorus and potassium correction",
    ],
  }

  return <ProductPageLayout product={product} />
}
