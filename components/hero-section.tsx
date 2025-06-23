"use client"
import { Shield, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

export function HeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  // Автоматичне оновлення дати кожного місяця
  const getCurrentMonthYear = () => {
    const now = new Date()
    const monthNames = [
      "JANUARY",
      "FEBRUARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOBER",
      "NOVEMBER",
      "DECEMBER",
    ]
    const currentMonth = monthNames[now.getMonth()]
    const currentYear = now.getFullYear()
    return `${currentMonth} ${currentYear}`
  }

  return (
    <>
      {/* Hero Section - Desktop - РОЗТЯГНУТИЙ КОНТЕНТ */}
      <div
        className="hidden lg:block relative overflow-hidden text-white mb-2 w-full h-[200px] lg:h-[290px] xl:h-[290px] 2xl:h-[290px]"
        style={{ background: "rgba(0, 0, 0, 0.70)" }}
      >
        <div className="h-full flex flex-col justify-between text-center px-4 lg:px-6 xl:px-8 py-4 lg:py-5 gap-2 mt-3">
          {/* Верхня частина */}
          <div className="space-y-1">
            {/* 1. Заголовок */}
            <h1 className="text-lg lg:text-[40px] xl:text-[40px] 2xl:text-[40px] font-bold drop-shadow-lg">
              TOP <span className="text-green-primary">IRISH</span> BOOKMAKERS
            </h1>

            {/* 2. Підзаголовок з датою */}
            <h2 className="text-[32px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] font-bold">
              REVIEWED FOR {getCurrentMonthYear()}
            </h2>
          </div>

          {/* Середня частина */}
          <div className="space-y-2 lg:space-y-2 mx-auto">
            {/* 3. Опис */}
            <p className="text-xs lg:text-xs xl:text-sm 2xl:text-sm leading-tight">
              Finding reliable bookmakers requires expert knowledge and thorough research. Fortunately, our
              comprehensive analysis eliminates guesswork by providing detailed insights into Ireland's premier betting
              platforms.
            </p>

            <p className="text-xs lg:text-sm xl:text-sm 2xl:text-sm leading-tight">
              Starting with exceptional welcome bonuses, meticulously evaluated by our professional review team.
            </p>

            {/* 4. Дрібний текст про терміни */}
            <p className="text-[10px] lg:text-xs xl:text-xs 2xl:text-xs text-gray-300">
              *Individual bonus terms apply to each offer. Restricted to New Players. Must be 18+
            </p>
          </div>

          {/* Нижня частина */}
          <div className="space-y-2 lg:space-y-4 mt-1">
            {/* 5. Бейджі */}
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4 xl:gap-6">
              <div className="flex items-center gap-1 lg:gap-2">
                <Shield className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="text-[10px] lg:text-xs xl:text-sm font-bold">100% Legal</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <div className="flex gap-0.5">
                  <div className="w-2 h-1.5 lg:w-3 lg:h-2 bg-green-primary"></div>
                  <div className="w-2 h-1.5 lg:w-3 lg:h-2 bg-white"></div>
                  <div className="w-2 h-1.5 lg:w-3 lg:h-2 bg-orange-500"></div>
                </div>
                <span className="text-[10px] lg:text-xs xl:text-sm font-bold">IE Regulated</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <Clock className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="text-[10px] lg:text-xs xl:text-sm font-bold">Fast Withdrawals</span>
              </div>
            </div>

            {/* 6. Нижній текст */}
            <div className="text-[9px] lg:text-[10px] xl:text-xs leading-tight text-left">
              Play responsibly. Wagering and T&Cs apply.
              <button onClick={onAdvertiserModalOpen} className="underline ml-1 hover:text-green-400 transition-colors">
                Advertiser Disclosure
              </button>
              <span> | </span>
              <button onClick={onTermsModalOpen} className="underline hover:text-green-400 transition-colors">
                18+ T&Cs Apply
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Tablet - РОЗТЯГНУТИЙ КОНТЕНТ */}
      <div
        className="hidden md:block lg:hidden h-[160px] md:h-[180px] relative overflow-hidden text-white mb-2 w-full"
        style={{ background: "rgba(0, 0, 0, 0.70)" }}
      >
        <div className="h-full flex flex-col justify-between text-center px-4 md:px-6 py-3">
          {/* Верхня частина */}
          <div className="space-y-1">
            <h1 className="text-xl md:text-2xl font-bold">
              TOP <span className="text-green-primary">IRISH</span> BOOKMAKERS
            </h1>
            <h2 className="text-base md:text-lg font-bold">REVIEWED FOR {getCurrentMonthYear()}</h2>
          </div>

          {/* Середня частина */}
          <div className="flex justify-center gap-4 md:gap-6">
            <div className="flex items-center gap-1 md:gap-2">
              <Shield className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-bold">100% Legal</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <div className="flex gap-0.5 md:gap-1">
                <div className="w-2 h-1.5 md:w-3 md:h-2 bg-green-primary"></div>
                <div className="w-2 h-1.5 md:w-3 md:h-2 bg-white"></div>
                <div className="w-2 h-1.5 md:w-3 md:h-2 bg-orange-500"></div>
              </div>
              <span className="text-xs md:text-sm font-bold">IE Regulated</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Clock className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-bold">Fast Withdrawals</span>
            </div>
          </div>

          {/* Нижня частина */}
          <div className="text-[10px] md:text-xs">
            Play responsibly; Wagering and T&Cs apply.
            <button onClick={onAdvertiserModalOpen} className="underline ml-1">
              Advertiser Disclosure
            </button>
            <span> | </span>
            <button onClick={onTermsModalOpen} className="underline">
              18+ T&Cs Apply
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section - Mobile - ULTRA COMPACT 140px MAX */}
      <div
        className="md:hidden relative overflow-hidden text-white rounded-lg mb-2 w-full h-[140px]"
        style={{
          backgroundImage: "url(/bg-7.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70 rounded-lg"></div>

        {/* Combined Header + Hero content - ULTRA COMPACT */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header section - COMPACT */}

          {/* Hero content - ULTRA COMPACT */}
          <div className="flex-1 px-2 text-center flex flex-col justify-center">
            {/* Main titles - COMPACT */}
            <div className="mb-2">
              <h1 className="text-lg font-bold mb-1 drop-shadow-lg leading-tight">
                TOP <span className="text-green-primary">IRISH</span> BOOKMAKERS
              </h1>
              <h2 className="text-[12px] font-bold drop-shadow-lg leading-tight">
                REVIEWED FOR {getCurrentMonthYear()}
              </h2>
            </div>

            {/* Feature badges - ULTRA COMPACT */}
            <div className="flex justify-center gap-3 mb-2">
              <div className="flex flex-col items-center">
                <Shield className="w-4 h-4 mb-0.5" />
                <span className="text-[8px] font-bold leading-tight">100% Legal</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex gap-0.5 mb-0.5">
                  <div className="w-1 h-3 bg-green-primary"></div>
                  <div className="w-1 h-3 bg-white"></div>
                  <div className="w-1 h-3 bg-orange-500"></div>
                </div>
                <span className="text-[8px] font-bold leading-tight">IE Regulated</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-4 h-4 mb-0.5" />
                <span className="text-[8px] font-bold leading-tight">Fast Withdrawals</span>
              </div>
            </div>

            {/* Bottom text - ULTRA COMPACT */}
            <div className="text-[7px] leading-tight">
              <div>Play responsibly. Wagering and T&Cs apply.</div>
              <div>
                <button onClick={onAdvertiserModalOpen} className="underline hover:text-green-400">
                  Advertiser Disclosure
                </button>
                <span> | </span>
                <button onClick={onTermsModalOpen} className="underline hover:text-green-400">
                  18+ T&Cs Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
