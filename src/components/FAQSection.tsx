import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I book Ganjre Lawn?",
      answer:
        "You can book Ganjre Lawn by contacting us through phone, email, or by filling out the contact form on our website. Our team will get back to you within 24 hours to discuss availability and requirements.",
    },
    {
      question: "What is the advance payment required?",
      answer:
        "We require a 30% advance payment to confirm your booking. The remaining amount can be paid in installments or before the event date as per our flexible payment terms.",
    },
    {
      question: "Can we bring our own caterer?",
      answer:
        "Yes, you are welcome to bring your own caterer. We provide kitchen facilities and coordination support. However, we also offer in-house catering partnerships if you prefer a hassle-free experience.",
    },
    {
      question: "Is parking available?",
      answer:
        "Yes, we have ample parking space for 100+ vehicles. For premium packages, we also offer valet parking services to ensure a smooth experience for your guests.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "Our cancellation policy is flexible. Cancellations made 30 days before the event receive a full refund minus processing fees. For cancellations within 30 days, partial refunds are provided based on the timeline.",
    },
    {
      question: "Do you provide decoration?",
      answer:
        "Yes, we offer multiple decoration packages from basic to luxury. Our Silver package includes basic decoration, while Gold and Platinum packages include premium and luxury decoration respectively.",
    },
    {
      question: "Is there a backup for power?",
      answer:
        "Absolutely! We have a fully automatic generator backup system that ensures uninterrupted power supply throughout your event. Your celebration will never be affected by power outages.",
    },
    {
      question: "Can we have a sangeet night?",
      answer:
        "Yes, we welcome sangeet nights and other pre-wedding celebrations! We provide DJ facilities, dance floor setup, and appropriate lighting to make your sangeet night memorable.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-rose-50/50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-100 rounded-full blur-3xl opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-rose-600 font-semibold tracking-wide uppercase text-sm mb-4">
            FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our venue and services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-rose-100 shadow-soft px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-serif font-semibold text-lg py-5 hover:no-underline hover:text-rose-600 transition-colors [&[data-state=open]>svg]:rotate-180 [&>svg]:transition-transform [&>svg]:duration-300 [&>svg]:text-rose-500">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
