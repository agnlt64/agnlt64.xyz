import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import "./globals.css";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "agnlt64.xyz",
  description: "Personal Home Page of Antonin GENELOT (@agnlt64). 🇫🇷 IT student. FOSS & Linux adept. C, Go, Next, React enjoyer.",
  metadataBase: new URL("https://agnlt64.xyz"),
  icons: {
    icon: '/favicon.svg'
  },
  openGraph: {
    images: "/opengraph-image.jpg"
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="fr" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Suspense>
            {children}
          </Suspense>
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
