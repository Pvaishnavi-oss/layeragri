"use client"

import ProductPageLayout from "@/app/components/ProductPageLayout"

export default function NPK1608322TEPage() {
  const product = {
    title: "NPK 16-08-32+2 + TE",
    subtitle: "Suspension Fertilizer",
    description:
      "NUTRIX 16-8-32+2+T.E. Suspension Fertilizer offers a unique, solution-based formula that's ready for direct application. It contains essential nutrients like nitrogen, phosphorus, and potassium, ensuring rapid absorption while avoiding adverse interactions with soil components. A dependable choice for robust plant growth.",
    image: "/assest/18-08-32+2+TE.jpg",
    secondaryImage: "/assest/18-08-32+2+TE.jpg",
    packing: "1kg",
    themeColor: "#3B82F6",
    benefits: [
      "Unique solution-based formula ready for direct application",
      "Provides essential NPK nutrients in optimal ratios",
      "Ensures rapid nutrient absorption for quick plant support",
      "Prevents adverse interactions with soil components",
      "Delivers consistent and effective results",
      "High potassium (32%) for fruit quality and stress resistance",
    ],
    specifications: [
      { label: "Nitrogen (N)", value: "16%" },
      { label: "Phosphorus (P2O5)", value: "8%" },
      { label: "Potassium (K2O)", value: "32%" },
      { label: "Sulfur (S)", value: "2%" },
      { label: "Trace Elements", value: "Fe, Mn, Zn, Cu, B, Mo" },
      { label: "Form", value: "Suspension" },
    ],
    crops: [
      "Tomatoes",
      "Peppers",
      "Grapes",
      "Bananas",
      "Mangoes",
      "Citrus",
    ],
    applicationMethod: [
      "Drip Irrigation: 3-5 kg per acre per application",
      "Apply during fruit development and maturity stages",
      "Shake well before use for uniform distribution",
      "Can be mixed with most pesticides (test compatibility first)",
    ],
  }

  return <ProductPageLayout product={product} />
}
