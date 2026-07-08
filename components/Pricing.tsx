"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const personalPlans = [
  {
    title: "Basic Personal Return",
    price: "$75",
    period: "per return",
    description: "For individuals with employment income, RRSP contributions, and standard deductions.",
    includes: [
      "T4 income (employment)",
      "RRSP / TFSA contributions",
      "Basic credits and deductions",
      "E-filing with CRA",
    ],
  },
  {
    title: "Personal with Rental Income",
    price: "$150",
    period: "per return",
    description: "For individuals who also earned rental income during the tax year.",
    includes: [
      "Everything in Basic",
      "Rental income (T776)",
      "Rental expense deductions",
      "Capital cost allowance (CCA)",
    ],
    highlight: true,
  },
  {
    title: "Self-Employment",
    price: "$200",
    period: "starting fee",
    description: "For sole proprietors and freelancers. Final fee depends on volume and complexity.",
    includes: [
      "Everything in Basic",
      "Business income (T2125)",
      "Business expense review",
      "HST / GST summary if applicable",
    ],
  },
];

const corporatePlans = [
  {
    title: "Monthly Bookkeeping",
    price: "$350",
    period: "per month",
    description: "Ongoing bookkeeping to keep your records clean, current, and CRA-ready.",
    includes: [
      "Transaction coding and reconciliation",
      "Monthly financial summary",
      "GST / HST tracking",
      "Year-end ready records",
    ],
  },
  {
    title: "Year-End Corporate Tax (T2)",
    price: "$1,000",
    period: "starting fee",
    description: "Corporate tax return preparation and filing for owner-managed businesses.",
    includes: [
      "T2 corporate return preparation",
      "Schedule 50, 100, 125, 141",
      "E-filing with CRA",
      "Tax planning review included",
    ],
    highlight: true,
  },
  {
    title: "Notice to Reader",
    price: "$1,000",
    period: "starting fee",
    description: "Compilation engagement financial statements for your corporation.",
    includes: [
      "Balance sheet and income statement",
      "Statement of retained earnings",
      "NTR report and notes",
      "Suitable for bank or third-party use",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function PricingCard({
  title,
  price,
  period,
  description,
  includes,
  highlight = false,
}: {
  title: string;
  price: string;
  period: string;
  description: string;
  includes: string[];
  highlight?: boolean;
}) {
  return (
    <motion.div
      variants={cardVariants}
      className={`relative flex flex-col rounded-sm border p-8 ${
        highlight
          ? "bg-primary text-white border-primary shadow-2xl"
          : "bg-white text-foreground border-border shadow-sm"
      }`}
    >
      {highlight && (
        <div className="absolute -top-3 left-8">
          <span className="bg-secondary text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Most Common
          </span>
        </div>
      )}

      <div className="mb-6">
        <h4 className={`text-lg font-bold font-serif mb-2 ${highlight ? "text-white" : "text-primary"}`}>
          {title}
        </h4>
        <p className={`text-sm leading-relaxed ${highlight ? "text-white/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      </div>

      <div className="mb-8">
        <span className={`text-5xl font-serif font-bold ${highlight ? "text-secondary" : "text-primary"}`}>
          {price}
        </span>
        <span className={`text-sm ml-2 ${highlight ? "text-white/60" : "text-muted-foreground"}`}>
          {period}
        </span>
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {includes.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check
              size={16}
              className={`mt-0.5 shrink-0 ${highlight ? "text-secondary" : "text-secondary"}`}
            />
            <span className={`text-sm ${highlight ? "text-white/80" : "text-muted-foreground"}`}>
              {item}
            </span>
          </li>
        ))}
      </ul>

      <Button
        onClick={() =>
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
        }
        data-testid={`button-pricing-${title.toLowerCase().replace(/\s+/g, "-")}`}
        className={
          highlight
            ? "w-full bg-secondary hover:bg-white text-primary font-bold rounded-sm"
            : "w-full bg-primary hover:bg-secondary text-white font-bold rounded-sm"
        }
      >
        Get Started
      </Button>
    </motion.div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-zinc-50 relative">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">Fee Schedule</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Transparent pricing.
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Prices listed are starting fees. The final fee for more complex
            situations — higher transaction volumes, multiple income sources, or
            additional schedules — will be confirmed before any work begins.
            There are no surprise charges.
          </p>
        </motion.div>

        {/* Personal Tax */}
        <div className="mb-20">
          <motion.div
            className="flex items-center gap-4 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-serif font-bold text-primary">Individual &amp; Personal Tax</h3>
            <div className="flex-1 h-px bg-border" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {personalPlans.map((plan) => (
              <PricingCard key={plan.title} {...plan} />
            ))}
          </motion.div>
        </div>

        {/* Corporate */}
        <div className="mb-16">
          <motion.div
            className="flex items-center gap-4 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-serif font-bold text-primary">Corporate &amp; Business Services</h3>
            <div className="flex-1 h-px bg-border" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {corporatePlans.map((plan) => (
              <PricingCard key={plan.title} {...plan} />
            ))}
          </motion.div>
        </div>

        {/* Important Deadlines */}
        <motion.div
          className="bg-white border border-border rounded-sm p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-xl font-serif font-bold text-primary mb-8">Important Deadlines</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h5 className="text-sm font-bold uppercase tracking-wider text-secondary mb-4">Personal Tax</h5>
              <ul className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="font-semibold text-primary w-32 shrink-0">April 30</span>
                  <span>Filing deadline for individuals with employment income only. Any balance owing is due this date.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary w-32 shrink-0">June 15</span>
                  <span>Extended filing deadline for self-employed individuals. However, any taxes owed are still due April 30.</span>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-bold uppercase tracking-wider text-secondary mb-4">Corporate Tax</h5>
              <ul className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="font-semibold text-primary w-32 shrink-0">6 months</span>
                  <span>After fiscal year-end to file the T2 corporate return.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary w-32 shrink-0">3 months</span>
                  <span>After fiscal year-end to pay any balance owing (for eligible CCPCs with a perfect compliance record).</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
            <p className="text-muted-foreground text-sm max-w-xl">
              Not sure which service applies to your situation? Send us a message
              and we'll point you in the right direction — no charge for the initial
              conversation.
            </p>
            <Button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              data-testid="button-pricing-cta"
              className="shrink-0 bg-primary hover:bg-secondary text-white font-bold px-8 rounded-sm"
            >
              Free Consultation
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
