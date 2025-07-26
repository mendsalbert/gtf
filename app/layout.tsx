import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";


const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat" 
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
    <html lang="en">
      <body className={` ${montserrat.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
