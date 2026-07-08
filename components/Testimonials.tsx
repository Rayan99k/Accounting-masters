"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Switching to Accounting Masters was the best financial decision for my practice. They handle everything with incredible precision and always make time to answer my questions.",
    name: "Dr. Sarah Jenkins",
    role: "Dental Clinic Owner, Burlington",
  },
  {
    quote: "Their corporate tax strategies saved our startup thousands in our first year. They are professional, proactive, and genuinely care about our growth.",
    name: "Michael Torres",
    role: "Tech Founder",
  },
  {
    quote: "I've worked with many accountants over the years, but the level of personalized service here is unmatched. Real experts who treat you like a priority.",
    name: "Elena Rostova",
    role: "Real Estate Broker",
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">Client Stories</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary">Trusted by the Community</h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 md:p-10 border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <Quote className="text-secondary/20 w-16 h-16 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              
              <p className="text-lg text-primary leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>
              
              <div className="mt-auto border-t border-border pt-6">
                <div className="font-bold text-primary font-serif text-lg">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}