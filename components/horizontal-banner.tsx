"use client"

import Link from "next/link"
import type { HorizontalBanner as HorizontalBannerType } from "../types"
import Image from "next/image"

interface HorizontalBannerProps {
  banner: HorizontalBannerType
}

export function HorizontalBanner({ banner }: HorizontalBannerProps) {
  return (
    <Link
      href={banner.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block hover:scale-[1.02] transition-all duration-300"
    >
      <div className="relative overflow-hidden shadow-lg h-[70px] sm:h-[140px] md:h-[160px] lg:h-[140px] xl:h-[200px] w-full cursor-pointer hover:shadow-2xl transition-all duration-300">
        <Image
          src={banner.backgroundImage || "/placeholder.svg"}
          alt="Banner"
          fill
          className="object-cover"
          style={{ objectPosition: "center" }}
        />

        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex">
          {/* Left side - Special Offer vertical tab */}
          <div
            className="h-full flex items-center justify-center w-5 sm:w-5 md:w-6 lg:w-8 xl:w-10 relative flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
              borderRadius: "0 6px 6px 0",
            }}
          >
            {/* SVG Dotted border - only top, right, bottom */}
            <svg
              className="absolute inset-0.5"
              style={{
                width: "calc(100% - 4px)",
                height: "calc(100% - 4px)",
                borderRadius: "0 4px 4px 0",
              }}
            >
              {/* Top line */}
              <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="1" strokeDasharray="8 4" />
              {/* Right line */}
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="1" strokeDasharray="8 4" />
              {/* Bottom line */}
              <line x1="100%" y1="100%" x2="0" y2="100%" stroke="white" strokeWidth="1" strokeDasharray="8 4" />
            </svg>

            <div
              className="text-white font-black text-[6px] sm:text-[7px] md:text-[8px] lg:text-[10px] xl:text-[12px] tracking-wide relative z-10 px-0.5"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                letterSpacing: "0.05em",
                transform: "rotate(180deg)",
                lineHeight: "1",
              }}
            >
              SPECIAL OFFER
            </div>
          </div>

          {/* Main content area - ЄДИНИЙ LAYOUT ДЛЯ ВСІХ ЕКРАНІВ */}
          <div className="flex-1 flex items-center justify-center px-1 sm:px-2 md:px-3 lg:px-4 xl:px-6">
            <div className="w-full h-full flex flex-col justify-center items-center py-1 sm:py-2 lg:py-3 gap-0.5 sm:gap-1 lg:gap-2">
              {/* Logo */}
              <div className="flex items-center justify-center">
                <img
                  src={banner.logo || "/placeholder.svg"}
                  alt={banner.name}
                  className="h-[16px] sm:h-[24px] md:h-[30px] lg:h-[28px] xl:h-[35px] w-auto object-contain"
                />
              </div>

              {/* Offer text */}
              <div className="flex items-center justify-center">
                <div className="text-white text-[14px] sm:text-[24px] md:text-[30px] lg:text-[32px] xl:text-[38px] font-bold drop-shadow-lg text-center leading-tight">
                  {banner.welcomeOffer}
                </div>
              </div>

              {/* Button */}
              <div className="flex items-center justify-center">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-3 py-1 sm:px-[24px] md:px-[32px] lg:px-[36px] xl:px-[44px] sm:py-[6px] md:py-[8px] lg:py-[10px] xl:py-[12px] rounded-full text-[8px] sm:text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] transition-colors shadow-lg whitespace-nowrap min-w-[70px] sm:min-w-[120px] md:min-w-[140px] lg:min-w-[140px] xl:min-w-[160px]">
                  CLAIM BONUS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
