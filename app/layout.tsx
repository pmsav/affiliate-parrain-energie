import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Code Parrain TotalEnergies - 20€ Offerts (2025)",
  description:
    "Code parrain TotalEnergies 108699459 : 20€ offerts + économies jusqu'à 280€/an. Simulateur gratuit, parrainage simple et rapide. Changez maintenant !",
  keywords:
    "code parrain totalenergies 108699459, parrainage total energie, code promo totalenergies, reduction facture electricite, economie energie",
  openGraph: {
    title: "Code Parrain TotalEnergies - 20€ Offerts (2025)",
    description:
      "Utilisez le code 108699459 et économisez 20€ + jusqu'à 280€/an sur vos factures d'énergie avec TotalEnergies",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
