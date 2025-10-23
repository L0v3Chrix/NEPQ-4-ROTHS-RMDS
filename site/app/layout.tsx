import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "NEPQ Training Guide - Roth Conversions, RMDs & Infinite Banking",
  description: "Master the art of consultative selling through neuro-emotional questioning. Interactive training guide for learning NEPQ methodology.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
