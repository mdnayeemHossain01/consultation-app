import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import EmergencyHeader from "@/components/layout/EmergencyHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jackson Heights Consulting",
  description: "Immigration, Tax, and Notary Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EmergencyHeader />
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}