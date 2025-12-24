"use client"

import ProductPageLayout from "@/app/components/ProductPageLayout"

export default function PotassiumSchoenitePage() {
  const product = {
    title: "Potassium Schoenite",
    subtitle: "Natural Triple Nutrient Source",
    description:
      "NUTRIX KMS fertilizer, or Potassium Magnesium Sulfate, is a natural, water-soluble fertilizer that provides plants with essential nutrients like potassium, magnesium, and sulfur, promoting healthy growth, especially in soils deficient in these elements.",
    image: "/assest/Potassium schoenite.jpg",
    secondaryImage: "/assest/Potassium schoenite.jpg",
    packing: "1kg, 25kg",
    themeColor: "#10B981",
    benefits: [
      "Provides three essential nutrients: Potassium, Magnesium, and Sulfur",
      "100% water-soluble and easily absorbed by plants",
      "Improves plant health and corrects soil deficiencies",
      "Promotes strong growth and significantly higher yields",
      "Chloride-free - safe for chloride-sensitive crops",
      "Enhances fruit quality, color, and taste",
    ],
    specifications: [
      { label: "Potassium (K2O)", value: "22-23%" },
      { label: "Magnesium (MgO)", value: "10-11%" },
      { label: "Sulfur (S)", value: "21-22%" },
      { label: "Chloride", value: "< 2.5%" },
      { label: "Solubility", value: "100% Water Soluble" },
    ],
    crops: [
      "Grapes",
      "Citrus",
      "Potatoes",
      "Tobacco",
      "Tea",
      "Coffee",
      "Vegetables",
    ],
    applicationMethod: [
      "Soil Application: 25-50 kg per acre",
      "Drip Irrigation: 5-10 kg per acre per application",
      "Foliar Spray: 5-10 grams per liter of water",
      "Apply during fruit development and maturity stages",
    ],
  }

  return <ProductPageLayout product={product} />
}
