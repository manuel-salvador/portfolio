import "@/styles/globals.css";
import "atropos/css/min";

import type { Metadata, Viewport } from "next";
import { Kanit } from "next/font/google";

import Footer from "@/components/footer";
import Header from "@/components/header";
import AmbientBackground from "@/components/studio/ambient-background";
import FadeInObserver from "@/components/studio/fade-in-observer";
import { SITE_LOGO_URL } from "@/constants/urls";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
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
    icon: SITE_LOGO_URL,
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
    <html lang="en">
      <body
        className={`${kanit.className} relative isolate bg-[#0C0C0C] text-[#D7E2EA] antialiased`}
      >
        <AmbientBackground />
        <Header />
        <main className="min-h-screen overflow-x-clip">
          {children}
          <FadeInObserver />
        </main>
        <Footer />
      </body>
    </html>
  );
}
