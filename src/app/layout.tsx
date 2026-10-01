import "@/styles/globals.css";
import "atropos/css/min";

import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import Footer from "@/components/footer";
import Header from "@/components/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const SITE_NAME = "Manuel Salvador | Portfolio";
const SITE_DESCRIPTION =
  "Welcome to my portfolio! Explore my projects and discover my passion for creating innovative websites.";
const SITE_URL = process.env.NEXT_PUBLIC_PREVIEW_MODE
  ? "https://preview-manuel-salvador.vercel.app"
  : "https://manuel-salvador.vercel.app";
const SITE_IMAGE = "https://i.imgur.com/kBZaSjc.png";
const TWITTER_HANDLE = "@manu_svd";

export const viewport: Viewport = {
  initialScale: 1,
  viewportFit: "cover",
  width: "device-width",
};

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL(SITE_URL),
  openGraph: {
    description: SITE_DESCRIPTION,
    images: [
      {
        alt: "manuelSalvador",
        height: 630,
        url: SITE_IMAGE,
        width: 1200,
      },
    ],
    siteName: "ManuelSalvadorPortfolio",
    title: SITE_NAME,
    type: "website",
    url: SITE_URL,
  },
  title: {
    default: SITE_NAME,
    template: "Manuel Salvador | %s",
  },
  twitter: {
    card: "summary_large_image",
    creator: TWITTER_HANDLE,
    description: SITE_DESCRIPTION,
    images: [SITE_IMAGE],
    title: SITE_NAME,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${inter.variable} ${spaceGrotesk.variable}`} lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="mx-auto min-h-screen max-w-7xl">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
