"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { articles, categories } from "@/data/articles";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

const categoryColors: Record<string, string> = {
  "Personal Tax": "bg-blue-50 text-blue-700",
  "Self-Employment": "bg-amber-50 text-amber-700",
  "Tax Planning": "bg-purple-50 text-purple-700",
  "Small Business": "bg-green-50 text-green-700",
  "Corporate": "bg-slate-100 text-slate-700",
  "Choosing an Accountant": "bg-teal-50 text-teal-700",
  "CRA & Audits": "bg-rose-50 text-rose-700",
};

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? articles.filter((a) => a.category === activeCategory)
    : articles;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary pt-36 pb-20 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-secondary text-sm font-bold tracking-widest uppercase mb-4">
              Tax Tips & Resources
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-5">
              Practical guides for<br className="hidden md:block" /> Canadian taxpayers
            </h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Plain-language articles on personal and corporate tax in Canada. No jargon, no filler — just information you can use when making decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter bar */}
      <div className="border-b border-border sticky top-[64px] bg-white z-30">
        <div className="container mx-auto px-6 md:px-12 py-4 flex items-center gap-3 flex-wrap">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
              activeCategory === null
                ? "bg-primary text-white border-primary"
                : "border-border text-muted-foreground hover:border-primary hover:text-primary"
            }`}
          >
            All topics
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Article grid */}
      <main className="flex-grow container mx-auto px-6 md:px-12 py-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <Link href={`/resources/${article.slug}`} className="group block h-full">
                <article className="h-full flex flex-col border border-border rounded-sm hover:border-secondary hover:shadow-md transition-all duration-200 overflow-hidden">
                  {/* Card top accent */}
                  <div className="h-1 bg-secondary w-0 group-hover:w-full transition-all duration-300" />

                  <div className="flex flex-col flex-grow p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[article.category] ?? "bg-zinc-100 text-zinc-700"}`}>
                        {article.category}
                      </span>
                    </div>

                    <h2 className="font-serif font-bold text-primary text-lg leading-snug mb-3 group-hover:text-secondary transition-colors">
                      {article.title}
                    </h2>

                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-6">
                      {article.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{article.date}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} />
                          {article.readingTime}
                        </span>
                      </div>
                      <span className="text-secondary flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all">
                        Read <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">
            No articles in this category yet. Check back soon.
          </div>
        )}

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-primary rounded-sm p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
              Have a specific question?
            </h3>
            <p className="text-white/70">
              Call us at{" "}
              <a href="tel:+12892082087" className="text-secondary font-semibold hover:underline">
                (289) 208-2087
              </a>{" "}
              or send a message — no obligation.
            </p>
          </div>
          <Link
            href="/"
            className="shrink-0 inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-3.5 rounded-sm transition-colors text-sm"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </motion.div>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
