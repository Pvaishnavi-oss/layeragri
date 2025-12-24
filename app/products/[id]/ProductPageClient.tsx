"use client"

import ProductPageLayout from "@/app/components/ProductPageLayout"

interface ProductData {
  id: string
  title: string
  subtitle?: string
  description: string
  image: string
  packing: string
  themeColor?: string
  benefits?: string[]
  specifications?: { label: string; value: string }[]
  crops?: string[]
  applicationMethod?: string[]
}

interface Props {
  product: ProductData
}

export default function ProductPageClient({ product }: Props) {
  const productForLayout = {
    title: product.title,
    subtitle: product.subtitle || "Premium Fertilizer",
    description: product.description,
    image: product.image,
    secondaryImage: product.image,
    packing: product.packing,
    themeColor: product.themeColor || "#22c55e",
    benefits: product.benefits || [
      "High-quality formulation for optimal plant nutrition",
      "Water-soluble for efficient nutrient uptake",
      "Supports healthy plant growth and development",
      "Improves crop yields and quality",
    ],
    specifications: product.specifications,
    crops: product.crops,
    applicationMethod: product.applicationMethod || [
      "Drip Irrigation: 2-4 kg per acre",
      "Foliar Spray: 3-5 grams per liter of water",
      "Apply during active growth stages",
    ],
  }

  return <ProductPageLayout product={productForLayout} />
}
