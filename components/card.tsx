"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BettingSite } from "../types"
import Link from "next/link"

interface SiteCardProps {
  site: BettingSite
  rank: number
}

export function Card({ site, rank }: SiteCardProps) {
  const [isTermsExpanded, setIsTermsExpanded] = useState(false)
  const [showReadMore, setShowReadMore] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const termsRef = useRef<HTMLDivElement>(null)
  const termsContainerRef = useRef<HTMLDivElement>(null)

  // Determine background color based on rank (alternating)
  const isEvenRank = rank % 2 === 0
  const cardBgColor = isEvenRank ? "bg-gray-50" : "bg-white"

  useEffect(() => {
    // Перевіряємо чи це мобільний пристрій
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    // Різні ліміти для мобільного та десктопу
    const limit = isMobile ? 215 : 350
    const shouldShow = site.terms.length > limit

    setShowReadMore(shouldShow)
  }, [site.terms, site.name, isMobile])

  const formatVotes = (votes: number) => {
    return votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const filledStars = Math.floor(site.rating)
  const hasHalfStar = site.rating % 1 !== 0

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsTermsExpanded(!isTermsExpanded)
  }

  // Updated badge logic: show badges only on positions 1, 2, and 4
  const shouldShowBadge = rank === 1 || rank === 2 || rank === 4 || rank === 7
  const getBadgeText = () => {
    if (rank === 1) return "TOP BRAND"
    if (rank === 2) return "EXCLUSIVE OFFER"
    if (rank === 4) return "TRENDING"
    if (rank === 7) return "TOP GROWTH"
    return ""
  }

  return (
    <div className="block">
      {/* Table Header - тільки для першого елемента на desktop/tablet */}
      {rank === 1 && (
        <div className="hidden md:block bg-black text-white rounded-lg overflow-hidden mb-2">
          <div className="h-[40px] flex items-center px-6">
            {/* RANK - 6% */}
            <div className="flex-[0_0_6%] text-left pr-2">
              <span className="text-xs font-bold"> </span>
            </div>

            {/* BOOKMAKER - 19% */}
            <div className="flex-[0_0_19%] text-center pr-2">
              <span className="text-xs font-bold">BOOKMAKER</span>
            </div>

            {/* BONUS OFFER - 25% */}
            <div className="flex-[0_0_25%] text-center px-2">
              <span className="text-xs font-bold">BONUS OFFER</span>
            </div>

            {/* USER RATING - 20% */}
            <div className="flex-[0_0_20%] text-center px-2">
              <span className="text-xs font-bold">USER RATING</span>
            </div>

            {/* SCORE - 15% */}
            <div className="flex-[0_0_15%] text-center px-2">
              <span className="text-xs font-bold">SCORE</span>
            </div>

            {/* VISIT SITE - 15% */}
            <div className="flex-[0_0_15%] text-center pl-2">
              <span className="text-xs font-bold">VISIT SITE</span>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Layout */}
      <div
        className={`hidden lg:block ${cardBgColor} rounded-md border shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden cursor-pointer`}
      >
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          {/* Badge - more square */}
          {shouldShowBadge && (
            <div className="absolute top-0 left-0 bg-green-primary text-white px-3 py-1 rounded-tl-md rounded-bl-md text-sm font-bold z-10">
              {getBadgeText()}
            </div>
          )}

          {/* Main Content */}
          <div className="h-[130px] flex items-center px-6">
            {/* RANK NUMBER - 6% - простий чорний текст */}
            <div className="flex-[0_0_6%] flex justify-start items-center h-full pr-2">
              <div className="text-3xl font-bold text-black">{rank}</div>
            </div>

            {/* BOOKMAKER - 19% */}
            <div className="flex-[0_0_19%] flex justify-center items-center h-full pr-2">
              <img
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                className="w-[170px] xl:w-[200px] h-[85px] xl:h-[100px] object-contain mt-4"
              />
            </div>

            {/* BONUS OFFER - 25% */}
            <div className="flex-[0_0_25%] text-center flex flex-col justify-center h-full px-2">
              <div className="text-xs text-gray-600 uppercase font-normal mb-1">Welcome Bonus</div>
              <div className="text-lg xl:text-xl font-bold text-gray-900 mb-0.5 leading-tight break-words">
                {site.bonus}
              </div>
              <div className="text-lg xl:text-xl font-bold text-gray-900 leading-tight break-words text-nowrap">
                {site.welcomeOffer}
              </div>
            </div>

            {/* USER RATING - 20% */}
            <div className="flex-[0_0_20%] text-center flex flex-col justify-center h-full px-2">
              <div className="text-xs text-black mb-0.5">Rate it! ({formatVotes(site.votes)})</div>
              <div className="flex justify-center gap-0.5 xl:gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 xl:w-5 h-4 xl:h-5 ${i < Math.floor(site.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* SCORE - 15% */}
            <div className="flex-[0_0_15%] text-center flex flex-col justify-center h-full px-2">
              <div
                className="text-[44px] xl:text-[56px] font-bold leading-none"
                style={{
                  fontFamily: "Nunito Sans",
                  color: "rgba(34, 197, 94, 1)",
                }}
              >
                {site.rating.toFixed(1)}
              </div>
            </div>

            {/* VISIT SITE - 15% */}
            <div className="flex-[0_0_15%] text-center flex flex-col justify-center items-center h-full pl-2">
              <Button className="bg-green-primary hover:bg-green-hover text-white font-bold px-2 xl:px-4 py-2 rounded-md text-xs xl:text-sm w-[130px] xl:w-[160px] h-[38px] xl:h-[45px] mb-1 transition-colors">
                GET BONUS
              </Button>
              <div className="text-xs text-gray-500 underline">Visit {site.name}</div>
            </div>
          </div>
        </Link>

        {/* Terms - Expandable */}
        <div className="bg-gray-100 text-[8px] text-gray-500 px-6 py-2" ref={termsContainerRef}>
          <div className="text-center">
            <div className={`leading-tight transition-all duration-300 ${!isTermsExpanded ? "line-clamp-2" : ""}`}>
              {site.terms}
            </div>
            {showReadMore && (
              <button
                onClick={handleTermsClick}
                className="text-gray-500  hover:text-blue-800 underline mt-1 text-xs font-medium"
              >
                {isTermsExpanded ? "Read less" : "Read more"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tablet Layout */}
      <div
        className={`hidden md:block lg:hidden ${cardBgColor} rounded-md border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden cursor-pointer`}
      >
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          {/* Badge for top positions - more square */}
          {shouldShowBadge && (
            <div className="absolute top-0 left-0 bg-green-primary text-white px-2 py-1 rounded-tl-md rounded-bl-md text-xs font-bold z-10">
              {getBadgeText()}
            </div>
          )}

          <div className="p-4 pt-6 min-h-[140px]">
            {/* FLEXBOX Layout for Tablet */}
            <div className="flex items-center mb-3">
              {/* Rank Number - 6% - простий чорний текст */}
              <div className="flex-[0_0_6%] flex justify-start items-center h-full pr-2">
                <div className="text-2xl font-bold text-black">{rank}</div>
              </div>

              {/* Logo - 19% */}
              <div className="flex-[0_0_19%] flex justify-center items-center h-full pr-2">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="w-[140px] h-[70px] object-contain flex-shrink-0"
                />
              </div>

              {/* Bonus - 25% */}
              <div className="flex-[0_0_25%] text-center px-2">
                <div className="text-xs text-gray-600 uppercase font-normal mb-1">Welcome Bonus</div>
                <div className="text-base font-bold text-gray-900 mb-0.5 leading-tight break-words">{site.bonus}</div>
                <div className="text-base font-bold text-gray-900 leading-tight break-words text-nowrap">
                  {site.welcomeOffer}
                </div>
              </div>

              {/* Rating - 20% */}
              <div className="flex-[0_0_20%] text-center px-2">
                <div className="text-xs text-gray-600 mb-0.5">({formatVotes(site.votes)})</div>
                <div className="flex justify-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < filledStars || (i === filledStars && hasHalfStar)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                        }`}
                    />
                  ))}
                </div>
              </div>

              {/* Score - 15% */}
              <div className="flex-[0_0_15%] text-center px-2">
                <div
                  className="text-[40px] font-bold leading-none"
                  style={{
                    fontFamily: "Nunito Sans",
                    color: "rgba(34, 197, 94, 1)",
                  }}
                >
                  {site.rating.toFixed(1)}
                </div>
              </div>

              {/* Button - 15% */}
              <div className="flex-[0_0_15%] text-center pl-2">
                <Button className="bg-green-primary hover:bg-green-hover text-white font-bold px-3 py-2 rounded-md text-xs w-[120px] mx-auto transition-colors">
                  GET BONUS
                </Button>
              </div>
            </div>
          </div>
        </Link>

        {/* Terms - Expandable */}
        <div className="border-t border-gray-200 text-gray-500 text-[7px] px-4 py-3 bg-gray-100">
          <div className="text-center">
            <div className={`leading-tight transition-all duration-300 ${!isTermsExpanded ? "line-clamp-2" : ""}`}>
              {site.terms}
            </div>
            {showReadMore && (
              <button
                onClick={handleTermsClick}
                className="text-gray-500  hover:text-blue-800 underline mt-1 text-[8px] font-medium"
              >
                {isTermsExpanded ? "Read less" : "Read more"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div
        className={`md:hidden ${cardBgColor} rounded-md border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden cursor-pointer`}
      >
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          {/* Badge for top positions - more square */}
          {shouldShowBadge && (
            <div className="absolute top-0 left-0 bg-green-primary text-white px-2 py-0.5 rounded-tl-md rounded-bl-md text-[10px] font-bold z-20">
              {getBadgeText()}
            </div>
          )}

          {/* Main Content Container */}
          <div className="grid grid-cols-[auto_1fr_1fr] h-[175px]">
            {/* Rank Number Column - на лівому краю */}
            <div className="flex items-center justify-center px-2 bg-[rgb(242,242,242)]">
              <div className="text-2xl font-bold text-black">{rank}</div>
            </div>

            {/* Left Column: Gray background with logo and rating */}
            <div className="bg-[rgb(242,242,242)] flex flex-col justify-between items-center py-2 px-2">
              {/* Logo */}
              <div className="flex-1 flex items-center justify-center">
                <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-16 w-auto object-contain" />
              </div>

              {/* Bottom section with stars and rating */}
              <div className="grid grid-cols-2 gap-1 w-full">
                {/* Left column: Stars and Rate it */}
                <div className="flex flex-col items-center justify-center">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < filledStars || (i === filledStars && hasHalfStar)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                          }`}
                      />
                    ))}
                  </div>
                  {/* Rate it text */}
                  <div className="text-[12px] text-black text-center leading-tight">
                    Rate it
                    <br />({formatVotes(site.votes)})
                  </div>
                </div>

                {/* Right column: Score */}
                <div className="flex flex-col items-center justify-center">
                  <div className="text-3xl font-bold leading-none" style={{ color: "rgba(34, 197, 94, 1)" }}>
                    {site.rating.toFixed(1)}
                  </div>
                  <div className="text-[10px] text-black font-bold mt-1">Our Score</div>
                </div>
              </div>
            </div>

            {/* Right Column: Bonus and Button */}
            <div className="flex flex-col justify-between py-2 px-2">
              {/* Welcome Bonus */}
              <div className="text-center flex-1 flex flex-col justify-center">
                <div className="text-[10px] text-black uppercase font-normal mb-1">WELCOME BONUS</div>
                <div className="text-lg font-bold text-gray-900 leading-tight mb-1">{site.bonus}</div>
                <div className="text-lg font-bold text-gray-900 leading-tight text-nowrap">{site.welcomeOffer}</div>
              </div>

              {/* Button - more square */}
              <div className="flex justify-center mt-2">
                <Button className="bg-green-primary hover:bg-green-hover text-white font-bold px-3 py-1.5 rounded-md text-sm transition-colors w-full">
                  GET BONUS
                </Button>
              </div>
            </div>
          </div>
        </Link>

        {/* Terms - Expandable */}
        <div className="border-t border-gray-200 bg-gray-100 px-2 py-2">
          <div className="text-center">
            <div
              className={`text-gray-500 text-[8px] leading-[1.4] transition-all duration-300 ${!isTermsExpanded ? "line-clamp-2" : ""
                }`}
            >
              {site.terms}
            </div>
            {showReadMore && (
              <button
                onClick={handleTermsClick}
                className="text-gray-500  hover:text-blue-800 underline text-[9px] font-medium"
              >
                {isTermsExpanded ? "Read less" : "Read more"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
