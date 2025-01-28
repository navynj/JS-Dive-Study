import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JS Dive Study",
  description: "🌊 Dive deep into JavaScript, one concept at a time, with hands-on learning and collaborative growth. 🐋",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
