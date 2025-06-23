import type React from "react"
import type { Metadata } from "next"
import { Mulish } from "next/font/google"
import "./globals.css"
import { Footer } from "../components/footer"
import { Header } from "../components/header"

const mulish = Mulish({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Betting Best Irish Sites - Top Irish Betting Sites",
  description: "Find the best betting sites in Ireland. Compare bonuses, odds, and features of top Irish bookmakers.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <div
          className="min-h-screen relative"
          style={{
            backgroundImage: "url(/bg-7.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="relative z-10">
            {/* Header in layout - will show on all pages */}
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
