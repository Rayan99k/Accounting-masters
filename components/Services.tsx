"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Personal Tax Returns",
    description:
      "We prepare and file personal tax returns for employees, self-employed individuals, and those with rental income, investment income, or foreign assets. We review prior years on request and handle CRA correspondence if issues come up.",
  },
  {
    title: "Corporate Tax",
    description:
      "Year-end corporate tax returns, tax planning, and CRA compliance for owner-managed businesses and professional corporations. We look for deductions and credits that are commonly missed and help structure your affairs in a way that makes sense long-term.",
  },
  {
    title: "Bookkeeping & Financial Statements",
    description:
      "Monthly, quarterly, or annual bookkeeping depending on your needs. We also prepare year-end financial statements that give you an accurate picture of how your business is doing — and that meet CRA and lender requirements.",
  },
  {
    title: "Payroll",
    description:
      "We handle payroll processing, remittances to CRA, T4 preparation, and year-end filings. Whether you have one employee or a small team, we make sure payroll is done correctly and on time.",
  },
  {
    title: "Incorporated Medical Professionals",
    description:
      "We offer a full-service package for physicians, dentists, and other incorporated health professionals — including corporate and personal tax returns, financial statements, and ongoing tax planning tailored to the specifics of medical practice income.",
  },
  {
    title: "Accounting & Financial Advisory",
    description:
      "If you're starting a business, dealing with a CRA audit, planning a major financial decision, or just need a second opinion on your numbers, we're available to help you think it through.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Services</h3>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We provide accounting and tax services for individuals, small
              businesses, and professional corporations. Below is an overview of
              what we handle — if you don't see what you're looking for, reach
              out and we'll let you know if we can help.
            </p>
          </motion.div>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => {
            const num = (index + 1).toString().padStart(2, "0");
            return (
              <motion.div
                key={index}
                className="group relative flex flex-col md:flex-row gap-8 md:gap-16 border-l-4 border-transparent hover:border-secondary pl-6 md:pl-10 py-4 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute -left-4 md:-left-8 top-0 text-8xl md:text-[130px] font-serif font-bold text-secondary/5 -z-10 leading-none select-none pointer-events-none transition-opacity group-hover:text-secondary/10">
                  {num}
                </div>

                <div className="md:w-1/3 flex items-start pt-1">
                  <h4 className="text-xl md:text-2xl font-bold font-serif text-primary">{service.title}</h4>
                </div>

                <div className="md:w-2/3 flex flex-col justify-center">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <div
                    className="inline-flex items-center text-sm font-bold text-secondary uppercase tracking-wider cursor-pointer group/link w-fit"
                    onClick={() =>
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Ask about this service
                    <ChevronRight size={16} className="ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div
        className="mt-32 w-full bg-primary text-white py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto text-center max-w-3xl">
          <h4 className="text-3xl md:text-4xl font-serif font-bold mb-5">Not sure where to start?</h4>
          <p className="text-white/70 text-lg mb-10 font-light">
            Send us a message and describe your situation. We'll review it and
            get back to you within one business day.
          </p>
          <Button
            size="lg"
            data-testid="button-contact-services"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-secondary hover:bg-white text-primary hover:text-primary font-bold text-lg px-10 py-6 h-auto"
          >
            Contact Us
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
