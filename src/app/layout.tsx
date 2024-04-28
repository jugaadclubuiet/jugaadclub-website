import type { Metadata } from "next";
import "./globals.css";
import Commons from "./Commons";

export const metadata: Metadata = {
  title: "Jugaad - Robotic club of UIET",
  description: " Jugaad Club, the premier robotics club of UIET, Panjab University, Chandigarh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Commons>
          {children}
        </Commons>
      </body>
    </html>
  );
}
