import React from "react";
import Image from "next/image";

const GalleryPage: React.FC = () => {
  const images = [
    "/monitoring.jpeg",
    "/firebots.jpeg",
    "/curve.jpeg",
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Gallery</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="relative w-full h-[600px] overflow-hidden rounded-lg shadow-lg">
  <Image
    src={src}
    alt={`Gallery Image ${index + 1}`}
    fill
    className="object-cover hover:scale-105 transition-transform duration-300"
  />
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
