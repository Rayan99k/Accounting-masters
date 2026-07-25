import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Accounting Masters Group Inc.",
    description:
      "Personal and corporate accounting services in Burlington, Ontario. Tax preparation, bookkeeping, payroll, and financial advisory. Powered by Muntaha CPA Professional Corporation Inc.",
    url: "https://www.accountingmastersgroup.ca",
    telephone: "+1-289-208-2087",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4155 Fairview Street, Unit 21",
      addressLocality: "Burlington",
      addressRegion: "ON",
      postalCode: "L7N 2G1",
      addressCountry: "CA",
    },
    areaServed: [
      "Burlington",
      "Oakville",
      "Mississauga",
      "Milton",
      "Hamilton",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "10:00",
      closes: "15:00",
    },
  };

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Pricing />
        <WhyChooseUs />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
