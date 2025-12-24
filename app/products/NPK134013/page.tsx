"use client"

import ProductPageLayout from "@/app/components/ProductPageLayout"

export default function NPK134013Page() {
  const product = {
    title: "NPK 13-40-13",
    subtitle: "Multi-Stage Growth Formula",
    description:
      "NUTRIX NPK 13:40:13 contains nitrogen in different forms needed gradually at different growth stages of crops. It is useful specially for healthy vegetative growth and contains phosphorous (P) & potash (K) in 100% soluble form for healthy flowering & fruiting stages.",
    image: "/assest/Potassium schoenite.jpg",
    secondaryImage: "/assest/Potassium schoenite.jpg",
    packing: "1kg",
    themeColor: "#14B8A6",
    benefits: [
      "Nitrogen in different forms for gradual release at various growth stages",
      "Supports healthy vegetative growth of plants",
      "100% soluble phosphorus (P) and potash (K) for optimal uptake",
      "Enhances flowering and fruiting for better crop yield",
      "Balanced nutrition tailored to plant development needs",
      "Suitable for all stages from vegetative to reproductive",
    ],
    specifications: [
      { label: "Nitrogen (N)", value: "13%" },
      { label: "Phosphorus (P2O5)", value: "40%" },
      { label: "Potassium (K2O)", value: "13%" },
      { label: "Form", value: "Crystalline Powder" },
      { label: "Solubility", value: "100% Water Soluble" },
    ],
    crops: [
      "Tomatoes",
      "Chilies",
      "Brinjal",
      "Cucurbits",
      "Grapes",
      "Pomegranate",
    ],
    applicationMethod: [
      "Drip Irrigation: 2-4 kg per acre per application",
      "Foliar Spray: 3-5 grams per liter of water",
      "Apply at vegetative and pre-flowering stages",
      "Repeat every 10-15 days for best results",
    ],
  }

  return <ProductPageLayout product={product} />
}
