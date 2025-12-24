"use client"

import ProductPageLayout from "@/app/components/ProductPageLayout"

export default function MyconPage() {
  const product = {
    title: "Mycon-DF",
    subtitle: "Drip Fertigation Specialist",
    description:
      "Mycon-DF Fertilizer is mainly recommended for drip fertigation for horticultural crops & vegetables. Especially effective at flowering stage and at the time of fruit development/maturity stage. Use within recommended doses for optimal results.",
    image: "/assest/Potassium schoenite.jpg",
    secondaryImage: "/assest/Potassium schoenite.jpg",
    packing: "1kg",
    themeColor: "#EA580C",
    benefits: [
      "Recommended for drip fertigation in horticultural crops and vegetables",
      "Supports plants during flowering and fruit development stages",
      "Enhances nutrient uptake for improved yield and quality",
      "Easy to apply with fertigation systems",
      "Promotes fruit maturity and quality enhancement",
      "Cost-effective solution for commercial farming",
    ],
    specifications: [
      { label: "Application Method", value: "Drip Fertigation" },
      { label: "Target Crops", value: "Horticulture & Vegetables" },
      { label: "Stage", value: "Flowering & Fruiting" },
      { label: "Form", value: "Dispersible Granules" },
      { label: "Solubility", value: "100% Water Soluble" },
    ],
    crops: [
      "Tomatoes",
      "Peppers",
      "Cucumbers",
      "Melons",
      "Grapes",
      "Pomegranate",
      "Bananas",
    ],
    applicationMethod: [
      "Drip Fertigation: 2-4 kg per acre per application",
      "Apply at flowering initiation stage",
      "Continue during fruit development phase",
      "Do not exceed recommended dosage",
    ],
  }

  return <ProductPageLayout product={product} />
}
