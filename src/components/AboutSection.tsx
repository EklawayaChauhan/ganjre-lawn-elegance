import { Users, CalendarDays, PartyPopper, Star } from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Guest Capacity",
      gradient: "from-rose-500 to-rose-600",
    },
    {
      icon: CalendarDays,
      value: "15+",
      label: "Years Experience",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: PartyPopper,
      value: "1000+",
      label: "Happy Events",
      gradient: "from-pink-500 to-pink-600",
    },
    {
      icon: Star,
      value: "5-Star",
      label: "Rating",
      gradient: "from-amber-500 to-amber-600",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-rose-600 font-semibold tracking-wide uppercase text-sm mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">
            Welcome to{" "}
            <span className="gradient-text">Ganjre Lawn</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nestled in the heart of the city, Ganjre Lawn, established in 2007 and owned by Mr. Avinash Arunrao Ganjre, offers a breathtaking venue for your most cherished celebrations. With lush green spaces, elegant amenities, and a dedicated team, we transform your vision into reality.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative bg-white rounded-2xl p-6 text-center border border-rose-100 shadow-soft hover-lift cursor-default"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10 transition-colors duration-500">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stat.gradient} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-1 group-hover:text-white transition-colors duration-300">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground text-sm font-medium group-hover:text-white/80 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
