import { useState } from "react";
import { Eye } from "lucide-react";

const GallerySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const galleryItems = [
    { emoji: "💒", label: "Wedding Ceremonies", gradient: "from-rose-400 to-rose-600" },
    { emoji: "🎊", label: "Reception Setup", gradient: "from-purple-400 to-purple-600" },
    { emoji: "💐", label: "Decoration", gradient: "from-pink-400 to-pink-600" },
    { emoji: "✨", label: "Stage Area", gradient: "from-amber-400 to-amber-600" },
    { emoji: "🎉", label: "Dining Space", gradient: "from-rose-500 to-purple-500" },
    { emoji: "🌸", label: "Parking", gradient: "from-pink-500 to-rose-500" },
    { emoji: "💕", label: "Night View", gradient: "from-purple-500 to-pink-500" },
    { emoji: "🎭", label: "Mandap", gradient: "from-rose-600 to-pink-600" },
    { emoji: "🎪", label: "Garden Area", gradient: "from-purple-600 to-rose-600" },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-rose-50 via-white to-purple-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-rose-600 font-semibold tracking-wide uppercase text-sm mb-4">
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">
            Our Venue{" "}
            <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore the beauty and elegance of Ganjre Lawn through our venue showcase.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <div
              key={item.label}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer hover-lift"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-500 group-hover:scale-110`}
              />

              {/* Emoji Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-6xl sm:text-7xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-12"
                  style={{
                    filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.2))",
                  }}
                >
                  {item.emoji}
                </span>
              </div>

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-black/40 flex flex-col items-center justify-center transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Eye className="w-10 h-10 text-white mb-2" />
                <span className="text-white font-semibold text-lg">{item.label}</span>
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <span className="text-white font-medium text-sm">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View More Note */}
        <p className="text-center text-muted-foreground mt-12">
          Visit us to experience the full beauty of our venue in person.
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
