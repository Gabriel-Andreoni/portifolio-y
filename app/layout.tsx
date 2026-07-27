import type { Metadata } from "next";
import { Barlow_Condensed, Dela_Gothic_One } from "next/font/google";

import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-utility",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const delaGothic = Dela_Gothic_One({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "一期一会 | Fotografia de cultura japonesa",
  description:
    "Portfólio fotográfico dedicado à cultura japonesa, suas pessoas, ritmos e celebrações.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${barlowCondensed.variable} ${delaGothic.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
