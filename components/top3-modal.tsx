"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { BettingSite } from "../types"

interface Top3ModalProps {
  bettingSites: BettingSite[]
  casinoSites: BettingSite[]
}

export function Top3Modal({ bettingSites, casinoSites }: Top3ModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedTerms, setExpandedTerms] = useState<{ [key: number]: boolean }>({})

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  const top3Sites = bettingSites.slice(0, 3)

  const toggleTerms = (siteId: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setExpandedTerms((prev) => ({
      ...prev,
      [siteId]: !prev[siteId],
    }))
  }

  const truncateTermsWithButton = (terms: string, siteId: number, maxLength: number) => {
    if (terms.length <= maxLength) {
      return <span>{terms}</span>
    }

    if (expandedTerms[siteId]) {
      return (
        <span>
          {terms}
          <button onClick={(e) => toggleTerms(siteId, e)} className="text-gray-300 underline ml-1 hover:text-white">
            Read less
          </button>
        </span>
      )
    }

    return (
      <span>
        {terms.substring(0, maxLength)}...
        <button onClick={(e) => toggleTerms(siteId, e)} className="text-gray-300 underline ml-1 hover:text-white">
          Read more
        </button>
      </span>
    )
  }

  return (
    <div className="hidden md:flex fixed inset-0 bg-black/80 backdrop-blur-sm z-50 items-center justify-center p-4">
      {/* Close button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 text-black hover:bg-gray-200 z-10 w-10 h-10 p-0 rounded-full bg-white/90"
      >
        <X className="w-8 h-8 font-bold" />
      </Button>

      <div className="w-full max-w-6xl">
        {/* Title */}
        <div className="text-center mb-2 md:mb-2">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-white">Best Betting Sites</h2>
        </div>

        {/* Desktop Layout (1024px+) - ОРИГІНАЛЬНІ РОЗМІРИ */}
        <div className="hidden lg:flex items-center justify-center gap-0 w-full px-4 pb-2">
          {top3Sites.map((site: BettingSite, index: number) => (
            <div
              key={site.id}
              className={`overflow-hidden ${
                index === 1
                  ? "w-[357px] border-4 border-green-primary shadow-2xl shadow-green-primary/50 rounded-lg relative z-20"
                  : "w-[255px] border-4 border-white rounded-lg relative z-10"
              } ${expandedTerms[site.id] ? "h-auto" : index === 1 ? "h-[386px]" : "h-[370px]"}`}
            >
              {/* White header section */}
              <div
                className={`bg-white ${index === 1 ? "h-[115px]" : "h-[109px]"} flex items-center justify-center p-4`}
                style={{
                  borderTopLeftRadius: "calc(0.5rem - 4px)",
                  borderTopRightRadius: "calc(0.5rem - 4px)",
                }}
              >
                <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-18 w-auto object-contain" />
              </div>

              {/* Black content section */}
              <div
                className={`bg-black text-white ${
                  expandedTerms[site.id] ? "min-h-[267px]" : index === 1 ? "h-[267px]" : "h-[255px]"
                } flex flex-col p-4 text-center`}
                style={{
                  borderBottomLeftRadius: "calc(0.5rem - 4px)",
                  borderBottomRightRadius: "calc(0.5rem - 4px)",
                }}
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mt-4 mb-4">
                  {[...Array(index === 2 ? 4 : 5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Offer text */}
                <div className="flex-1 flex flex-col justify-center mb-3">
                  <div className={` ${index === 1 ? "text-2xl" : "text-xl"} font-bold mb-2`}>{site.bonus}</div>
                  <div className={` ${index === 1 ? "text-2xl" : "text-xl"}`}>{site.welcomeOffer}</div>
                </div>

                {/* Button */}
                <div className="mb-2">
                  <Link href={site.link} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-green-primary hover:bg-green-hover text-white font-bold py-2 px-4 rounded-full text-sm w-full">
                      GET BONUS
                    </Button>
                  </Link>
                </div>

                {/* Terms - Expandable */}
                <div className="text-[9px] text-gray-300 leading-tight text-center">{site.terms}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet Layout (768px - 1023px) - ОРИГІНАЛЬНІ РОЗМІРИ */}
        <div className="hidden md:flex lg:hidden items-center justify-center gap-0 w-full px-2">
          {top3Sites.map((site: BettingSite, index: number) => (
            <div
              key={site.id}
              className={`overflow-hidden ${
                index === 1
                  ? "w-[240px] border-4 border-green-primary shadow-2xl shadow-green-primary/50 rounded-lg relative z-20"
                  : "w-[180px] border-4 border-white rounded-lg relative z-10"
              } ${expandedTerms[site.id] ? "h-auto" : index === 1 ? "h-[280px]" : "h-[260px]"}`}
            >
              {/* White header section */}
              <div
                className={`bg-white ${index === 1 ? "h-[80px]" : "h-[75px]"} flex items-center justify-center p-3`}
                style={{
                  borderTopLeftRadius: "calc(0.5rem - 3px)",
                  borderTopRightRadius: "calc(0.5rem - 3px)",
                }}
              >
                <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-12 w-auto object-contain" />
              </div>

              {/* Black content section */}
              <div
                className={`bg-black text-white ${
                  expandedTerms[site.id] ? "min-h-[200px]" : index === 1 ? "h-[200px]" : "h-[185px]"
                } flex flex-col p-3 text-center`}
                style={{
                  borderBottomLeftRadius: "calc(0.5rem - 3px)",
                  borderBottomRightRadius: "calc(0.5rem - 3px)",
                }}
              >
                {/* Stars */}
                <div className="flex justify-center gap-0.5 mb-2">
                  {[...Array(index === 2 ? 4 : 5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Offer text */}
                <div className="flex-1 flex flex-col justify-center mb-1">
                  <div className={` ${index === 1 ? "text-lg" : "text-base"} font-bold mb-1`}>{site.bonus}</div>
                  <div className={` ${index === 1 ? "text-lg" : "text-base"}`}>{site.welcomeOffer}</div>
                </div>

                {/* Button */}
                <div className="mb-1">
                  <Link href={site.link} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-green-primary hover:bg-green-hover text-white font-bold py-1.5 px-3 rounded-full text-xs w-full">
                      GET BONUS
                    </Button>
                  </Link>
                </div>

                {/* Terms - Expandable */}
                <div className="text-[8px] text-gray-300 leading-tight text-center">{site.terms}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer text */}
        <div className="text-center mt-4 md:mt-8">
          <p className="text-white text-xs md:text-sm">
            18+. T&C's apply. <span className="underline">Begambleaware.org</span>. Play responsibly.
          </p>
        </div>
      </div>
    </div>
  )
}
