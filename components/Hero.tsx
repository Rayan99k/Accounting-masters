"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const titleWords = "Clarity in numbers.".split(" ");

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden bg-primary">
      {/* LEFT HALF */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-24 relative z-20">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 40 }}
            transition={{ duration: 0.8 }}
            className="w-[2px] bg-secondary mb-6"
          />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 bg-secondary/10 text-secondary text-sm font-bold tracking-wider uppercase mb-8">
              Burlington, Ontario
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white leading-[1.1] mb-6 flex flex-wrap gap-x-4">
            {titleWords.map((word, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              className="text-secondary italic w-full mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + titleWords.length * 0.1 }}
            >
              Confidence in business.
            </motion.span>
          </h1>

          <motion.p
            className="text-lg md:text-xl text-white/70 mb-12 max-w-lg leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Accounting Masters Group provides full-service accounting and tax
            services for individuals, small businesses, and corporations across
            the Burlington area.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              size="lg"
              data-testid="button-contact-hero"
              className="bg-secondary hover:bg-white text-primary hover:text-primary font-bold rounded-md text-lg px-8 py-6 h-auto transition-all"
              onClick={scrollToContact}
            >
              Get in Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              data-testid="button-services-hero"
              className="border-white/20 text-white hover:bg-white hover:text-primary rounded-md text-lg px-8 py-6 h-auto transition-all"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Our Services
            </Button>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          className="absolute bottom-12 left-6 md:left-12 lg:left-24 flex items-center gap-6 text-white/50 text-xs font-bold uppercase tracking-[0.2em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <span>CPA Designated</span>
          <span className="w-1 h-1 rounded-full bg-secondary/50" />
          <span>Burlington, ON</span>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 right-12 text-secondary"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>

      {/* RIGHT HALF */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative">
        <Image
          src="/hero.jpg"
          alt="Accounting Masters Group office"
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
      </div>
    </section>
  );
}
