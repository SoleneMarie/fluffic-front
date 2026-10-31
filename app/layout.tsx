// Layout global, providers, fonts, metadata, gérer le thème et les langues
import "./globals.css";

import type { Metadata } from "next";
import { Kalam, Long_Cang, Noto_Sans } from "next/font/google";

import PageContainer from "@/components/containers/PageContainer";
import Footer from "@/components/layouts/Footer";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kalam",
});

const longCang = Long_Cang({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-long-cang",
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
      <body
        className={`${notoSans.variable} ${kalam.variable} antialiased  ${longCang.variable} antialiased`}
      >
        <PageContainer>
          <main className="flex-1">{children}</main>
          <Footer />
        </PageContainer>
      </body>
    </html>
  );
}
