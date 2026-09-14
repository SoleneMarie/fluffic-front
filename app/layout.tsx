// Page pour écrire : layout global, providers, fonts, metadata, gérer le thème et les langues

import type { Metadata } from "next";
import { Kalam, Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kalam",
});

export const metadata: Metadata = {
  title: "Fluffic",
  description: "Rencontrez l'animal qui vous correspond",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${notoSans.variable} ${kalam.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
