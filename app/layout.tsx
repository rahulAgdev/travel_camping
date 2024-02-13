import type { Metadata } from "next";
import "./globals.css";
import {Nav} from "@/components";
import {Footer} from "@/components";
export const metadata: Metadata = {
  title: "Travel",
  description: "Travelling app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>
        <Nav />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
