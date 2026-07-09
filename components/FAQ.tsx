"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What documents do I need to bring for my tax return?",
    a: "For a basic personal return, bring your T4 slips (from employers), RRSP contribution receipts, and your notice of assessment from last year if you have it. If you have rental income, bring your rental income and expense records. Self-employed? Bring a summary of your business income and expenses. If you're not sure what applies to you, reach out before your appointment and we'll tell you exactly what to prepare.",
  },
  {
    q: "How long does it take to file my return?",
    a: "Most personal returns are completed and e-filed within 2–5 business days of receiving your documents. Corporate returns and year-end financial statements typically take 1–3 weeks depending on the volume of transactions. We'll give you a realistic timeline at the start so there are no surprises.",
  },
  {
    q: "Do you work with new businesses?",
    a: "Yes — and we find it's often easier to start a business relationship from day one than to fix problems that built up over a few years. If you've recently incorporated or are thinking about it, we can help you set up your bookkeeping, understand your tax obligations, and structure things in a way that makes sense for your situation.",
  },
  {
    q: "What if I haven't filed taxes in a few years?",
    a: "You're not alone, and the CRA's Voluntary Disclosures Program exists specifically for this situation. In most cases, filing late is far better than not filing at all — penalties stop growing and in some circumstances interest can be reduced. We handle back-filing regularly and will walk you through the process without judgment.",
  },
  {
    q: "I received a letter from the CRA. Can you help?",
    a: "Yes. CRA reviews, reassessments, and audit requests are something we handle regularly. Don't ignore the letter — bring it to us and we'll review it, tell you what it actually means, and respond on your behalf if needed. Most CRA letters are routine, but the timing of your response matters.",
  },
  {
    q: "How do I pay for your services?",
    a: "We accept e-Transfer, cheque, and cash. Payment is due upon completion of your return or engagement. For ongoing bookkeeping and payroll clients, we invoice monthly. If you have questions about fees before we start, just ask — we'd rather be upfront than have any awkwardness at the end.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border-b border-border last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
        aria-expanded={open}
      >
        <span className="text-base md:text-lg font-semibold text-primary group-hover:text-secondary transition-colors leading-snug">
          {q}
        </span>
        <span className="shrink-0 mt-0.5 w-7 h-7 rounded-full border border-border flex items-center justify-center text-primary group-hover:bg-secondary group-hover:border-secondary group-hover:text-white transition-colors">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted-foreground leading-relaxed pr-12">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            <motion.div
              className="lg:w-1/3 lg:sticky lg:top-28 self-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">FAQ</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight mb-6">
                Common questions
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                If something isn't covered here, call us at{" "}
                <a href="tel:+12892082087" className="text-secondary font-semibold hover:underline">
                  (289) 208-2087
                </a>{" "}
                or use the contact form below — we're happy to answer before you book.
              </p>
            </motion.div>

            <div className="lg:w-2/3">
              {faqs.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} index={i} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
