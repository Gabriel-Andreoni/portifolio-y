import type { Metadata } from "next";
import { Dela_Gothic_One, Montserrat } from "next/font/google";

import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const delaGothic = Dela_Gothic_One({
  variable: "--font-japanese",
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
      className={`${montserrat.variable} ${delaGothic.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
