import "@/styles/globals.css";
import "atropos/css/min";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/footer";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

const SITE_NAME = "Manuel Salvador | Portfolio";
const SITE_DESCRIPTION =
  "Welcome to my portfolio! Explore my projects and discover my passion for creating innovative websites.";
const SITE_URL = process.env.NEXT_PUBLIC_PREVIEW_MODE
  ? "https://preview-manuel-salvador.vercel.app"
  : "https://manuel-salvador.vercel.app";
const SITE_IMAGE = "https://i.imgur.com/kBZaSjc.png";
const TWITTER_HANDLE = "@manu_svd";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: "Manuel Salvador | %s",
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "ManuelSalvadorPortfolio",
    images: [
      {
        url: SITE_IMAGE,
        width: 1200,
        height: 630,
        alt: "manuelSalvador",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    creator: TWITTER_HANDLE,
    images: [SITE_IMAGE],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-background antialiased">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
