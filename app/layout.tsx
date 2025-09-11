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
  metadataBase: new URL("https://nanobanana.fans"),
  title: {
    default: "Nano Banana - AI Image Editing Prompt & Guides",
    template: "%s | Nano Banana Prompt",
  },
  description:
    "Master Google's Nano Banana AI image editing with Prompt, step-by-step guides, and expert tips. Learn advanced techniques.",
  keywords: [
    "Nano Banana",
    "Nano AI",
    "AI banana",
    "Gemini AI",
    "nano prompt",
    "Google nano",
    "digital art",
    "photo editing",
  ],
  authors: [{ name: "Nano Banana Tutorial Platform", url: "https://nanobanana.fans" }],
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
    url: "https://nanobanana.fans",
    siteName: "Nano Banana Tutorial Platform",
    title: "Nano Banana - AI Image Editing Prompt & Guides",
    description: "Master Google's Nano Banana AI image editing with comprehensive Prompt and expert guides.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nano Banana AI Image Editing Prompt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nano Banana - AI Image Editing Prompt & Guides",
    description: "Master Google's Nano Banana AI image editing with comprehensive Prompt and expert guides.",
    images: ["/og-image.jpg"],
    creator: "@nanobananaPrompt",
    site: "@nanobananaPrompt",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://nanobanana.fans",
    languages: {
      "en-US": "https://nanobanana.fans",
    },
  },
  category: "Education",
  classification: "AI Image Editing Prompt",
  generator: "nanobanana",
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
        <link rel="canonical" href="https://nanobanana.fans" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* ...existing meta/link... */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EB226TXP1L"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-EB226TXP1L');
      `,
          }}
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8886185433147735"
     crossorigin="anonymous"></script>
      </head>
      <body className={`font-sans ${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />

      </body>
    </html>
  )
}
