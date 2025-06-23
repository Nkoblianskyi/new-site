"use client"

import Link from "next/link"

interface SidebarBannerProps {
  position: "left" | "right"
  site: {
    id: number
    name: string
    logo: string
    welcomeOffer: string
    link: string
    backgroundImage: string
  }
}

export function SidebarBanner({ position, site }: SidebarBannerProps) {
  console.log(`${position} sidebar data:`, site)

  return (
    <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] cursor-pointer h-[730px] w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${site.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col">
          {/* 1. SPECIAL OFFER Tab */}
          <div
            className="flex-shrink-0 h-[45px] flex items-center justify-center relative mx-auto mt-0"
            style={{
              background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
              borderRadius: "0 0 6px 6px",
              width: "90%",
            }}
          >
            {/* Dotted border - тільки ліва, права і нижня лінії */}
            <svg
              className="absolute inset-1"
              style={{
                width: "calc(100% - 8px)",
                height: "calc(100% - 8px)",
                borderRadius: "0 0 4px 4px",
              }}
            >
              {/* Left line */}
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="1" strokeDasharray="6 3" />
              {/* Right line */}
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="1" strokeDasharray="6 3" />
              {/* Bottom line */}
              <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="1" strokeDasharray="6 3" />
            </svg>
            <div className="text-white font-black text-xs tracking-widest relative z-10">SPECIAL OFFER</div>
          </div>

          {/* 2. LOGO Section */}
          <div className="flex-shrink-0 h-[80px] flex items-center justify-center mx-3 mt-2">
            <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-18 w-auto object-contain" />
          </div>

          {/* 3. BONUS Text */}
          <div className="flex-shrink-0 px-4 py-4 text-center mt-[-20px]">
            <div className="text-white text-3xl font-black leading-tight drop-shadow-lg">{site.welcomeOffer}</div>
          </div>

          {/* 4. BUTTON - NARROWER HEIGHT, SINGLE LINE */}
          <div className="flex-shrink-0 px-4 pb-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-black px-4 py-2 rounded-full text-xs transition-colors shadow-lg w-full whitespace-nowrap">
              CLAIM BONUS
            </button>
          </div>

          {/* 5. Bottom spacing for sports imagery (part of background) */}
          <div className="flex-1"></div>
        </div>
      </div>
    </Link>
  )
}
