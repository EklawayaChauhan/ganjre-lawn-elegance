import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const PackagesSection = () => {
  const packages = [
    {
      name: "Silver",
      price: "₹40,000",
      popular: false,
      features: [
        "Venue for 12 hours",
        "Basic decoration",
        "Capacity for 500+ guests",
        "Parking space",
        "Stage setup",
        "Sound system",
        "Washroom facilities",
      ],
      borderColor: "border-rose-200",
      buttonVariant: "outline" as const,
    },
    {
      name: "Gold",
      price: "₹85,000",
      popular: true,
      features: [
        "Venue for 12 hours",
        "Premium decoration",
        "Capacity for 500+ guests",
        "Catering support",
        "Stage & mandap setup",
        "DJ & Sound system",
        "Valet parking",
        "Green rooms",
      ],
      borderColor: "border-transparent",
      buttonVariant: "gradient" as const,
    },
    {
      name: "Platinum",
      price: "₹1,50,000",
      popular: false,
      features: [
        "Venue for 12 hours",
        "Luxury decoration",
        "capacity for 500+ guests",
        "Full catering included",
        "DJ & Professional sound",
        "Photography area setup",
        "Premium lighting",
        
      ],
      borderColor: "border-purple-200",
      buttonVariant: "outline" as const,
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="packages" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-rose-50 rounded-full blur-3xl opacity-60 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-50 rounded-full blur-3xl opacity-60 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-rose-600 font-semibold tracking-wide uppercase text-sm mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">
            Choose Your{" "}
            <span className="gradient-text">Perfect Package</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Flexible packages designed to match every celebration and budget.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative bg-white rounded-2xl p-8 transition-all duration-500 hover-lift ${
                pkg.popular
                  ? "border-2 border-transparent shadow-large lg:scale-105 z-10"
                  : `border-2 ${pkg.borderColor} shadow-soft`
              }`}
              style={{
                backgroundImage: pkg.popular
                  ? "linear-gradient(white, white), linear-gradient(to right, #F43F5E, #9333EA)"
                  : "none",
                backgroundOrigin: "border-box",
                backgroundClip: pkg.popular ? "padding-box, border-box" : "border-box",
              }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full shadow-lg animate-pulse-soft">
                    <Star className="w-4 h-4 text-white fill-white" />
                    <span className="text-xs font-bold text-white uppercase tracking-wide">
                      Most Popular
                    </span>
                  </div>
                </div>
              )}

              {/* Package Header */}
              <div className="text-center mb-8 pt-4">
                <h3 className="text-2xl font-serif font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold gradient-text">{pkg.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">per event</p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-rose-500 to-purple-600 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={pkg.buttonVariant}
                className="w-full"
                onClick={scrollToContact}
              >
                Select {pkg.name}
              </Button>
            </div>
          ))}
        </div>

        {/* Custom Package Note */}
        <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
          Need a custom package? <a href="#contact" className="text-rose-600 font-semibold hover:underline">Contact us</a> to discuss your specific requirements.
        </p>
      </div>
    </section>
  );
};

export default PackagesSection;
