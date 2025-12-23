import { useState } from "react";
import { Eye } from "lucide-react";

// 👉 Import your uploaded images here
// Rename according to your real filenames!
import weddingImg from "@/assets/gallary/wedding-1.jpg";
import receptionImg from "@/assets/gallary/DSC08202.jpg";
import decorationImg from "@/assets/gallary/entrance.jpg";

import stageImg from "@/assets/gallary/stage area.jpg";
import diningImg from "@/assets/gallary/Dining venue 2.jpg";
import parkingImg from "@/assets/gallary/parking.jpg";
import nightImg from "@/assets/gallary/DSC08159.jpg";
import mandapImg from "@/assets/gallary/mandap.jpg";
import gardenImg from "@/assets/gallary/garden.jpg";

const galleryItems = [
  { id: 1, label: "Wedding Ceremonies", gradient: "from-rose-400 to-rose-600", image: weddingImg },
  { id: 2, label: "Reception Setup", gradient: "from-purple-400 to-purple-600", image: receptionImg },
  { id: 3, label: "Decoration", gradient: "from-pink-400 to-pink-600", image: decorationImg },
  { id: 4, label: "Stage Area", gradient: "from-amber-400 to-amber-600", image: stageImg },
  { id: 5, label: "Dining Space", gradient: "from-rose-500 to-purple-500", image: diningImg },
  { id: 6, label: "Parking", gradient: "from-pink-500 to-rose-500", image: parkingImg },
  { id: 7, label: "Night View", gradient: "from-purple-500 to-pink-500", image: nightImg },
  { id: 8, label: "Mandap", gradient: "from-rose-600 to-pink-600", image: mandapImg },
  { id: 9, label: "Garden Area", gradient: "from-purple-600 to-rose-600", image: gardenImg },
];

const GallerySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-rose-50 via-white to-purple-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-rose-600 font-semibold tracking-wide uppercase text-sm mb-4">
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">
            Our Venue <span className="gradient-text">Gallery</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer hover-lift"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.image}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-black/40 flex flex-col items-center justify-center transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <span className="text-white font-medium text-sm">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
