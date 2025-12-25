import { CheckCircle2, Utensils, Sparkles } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: CheckCircle2,
      title: "Essential Services",
      color: "rose",
      items: [
        "Venue rental (6-12 hours)",
        "capacity (100-500+ guests)",
        "Parking facility for 100+ vehicles",
        "Basic decoration setup",
        "Stage & mandap setup",
        "Sound system with microphone",
        "Electricity & generator backup",
        "Washroom facilities",
        "Green rooms for bride/groom",
        "Event staff assistance",
      ],
    },
    {
      icon: Utensils,
      title: "Catering & Setup",
      color: "purple",
      items: [
        "Kitchen facility",
        "Serving staff coordination",
        "Buffet/dining area setup",
        "Crockery and cutlery",
        "Water dispensers",
        "Table arrangements",
        "Chair covers and sashes",
        "Red carpet walkway",
      ],
    },
    {
      icon: Sparkles,
      title: "Premium Add-ons",
      color: "pink",
      items: [
        "Premium decoration packages",
        "DJ & entertainment system",
        "Full catering service",
        "Photography packages",
        "Videography service",
        "Custom lighting (fairy, LED)",
        "Makeup artist room",
        "Valet parking service",
        
      ],
    },
  ];

  const getGradient = (color: string) => {
    switch (color) {
      case "rose":
        return "from-rose-500 to-rose-600";
      case "purple":
        return "from-purple-500 to-purple-600";
      case "pink":
        return "from-pink-500 to-pink-600";
      default:
        return "from-rose-500 to-rose-600";
    }
  };

  const getHoverBg = (color: string) => {
    switch (color) {
      case "rose":
        return "group-hover:bg-rose-50";
      case "purple":
        return "group-hover:bg-purple-50";
      case "pink":
        return "group-hover:bg-pink-50";
      default:
        return "group-hover:bg-rose-50";
    }
  };

  return (
    <section id="services" className="py-20 bg-rose-50/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F43F5E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-rose-600 font-semibold tracking-wide uppercase text-sm mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">
            Our{" "}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From essential amenities to premium experiences, we have everything to make
            your celebration unforgettable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-white rounded-2xl p-8 shadow-soft hover-lift transition-all duration-500 ${getHoverBg(service.color)}`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${getGradient(service.color)} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif font-bold mb-4">{service.title}</h3>

              {/* Items List */}
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 text-${service.color}-500`} />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
