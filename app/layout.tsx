import type { Metadata } from "next";
import { Inter, Libre_Baskerville, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-brand",
});

export const metadata: Metadata = {
  title: "Growing Together Family",
  description: "A place where you can experience God's love and grow in your faith journey together as a family.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${inter.variable} ${libreBaskerville.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
