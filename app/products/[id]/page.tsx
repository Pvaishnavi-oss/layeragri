// app/products/[id]/page.tsx
import { notFound } from "next/navigation"
import ProductPageClient from "./ProductPageClient"

const products = [
  {
    id: "npk-09-54-00-te",
    title: "NPK 09:54:00+TE",
    subtitle: "High Phosphorus Fertilizer",
    description: "NUTRIX NPK 9:54:00+TE is a high-phosphorus fertilizer enriched with trace elements.",
    image: "/assest/09-54-00+TE.jpg",
    packing: "1kg",
    themeColor: "#F97316",
    benefits: ["High phosphorus (54%) for root development", "Enriched with trace elements", "Supports flowering and fruit formation"],
    specifications: [{ label: "Nitrogen (N)", value: "9%" }, { label: "Phosphorus (P2O5)", value: "54%" }],
    crops: ["Vegetables", "Fruits", "Flowers"],
  },
  {
    id: "npk-12-61-00",
    title: "NPK 12-61-00",
    subtitle: "Root Development Specialist",
    description: "High-phosphorus, nitrogen-rich fertilizer with zero potassium.",
    image: "/assest/Potassium schoenite.jpg",
    packing: "1kg",
    themeColor: "#8B5CF6",
    benefits: ["High phosphorus (61%) and nitrogen (12%)", "Zero potassium for specific crops", "Excellent for root development"],
    specifications: [{ label: "Nitrogen (N)", value: "12%" }, { label: "Phosphorus (P2O5)", value: "61%" }],
    crops: ["Tomatoes", "Peppers", "Cucumbers"],
  },
  {
    id: "potassium-schoenite",
    title: "Potassium Schoenite",
    subtitle: "Natural Triple Nutrient Source",
    description: "NUTRIX KMS fertilizer provides potassium, magnesium, and sulfur.",
    image: "/assest/Potassium schoenite.jpg",
    packing: "1kg, 25kg",
    themeColor: "#10B981",
    benefits: ["Provides K, Mg, and S", "100% water-soluble", "Improves plant health"],
    specifications: [{ label: "Potassium (K2O)", value: "22-23%" }, { label: "Magnesium (MgO)", value: "10-11%" }],
    crops: ["Grapes", "Citrus", "Potatoes"],
  },
  {
    id: "jakwar",
    title: "JAKWAR",
    subtitle: "Zinc Source",
    description: "Premium source of zinc for plants.",
    image: "/assest/Potassium schoenite.jpg",
    packing: "As per requirement",
    themeColor: "#6366F1",
    benefits: ["Essential zinc for enzyme function", "Supports growth hormone production"],
    specifications: [{ label: "Zinc (Zn)", value: "21%" }],
    crops: ["Rice", "Wheat", "Maize"],
  },
  {
    id: "silera",
    title: "SILERA",
    subtitle: "Bio-Stimulant Solution",
    description: "Plant-based bio-stimulant with ortho-silicic acid.",
    image: "/assest/Potassium schoenite.jpg",
    packing: "250ml, 500ml",
    themeColor: "#16A34A",
    benefits: ["Improved root development", "Increased nutrient uptake", "Stronger plants"],
    specifications: [{ label: "Silicon Content", value: "2%" }],
    crops: ["All Vegetables", "Fruits"],
  },
  {
    id: "npk-00-52-34",
    title: "NPK 00-52-34",
    subtitle: "Phosphate-Potash Premium",
    description: "Water-soluble fertilizer with high phosphate content.",
    image: "/assest/52-34.jpg",
    packing: "1kg",
    themeColor: "#0891B2",
    benefits: ["High phosphate (52%)", "Optimal potash (34%)", "100% water-soluble"],
    specifications: [{ label: "Phosphorus (P2O5)", value: "52%" }, { label: "Potassium (K2O)", value: "34%" }],
    crops: ["Tomatoes", "Peppers", "Grapes"],
  },
  {
    id: "npk-11-44-11-2-te",
    title: "NPK 11-44-11-2+TE",
    subtitle: "Balanced Growth Formula",
    description: "High phosphorus fertilizer for root growth.",
    image: "/assest/11-44-11-2+TE.jpg",
    packing: "1kg",
    themeColor: "#EC4899",
    benefits: ["High phosphorus (44%)", "Promotes flowering", "Enriched with trace elements"],
    specifications: [{ label: "Nitrogen (N)", value: "11%" }, { label: "Phosphorus (P2O5)", value: "44%" }],
    crops: ["Vegetables", "Fruits"],
  },
  {
    id: "npk-15-15-30-te",
    title: "NPK 15-15-30+TE",
    subtitle: "High Potassium Formula",
    description: "Balanced fertilizer with high potassium.",
    image: "/assest/15-15-30+TE.jpg",
    packing: "1kg",
    themeColor: "#14B8A6",
    benefits: ["High potassium (30%)", "Balanced NPK", "For fruit quality"],
    specifications: [{ label: "Nitrogen (N)", value: "15%" }, { label: "Potassium (K2O)", value: "30%" }],
    crops: ["Fruits", "Vegetables"],
  },
  {
    id: "npk-14-48-00-te",
    title: "NPK 14-48-00+TE",
    subtitle: "High Phosphorus Formula",
    description: "High-phosphorus, nitrogen-rich fertilizer.",
    image: "/assest/14-48-00+TE.jpg",
    packing: "1kg",
    themeColor: "#DC2626",
    benefits: ["High phosphorus (48%)", "Promotes flowering", "For root establishment"],
    specifications: [{ label: "Nitrogen (N)", value: "14%" }, { label: "Phosphorus (P2O5)", value: "48%" }],
    crops: ["Vegetables", "Fruits", "Flowers"],
  },
  {
    id: "npk-16-08-32-2-te",
    title: "NPK 16-08-32-2+TE",
    subtitle: "Suspension Fertilizer",
    description: "Solution-based suspension fertilizer.",
    image: "/assest/18-08-32+2+TE.jpg",
    packing: "1kg",
    themeColor: "#3B82F6",
    benefits: ["Unique solution-based formula", "High potassium (32%)", "Rapid absorption"],
    specifications: [{ label: "Nitrogen (N)", value: "16%" }, { label: "Potassium (K2O)", value: "32%" }],
    crops: ["Tomatoes", "Peppers", "Grapes"],
  },
  {
    id: "npk-13-40-13",
    title: "NPK 13-40-13",
    subtitle: "Multi-Stage Growth Formula",
    description: "Contains nitrogen for various crop growth stages.",
    image: "/assest/Potassium schoenite.jpg",
    packing: "1kg",
    themeColor: "#14B8A6",
    benefits: ["Nitrogen for gradual release", "Supports vegetative growth", "100% soluble"],
    specifications: [{ label: "Nitrogen (N)", value: "13%" }, { label: "Phosphorus (P2O5)", value: "40%" }],
    crops: ["Tomatoes", "Chilies", "Grapes"],
  },
  {
    id: "npk-17-44-00",
    title: "NPK 17-44-00",
    subtitle: "Urea Phosphate Formula",
    description: "Water-soluble fertilizer containing N & P.",
    image: "/assest/17-44.jpg",
    packing: "1kg",
    themeColor: "#6366F1",
    benefits: ["17% nitrogen and 44% phosphorus", "Zero potassium", "100% water-soluble"],
    specifications: [{ label: "Nitrogen (N)", value: "17%" }, { label: "Phosphorus (P2O5)", value: "44%" }],
    crops: ["Vegetables", "Fruits", "Flowers"],
  },
  {
    id: "mycon-df",
    title: "Mycon-DF",
    subtitle: "Drip Fertigation Specialist",
    description: "Recommended for drip fertigation for horticultural crops.",
    image: "/assest/Potassium schoenite.jpg",
    packing: "1kg",
    themeColor: "#EA580C",
    benefits: ["For drip fertigation", "Supports flowering", "Enhances nutrient uptake"],
    specifications: [{ label: "Application", value: "Drip Fertigation" }],
    crops: ["Tomatoes", "Peppers", "Cucumbers"],
  },
]

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }))
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params
  const product = products.find((p) => p.id === id)
  if (!product) return notFound()

  return <ProductPageClient product={product} />
}
