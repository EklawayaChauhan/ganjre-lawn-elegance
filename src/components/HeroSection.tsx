import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const floatingHearts = [
    { delay: "0s", duration: "3s", left: "10%", top: "20%" },
    { delay: "0.5s", duration: "4s", left: "85%", top: "15%" },
    { delay: "1s", duration: "3.5s", left: "75%", top: "60%" },
    { delay: "1.5s", duration: "4.5s", left: "15%", top: "70%" },
    { delay: "2s", duration: "3s", left: "50%", top: "10%" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Hearts */}
        {floatingHearts.map((heart, index) => (
          <Heart
            key={index}
            className="absolute text-rose-300/40 fill-rose-300/30 animate-float-slow"
            style={{
              left: heart.left,
              top: heart.top,
              animationDelay: heart.delay,
              animationDuration: heart.duration,
              width: `${20 + index * 8}px`,
              height: `${20 + index * 8}px`,
            }}
          />
        ))}

        {/* Sparkles */}
        <Sparkles
          className="absolute top-1/4 right-1/4 text-purple-300/50 animate-pulse-soft"
          style={{ width: "32px", height: "32px" }}
        />
        <Sparkles
          className="absolute bottom-1/3 left-1/4 text-pink-300/50 animate-pulse-soft animation-delay-500"
          style={{ width: "24px", height: "24px" }}
        />

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-100/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-rose-100 shadow-soft mb-8 animate-fade-in">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span className="text-sm font-medium text-rose-600">
              Your Dream Wedding Destination
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 animate-fade-in-up">
            Make Your{" "}
            <span className="gradient-text inline-block animate-float" style={{ animationDuration: "6s" }}>
              Dream Wedding
            </span>
            <br />
            Come True
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
            Experience the perfect blend of elegance and tradition at Ganjre Lawn.
            Your celebration, our passion.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Button
              variant="hero"
              onClick={() => scrollToSection("#contact")}
              className="group"
            >
              <Heart className="w-5 h-5 group-hover:animate-pulse-soft" />
              Book Now
            </Button>
            <Button
              variant="hero-outline"
              onClick={() => scrollToSection("#packages")}
            >
              View Packages
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-6 mt-12 animate-fade-in animation-delay-500">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-purple-500 border-2 border-white shadow-soft"
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">1000+</strong> Happy Couples
              </span>
            </div>
            <div className="h-6 w-px bg-rose-200" />
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="text-amber-500 text-lg">★</span>
              ))}
              <span className="text-sm text-muted-foreground ml-1">5.0 Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
