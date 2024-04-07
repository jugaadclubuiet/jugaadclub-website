import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ComponentExporter";

export const metadata: Metadata = {
  title: "Jugaad",
  description: "UIET Jugaad Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-parallax bg-no-repeat bg-cover">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
