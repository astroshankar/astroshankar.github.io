import type { Metadata } from "next";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shankar Mahadevan | Aerospace Researcher",
  description:
    "Shankar Mahadevan is an aerospace researcher working in high-speed aerodynamics, hypersonics, and aeroacoustics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}