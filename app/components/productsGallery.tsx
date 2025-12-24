"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

type Product = {
  id: string
  title: string
  image?: string
}

const products: Product[] = [
  { id: "npk-09-54-00-te", title: "NPK 09:54:00+TE", image: "/assest/09-54-00+TE.jpg" },
  { id: "npk-12-61-00", title: "NPK 12-61-00", image: "/assest/Potassium schoenite.jpg" },
  { id: "potassium-schoenite", title: "Potassium Schoenite", image: "/assest/Potassium schoenite.jpg" },
  { id: "jakwar", title: "JAKWAR", image: "/assest/Potassium schoenite.jpg" },
  { id: "silera", title: "SILERA", image: "/assest/Potassium schoenite.jpg" },
  { id: "npk-00-52-34", title: "NPK 00-52-34", image: "/assest/52-34.jpg" },
  { id: "npk-11-44-11-2-te", title: "NPK 11-44-11-2+TE", image: "/assest/11-44-11-2+TE.jpg" },
  { id: "npk-15-15-30-te", title: "NPK 15-15-30+TE", image: "/assest/15-15-30+TE.jpg" },
  { id: "npk-14-48-00-te", title: "NPK 14-48-00+TE", image: "/assest/14-48-00+TE.jpg" },
  { id: "npk-16-08-32-2-te", title: "NPK 16-08-32-2+TE", image: "/assest/18-08-32+2+TE.jpg" },
  { id: "npk-13-40-13", title: "NPK 13-40-13", image: "/assest/Potassium schoenite.jpg" },
  { id: "npk-17-44-00", title: "NPK 17-44-00", image: "/assest/17-44.jpg" },
  { id: "mycon-df", title: "Mycon-DF", image: "/assest/Potassium schoenite.jpg" },
]

interface ProductsGalleryProps {
  variant?: "mobile" | "desktop"
}

export default function ProductsGallery({ variant }: ProductsGalleryProps) {
  // Mobile vertical grid layout
  if (variant === "mobile") {
    return (
      <div className="grid grid-cols-2 gap-3">
        {products.map((p, index) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Link
              href={`/products/${p.id}`}
              className="block glass rounded-xl p-3 hover:scale-[1.02] transition-transform"
            >
              <div className="w-full h-28 bg-white/10 rounded-lg mb-2 overflow-hidden flex items-center justify-center">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={200}
                    height={112}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-white/40 text-sm">No image</div>
                )}
              </div>
              <h4 className="text-sm font-semibold text-white text-center truncate">{p.title}</h4>
            </Link>
          </motion.div>
        ))}
      </div>
    )
  }

  // Desktop horizontal scroll layout (default)
  return (
    <div className="flex gap-4 items-start pb-2">
      {products.map((p) => (
        <Link
          key={p.id}
          href={`/products/${p.id}`}
          className="min-w-[220px] flex-shrink-0 glass rounded-xl p-4 hover:scale-[1.02] transition-transform"
        >
          <div className="w-full h-40 bg-white/10 rounded-lg mb-3 overflow-hidden flex items-center justify-center">
            {p.image ? (
              <Image
                src={p.image}
                alt={p.title}
                width={300}
                height={160}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-white/40">No image</div>
            )}
          </div>
          <h4 className="text-lg font-semibold text-white text-center">{p.title}</h4>
        </Link>
      ))}
    </div>
  )
}
