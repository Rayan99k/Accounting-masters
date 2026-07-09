"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:pr-8">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-icon.png" alt="Accounting Masters Group Logo" className="h-14 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-white tracking-tight leading-tight">
                  Accounting Masters Group Inc.
                </span>
                <span className="text-[0.6rem] uppercase tracking-widest text-secondary font-bold leading-tight mt-0.5">
                  Professional Corporation
                </span>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed mb-4">
              Trusted, expert accounting and financial consulting serving the Burlington community with integrity.
            </p>
            <p className="text-white/40 text-xs uppercase tracking-wider mb-8">
              Powered by: Muntaha CPA Professional Corporation Inc.
            </p>
            <a
              href="tel:+12892082087"
              className="inline-flex items-center gap-3 text-white/70 hover:text-secondary transition-colors font-medium"
            >
              <Phone size={16} className="text-secondary shrink-0" />
              (289) 208-2087
            </a>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4 text-white/70">
              {[
                "Personal Tax Returns",
                "Corporate Tax",
                "Bookkeeping & Financial Statements",
                "Payroll",
                "Incorporated Medical Professionals",
                "Accounting & Financial Advisory",
              ].map((svc) => (
                <li key={svc}>
                  <button
                    onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-secondary transition-colors text-left"
                  >
                    {svc}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-wider text-sm">Location</h4>
            <a
              href="https://maps.google.com/?q=4155+Fairview+St,+Unit+21,+Burlington,+ON+L7N+2G1,+Canada"
              target="_blank"
              rel="noopener noreferrer"
              className="not-italic text-white/70 hover:text-secondary transition-colors leading-relaxed block mb-4"
            >
              4155 Fairview St, Unit 21<br />
              Burlington, ON<br />
              L7N 2G1
            </a>
            <a
              href="tel:+12892082087"
              className="inline-flex items-center gap-2 text-white/70 hover:text-secondary transition-colors text-sm"
            >
              <Phone size={14} className="text-secondary shrink-0" />
              (289) 208-2087
            </a>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-wider text-sm">Office Hours</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="font-medium">10AM – 3PM</span>
              </li>
              <li className="flex justify-between">
                <span>Weekend</span>
                <span className="font-medium text-secondary">By Appointment</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-secondary/30 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50 font-medium tracking-wide">
          <p>&copy; {currentYear} Accounting Masters Group Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}