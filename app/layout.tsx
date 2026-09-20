import type { Metadata } from "next";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shankar Mahadevan",
  description: "Aerospace Researcher",
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