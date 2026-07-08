"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const location = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (location === "/") {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 120);
    }
  };

  const navLinks = [
    { name: "Services", id: "services" },
    { name: "Pricing", id: "pricing" },
    { name: "About", id: "about" },
  ];

  const isOnHome = location === "/";
  const isDark = false;

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm py-4"
          : "bg-white py-5 border-b border-border/40"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <img
            src="/logo-icon.png"
            alt="Accounting Masters Group Logo"
            className="h-12 w-auto object-contain"
            data-testid="img-navbar-logo"
          />
          <div className="flex flex-col">
            <span className={`font-serif text-xl font-bold tracking-tight transition-colors leading-tight ${isDark ? "text-white group-hover:text-secondary" : "text-primary group-hover:text-secondary"}`}>
              Accounting Masters Group Inc.
            </span>
            <span className={`text-[0.6rem] uppercase tracking-widest font-semibold leading-tight ${isDark ? "text-white/60" : "text-muted-foreground"}`}>
              Powered by Muntaha CPA Professional Corp.
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 relative">
          {navLinks.map((link) => (
            <div
              key={link.id}
              className="relative py-2"
              onMouseEnter={() => setHoveredLink(link.id)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <button
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-bold uppercase tracking-wider transition-colors ${isDark ? "text-white" : "text-primary"}`}
              >
                {link.name}
              </button>
              {hoveredLink === link.id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </div>
          ))}

          {/* Resources route link */}
          <div
            className="relative py-2"
            onMouseEnter={() => setHoveredLink("resources")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Link
              href="/resources"
              className={`text-sm font-bold uppercase tracking-wider transition-colors ${isDark ? "text-white" : "text-primary"} ${location.startsWith("/resources") ? "text-secondary" : ""}`}
            >
              Resources
            </Link>
            {hoveredLink === "resources" && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </div>

          <Button
            onClick={() => scrollTo("contact")}
            className="bg-secondary hover:bg-secondary/90 text-white font-bold px-6 rounded-md shadow-md transition-all ml-4"
          >
            Contact Us
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={28} className={isDark ? "text-white" : "text-primary"} />
          ) : (
            <Menu size={28} className={isDark ? "text-white" : "text-primary"} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border/50 overflow-hidden absolute top-full left-0 right-0 shadow-lg"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-lg font-bold text-primary py-2 border-b border-border/30"
                >
                  {link.name}
                </button>
              ))}
              <Link
                href="/resources"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left text-lg font-bold py-2 border-b border-border/30 ${location.startsWith("/resources") ? "text-secondary" : "text-primary"}`}
              >
                Resources
              </Link>
              <Button
                onClick={() => scrollTo("contact")}
                className="w-full bg-secondary hover:bg-secondary/90 text-white mt-4 font-bold"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
