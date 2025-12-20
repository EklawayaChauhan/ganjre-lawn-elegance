import { useState } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://wa.me/919272044485?text=Hello!%20I'm%20interested%20in%20booking%20Ganjre%20Lawn%20for%20my%20event."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip */}
      <div
        className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap transition-all duration-300 ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        <span className="text-sm font-medium text-foreground">Book Now</span>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-white rotate-45" />
      </div>

      {/* Button */}
      <div className="relative">
        {/* Pulse Ring */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
        <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-40" />

        {/* Main Button */}
        <div className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-green-600 transition-all duration-300 hover:scale-110">
          <MessageCircle className="w-7 h-7 text-white fill-white" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
