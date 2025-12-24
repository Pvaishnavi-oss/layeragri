"use client"

import ProductPageLayout from "@/app/components/ProductPageLayout"

export default function NPK126100Page() {
  const product = {
    title: "NPK 12-61-00",
    subtitle: "Root Development Specialist",
    description:
      "Utrifix 12-61-00 is a high-phosphorus, nitrogen-rich fertilizer with zero potassium, mainly used for root development, early growth stages, and flowering. It is fully water-soluble, making it ideal for drip irrigation, foliar spray, and hydroponics.",
    image: "/assest/Potassium schoenite.jpg",
    secondaryImage: "/assest/Potassium schoenite.jpg",
    packing: "1kg",
    themeColor: "#8B5CF6",
    benefits: [
      "High phosphorus (61%) and nitrogen (12%) content for vigorous growth",
      "Zero potassium - ideal for specific crop nutrition requirements",
      "Excellent for root development and early growth stages",
      "Promotes flowering and better yield formation",
      "Fully water-soluble for efficient nutrient delivery",
      "Suitable for drip irrigation, foliar spray, and hydroponics",
    ],
    specifications: [
      { label: "Nitrogen (N)", value: "12%" },
      { label: "Phosphorus (P2O5)", value: "61%" },
      { label: "Potassium (K2O)", value: "0%" },
      { label: "Form", value: "Crystalline Powder" },
      { label: "Solubility", value: "100% Water Soluble" },
    ],
    crops: [
      "Tomatoes",
      "Peppers",
      "Cucumbers",
      "Strawberries",
      "Roses",
      "Ornamentals",
    ],
    applicationMethod: [
      "Drip Irrigation: 2-4 kg per acre",
      "Foliar Application: 2-3 grams per liter of water",
      "Hydroponics: As per nutrient solution requirements",
      "Apply during transplanting and early vegetative stage",
    ],
  }

  return <ProductPageLayout product={product} />
}
