import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.accountingmastersgroup.ca"),
  title: {
    default: "Accounting Masters Group Inc. | Burlington, ON CPA Firm",
    template: "%s | Accounting Masters Group Inc.",
  },
  description:
    "Accounting Masters Group Inc. — Burlington, ON accounting firm offering personal tax, corporate tax, bookkeeping, payroll, and financial advisory services. Powered by Muntaha CPA Professional Corporation Inc. Call (647) 879-1124.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Accounting Masters Group Inc. | Burlington, ON CPA Firm",
    description:
      "Personal and corporate accounting services in Burlington, Ontario. Tax preparation, bookkeeping, payroll, and financial advisory. Powered by Muntaha CPA Professional Corporation Inc.",
    type: "website",
    images: ["/opengraph.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accounting Masters Group Inc. | Burlington, ON CPA Firm",
    description:
      "Personal and corporate accounting services in Burlington, Ontario. Tax preparation, bookkeeping, payroll, and financial advisory. Powered by Muntaha CPA Professional Corporation Inc.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
