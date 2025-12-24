"use client"

import ProductPageLayout from "@/app/components/ProductPageLayout"

export default function NPK00094615TEPage() {
  const product = {
    title: "NPK 00:09:46-15 + TE",
    subtitle: "Stage-Specific Formula",
    description:
      "Stage specific customized Water-Soluble Fertilizer NUTRIX NPKS 0:9:46:15 + TE has been designed specifically keeping in mind diverse crop coverage. Stage specific and optimum supplementation of nutrition allows farmers to maximize yields across all the crops.",
    image: "/assest/00-09-46-15+TE.jpg",
    secondaryImage: "/assest/00-09-46-15+TE.jpg",
    packing: "1kg",
    themeColor: "#059669",
    benefits: [
      "Stage-specific formulation for precise crop nutrition",
      "Supports diverse crop coverage with customized nutrients",
      "Optimizes nutrient supply for maximum yields",
      "Enhances growth at critical developmental stages",
      "High potassium (46%) for fruit quality and stress resistance",
      "Contains sulfur (15%) for protein synthesis",
    ],
    specifications: [
      { label: "Nitrogen (N)", value: "0%" },
      { label: "Phosphorus (P2O5)", value: "9%" },
      { label: "Potassium (K2O)", value: "46%" },
      { label: "Sulfur (S)", value: "15%" },
      { label: "Trace Elements", value: "Included" },
      { label: "Solubility", value: "100% Water Soluble" },
    ],
    crops: [
      "Fruits",
      "Vegetables",
      "Cotton",
      "Oilseeds",
      "Pulses",
      "Spices",
    ],
    applicationMethod: [
      "Drip Irrigation: 3-5 kg per acre per application",
      "Foliar Spray: 5 grams per liter of water",
      "Apply during fruit development and maturity",
      "Best for potassium-demanding crops",
    ],
  }

  return <ProductPageLayout product={product} />
}
