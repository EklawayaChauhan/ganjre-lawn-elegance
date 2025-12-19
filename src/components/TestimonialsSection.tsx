import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Ganjre Lawn made our wedding day absolutely perfect! The staff was helpful and the venue was beautifully decorated. Highly recommended!",
      name: "Priya & Rahul Sharma",
      event: "Wedding - December 2024",
      rating: 5,
    },
    {
      quote:
        "Amazing venue with great facilities. Our reception was a grand success with 400+ guests. Professional service from start to finish.",
      name: "Anjali Patel",
      event: "Reception - November 2024",
      rating: 5,
    },
    {
      quote:
        "Perfect location, beautiful ambiance, and excellent coordination. Our anniversary celebration was memorable. Thank you Ganjre Lawn!",
      name: "Vikram & Neha Desai",
      event: "Anniversary - October 2024",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-rose-50 rounded-full blur-3xl opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-rose-600 font-semibold tracking-wide uppercase text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">
            What Our{" "}
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it - hear from the families who celebrated with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 transition-all duration-500 hover-lift hover:rotate-1"
              style={{
                backgroundImage:
                  "linear-gradient(white, white), linear-gradient(135deg, #F43F5E, #9333EA)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                border: "2px solid transparent",
              }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-rose-200 mb-4" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-500 fill-amber-500"
                  />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="border-t border-rose-100 pt-4">
                <p className="font-serif font-bold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">{testimonial.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
