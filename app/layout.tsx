import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { property } from "@/config/property";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${property.address} | Property Tour`,
  description: `Virtual tour and photos of ${property.address}. Contact ${property.agent.name} for more information.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
