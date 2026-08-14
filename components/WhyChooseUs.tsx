"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Based in Burlington",
      desc: "We work with individuals and businesses right here in the community. We know the local landscape, and we're easy to reach when you need us.",
    },
    {
      title: "You deal with a CPA directly",
      desc: "Your file is handled by a designated CPA — not passed off to junior staff. You get straightforward answers from someone who knows your situation.",
    },
    {
      title: "We explain things clearly",
      desc: "No jargon. When there's something you need to understand about your taxes or financials, we take the time to walk you through it properly.",
    },
    {
      title: "We follow CPA standards",
      desc: "Our work follows the professional and ethical standards of CPA Canada. You can count on accuracy, confidentiality, and honest advice.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
              <Image
                src="/team.jpg"
                alt="Accounting Masters Group team"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-8 -right-4 md:-right-12 bg-primary text-white p-8 md:p-10 rounded-sm shadow-xl max-w-[280px] border-b-4 border-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-secondary text-3xl font-serif font-bold mb-2">CPA</div>
              <div className="text-white/80 text-sm leading-snug">Designated professionals serving Burlington and the surrounding area</div>
            </motion.div>
          </motion.div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">Why Work With Us</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                A firm that treats your finances seriously.
              </h3>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Accounting Masters Group is powered by Muntaha CPA Professional
                Corporation Inc. — a firm built around giving every client the
                kind of attention that larger practices rarely have time for.
              </p>

              <div className="space-y-8">
                {reasons.map((reason, i) => {
                  const num = (i + 1).toString().padStart(2, "0");
                  return (
                    <motion.div
                      key={i}
                      className="flex items-start gap-6"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <div className="mt-1 flex-shrink-0 w-10 h-10 bg-primary rounded-sm flex items-center justify-center text-secondary font-bold font-serif shadow-md">
                        {num}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold font-serif text-primary mb-2">{reason.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{reason.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
