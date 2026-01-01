import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { siteConfig } from "@/config/siteConfig";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventDate: "",
    eventType: "",
    guestCount: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const eventTypeLabels: Record<string, string> = {
      wedding: "Wedding",
      reception: "Reception",
      engagement: "Engagement",
      birthday: "Birthday",
      corporate: "Corporate Event",
      other: "Other",
    };

    const whatsappMessage = `
🌹 *New Inquiry from Ganjre Lawn Website*  

👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
${formData.email ? `📧 *Email:* ${formData.email}` : ""}
${formData.eventDate ? `📅 *Event Date:* ${formData.eventDate}` : ""}
${formData.eventType ? `🎉 *Event Type:* ${eventTypeLabels[formData.eventType] || formData.eventType}` : ""}
${formData.guestCount ? `👥 *Expected Guests:* ${formData.guestCount}` : ""}
${formData.message ? `💬 *Message:* ${formData.message}` : ""}
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);

    // *** FIXED WHATSAPP NUMBER ***
    const whatsappUrl = `https://wa.me/ 90212 21109?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    toast({
      title: "Opening WhatsApp",
      description: "Your inquiry is being sent via WhatsApp.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: MapPin,
      label: "Address",
      value: siteConfig.address,
      href: "#",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Open 24/7 for events",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: siteConfig.facebookUrl, label: "Facebook" },
    { icon: Instagram, href: siteConfig.instagramUrl, label: "Instagram" },
    { icon: MessageCircle, href: `https://wa.me/${siteConfig.whatsappNumber}`, label: "WhatsApp" },
  ];

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-50 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-rose-600 font-semibold tracking-wide uppercase text-sm mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to book your dream event? Reach out to us and let's make it happen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        
          <div className="bg-white rounded-2xl p-8 shadow-soft border border-rose-100">
            <h3 className="text-2xl font-serif font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="focus-visible:ring-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone *</label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your number"
                    required
                    className="focus-visible:ring-rose-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="focus-visible:ring-rose-500"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Event Date</label>
                  <Input
                    name="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="focus-visible:ring-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Event Type</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="reception">Reception</option>
                    <option value="engagement">Engagement</option>
                    <option value="birthday">Birthday</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Expected Guests</label>
                <Input
                  name="guestCount"
                  type="number"
                  value={formData.guestCount}
                  onChange={handleChange}
                  placeholder="Number of guests"
                  className="focus-visible:ring-rose-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event requirements..."
                  rows={4}
                  className="focus-visible:ring-rose-500 resize-none"
                />
              </div>

              <Button type="submit" variant="gradient" className="w-full">
                <MessageCircle className="w-5 h-5 mr-2" />
                Send Inquiry via WhatsApp
              </Button>
            </form>
          </div>

          <div className="space-y-8">

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-start gap-4 p-4 bg-rose-50/50 rounded-xl hover:bg-rose-50 transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-purple-600 flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden border border-rose-200">
              <iframe
                src={siteConfig.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ganjre Lawn Location"
                className="absolute inset-0"
              />
            </div>

            <div>
              <p className="font-medium mb-4">Follow Us</p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 hover:bg-gradient-to-br hover:from-rose-500 hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
