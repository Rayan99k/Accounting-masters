"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Phone } from "lucide-react";
import { type Article, type ContentBlock } from "@/data/articles";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-foreground leading-relaxed mb-5">{block.text}</p>;

    case "heading":
      return (
        <h2 className="text-2xl font-serif font-bold text-primary mt-10 mb-4 leading-snug">
          {block.text}
        </h2>
      );

    case "subheading":
      return (
        <h3 className="text-lg font-bold text-primary mt-8 mb-3">
          {block.text}
        </h3>
      );

    case "list":
      return (
        <ul className="space-y-2.5 mb-5 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-foreground leading-relaxed">
              <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-secondary" />
              {item}
            </li>
          ))}
        </ul>
      );

    case "numbered":
      return (
        <ol className="space-y-3 mb-5 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-foreground leading-relaxed">
              <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );

    case "highlight":
      return (
        <div className="my-6 border-l-4 border-secondary bg-secondary/5 px-6 py-4 rounded-r-sm">
          <p className="text-foreground leading-relaxed font-medium">{block.text}</p>
        </div>
      );

    case "note":
      return (
        <div className="my-6 bg-primary/5 border border-primary/20 rounded-sm px-6 py-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary mb-1 block">
            {block.label}
          </span>
          <p className="text-foreground leading-relaxed">{block.text}</p>
        </div>
      );

    case "table":
      return (
        <div className="my-6 overflow-x-auto rounded-sm border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary/5">
                <th className="text-left font-bold text-primary px-4 py-3 w-1/3">{block.headers[0]}</th>
                <th className="text-left font-bold text-primary px-4 py-3">{block.headers[1]}</th>
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 1 ? "bg-zinc-50" : undefined}>
                  <td className="align-top px-4 py-3 font-semibold text-foreground border-t border-border">{row[0]}</td>
                  <td className="align-top px-4 py-3 text-foreground leading-relaxed border-t border-border">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    default:
      return null;
  }
}

const categoryColors: Record<string, string> = {
  "Personal Tax": "bg-blue-50 text-blue-700",
  "Self-Employment": "bg-amber-50 text-amber-700",
  "Tax Planning": "bg-purple-50 text-purple-700",
  "Small Business": "bg-green-50 text-green-700",
  "Corporate": "bg-slate-100 text-slate-700",
  "Choosing an Accountant": "bg-teal-50 text-teal-700",
};

export default function ArticleContent({
  article,
  related,
}: {
  article: Article;
  related: Article[];
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Article header */}
      <header className="bg-primary pt-36 pb-16 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-white/60 hover:text-secondary transition-colors text-sm font-medium mb-8"
            >
              <ArrowLeft size={14} /> Back to Resources
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[article.category] ?? "bg-zinc-100 text-zinc-700"}`}>
                {article.category}
              </span>
              <span className="text-white/40 text-sm flex items-center gap-1.5">
                <Clock size={12} /> {article.readingTime}
              </span>
              <span className="text-white/40 text-sm">{article.date}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-5">
              {article.title}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
              {article.excerpt}
            </p>
            <p className="text-white/40 text-sm mt-5">
              By Muntaha CPA Professional Corporation Inc.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Body */}
      <main className="flex-grow">
        <div className="container mx-auto px-6 md:px-12 py-16 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Article content */}
            <motion.article
              className="lg:w-2/3 prose-custom"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {article.content.map((block, i) => (
                <Block key={i} block={block} />
              ))}

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  This article is for general information only. Tax rules change frequently and individual circumstances vary. Contact a qualified CPA before making tax decisions.
                </p>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="lg:w-1/3 space-y-6">

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-primary rounded-sm p-7 sticky top-28"
              >
                <h3 className="text-white font-serif font-bold text-lg mb-3">
                  Have a question about this?
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  We serve individuals and small businesses in Burlington and the surrounding area. Free initial consultation.
                </p>
                <a
                  href="tel:+12892082087"
                  className="flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-bold px-5 py-3 rounded-sm transition-colors text-sm mb-4 justify-center"
                >
                  <Phone size={15} /> (289) 208-2087
                </a>
                <Link
                  href="/"
                  className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white/80 hover:text-white font-semibold px-5 py-2.5 rounded-sm transition-colors text-sm"
                >
                  Send a message
                </Link>
              </motion.div>

              {related.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                    Related articles
                  </h3>
                  <div className="space-y-4">
                    {related.map((rel) => (
                      <Link key={rel.slug} href={`/resources/${rel.slug}`} className="group block">
                        <div className="p-4 border border-border rounded-sm hover:border-secondary hover:shadow-sm transition-all">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${categoryColors[rel.category] ?? "bg-zinc-100 text-zinc-700"} mb-2 inline-block`}>
                            {rel.category}
                          </span>
                          <p className="font-semibold text-sm text-primary group-hover:text-secondary transition-colors leading-snug">
                            {rel.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link
                  href="/resources"
                  className="flex items-center gap-2 text-secondary font-semibold hover:underline text-sm"
                >
                  <ArrowLeft size={14} /> All articles
                </Link>
              </motion.div>

            </aside>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
