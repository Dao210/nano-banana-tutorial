import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://nanobananatutorials.com"),
  title: {
    default: "Nano Banana - AI Image Editing Tutorials & Guides",
    template: "%s | Nano Banana Tutorials",
  },
  description:
    "Master Google's Nano Banana AI image editing with comprehensive tutorials, step-by-step guides, and expert tips. Learn character consistency, multi-turn editing, and advanced techniques.",
  keywords: [
    "Nano Banana",
    "Google AI",
    "image editing",
    "Gemini 2.5 Flash",
    "AI tutorials",
    "character consistency",
    "multi-turn editing",
    "image generation",
    "AI image manipulation",
    "Google Gemini",
    "artificial intelligence",
    "machine learning",
    "digital art",
    "photo editing",
    "AI tools",
  ],
  authors: [{ name: "Nano Banana Tutorial Platform", url: "https://nanobananatutorials.com" }],
  creator: "Nano Banana Tutorial Platform",
  publisher: "Nano Banana Tutorial Platform",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nanobananatutorials.com",
    siteName: "Nano Banana Tutorial Platform",
    title: "Nano Banana - AI Image Editing Tutorials & Guides",
    description: "Master Google's Nano Banana AI image editing with comprehensive tutorials and expert guides.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nano Banana AI Image Editing Tutorials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nano Banana - AI Image Editing Tutorials & Guides",
    description: "Master Google's Nano Banana AI image editing with comprehensive tutorials and expert guides.",
    images: ["/og-image.jpg"],
    creator: "@nanobananatutorials",
    site: "@nanobananatutorials",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://nanobananatutorials.com",
    languages: {
      "en-US": "https://nanobananatutorials.com",
    },
  },
  category: "Education",
  classification: "AI Image Editing Tutorials",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#164e63" />
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="canonical" href="https://nanobananatutorials.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`font-sans ${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
