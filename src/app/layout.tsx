import type { Metadata } from "next";
import "./globals.css";
import { BackToTop } from "../components/back-to-top";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.4thgenracing.com"),
  title: {
    default: "4th Gen Racing | Massa Racing Dynasty",
    template: "%s | 4th Gen Racing"
  },
  description:
    "A premium motorsport site for four generations of Massa racing drivers, the Number 6 family symbol, and the future of 4th Gen Racing.",
  openGraph: {
    title: "4th Gen Racing | Massa Racing Dynasty",
    description: "Four generations of Massa drivers. One red line. A living dynasty still moving forward.",
    url: "https://www.4thgenracing.com",
    siteName: "4th Gen Racing",
    images: [
      {
        url: "/images/monza-banking-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Historic Number 6 racing image"
      }
    ],
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <BackToTop />
      </body>
    </html>
  );
}
