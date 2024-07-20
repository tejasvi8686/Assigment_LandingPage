import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Company | Innovative Solutions for Your Business",
  description: "My Company provides innovative solutions and services to help your business grow and succeed. Explore our range of services and contact us today.",
  keywords: "business solutions, innovative services, company growth, business success",
  robots: "index, follow", 
  viewport: "width=device-width, initial-scale=1.0",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
