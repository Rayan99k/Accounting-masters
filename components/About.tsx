"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-32 bg-primary text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 items-center">

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">About Our Firm</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                Accounting that feels like it was built for you.
              </h3>

              <div className="space-y-5 text-white/80 text-lg font-light leading-relaxed mb-10">
                <p>
                  Accounting Masters Group Inc. is based in Burlington, Ontario,
                  and is powered by Muntaha CPA Professional Corporation Inc. Our
                  principal is a Chartered Professional Accountant (CPA, Canada)
                  and holds the ACCA designation from the UK, with over nine years
                  of experience working in public accounting on both sides of the
                  Atlantic.
                </p>
                <p>
                  We work with a wide range of clients — from individuals filing
                  personal tax returns, to small business owners managing
                  day-to-day books, to incorporated professionals who need
                  year-round accounting support. Whatever your situation, you'll
                  deal with someone who knows your file.
                </p>
                <p>
                  Our office is at 4155 Fairview Street, Unit 21 in Burlington.
                  We're available Monday through Friday and can accommodate
                  appointments outside regular hours when needed.
                </p>
              </div>

              <div className="p-4 border border-secondary/30 rounded-md bg-white/5 inline-flex items-center gap-3 mb-10">
                <div className="text-secondary font-bold text-xs uppercase tracking-widest">Powered by</div>
                <div className="w-px h-5 bg-white/20" />
                <div className="text-white font-medium text-sm">Muntaha CPA Professional Corporation Inc.</div>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/20">
                {[
                  { label: "Years in Practice", val: "9+" },
                  { label: "Professional Designations", val: "CPA · ACCA" },
                  { label: "Clients Served", val: "500+" },
                  { label: "Location", val: "Burlington, ON" },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-1 pb-2 border-b-2 border-secondary inline-block">
                      {stat.val}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-secondary/80 mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/services.jpg"
                alt="Accounting work"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
