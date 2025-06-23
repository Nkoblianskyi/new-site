"use client"

import type React from "react"
import { SidebarBanner } from "./sidebar-banner"
import { verticalSidebarBanners } from "../data/mock-data"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="container mx-auto px-1 max-w-[1580px] relative">
        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[160px_1fr_160px] gap-1 lg:gap-2">
          {/* Left Column - Only on screens 1024px+ */}
          <div className="hidden lg:block w-full">
            {/* Empty space for hero height + some list items - опущено на 400px */}
            <div style={{ height: "1800px" }}></div>
            {/* Left Sidebar at middle of list - ВИКОРИСТОВУЄ BETVICTOR (index 0) */}
            <div className="w-full max-w-[160px]">
              <SidebarBanner position="left" site={verticalSidebarBanners[0]} />
            </div>
          </div>

          {/* Center Column - Hero + List */}
          <div className="w-full min-w-0 px-1">{children}</div>

          {/* Right Column - Only on screens 1024px+ */}
          <div className="hidden lg:block w-full">
            {/* Add spacing for header height */}
            <div style={{ height: "0px" }}></div>
            {/* Right Sidebar at hero level - ВИКОРИСТОВУЄ BOYLESPORTS (index 1) */}
            <div className="w-full max-w-[160px]">
              <SidebarBanner position="right" site={verticalSidebarBanners[1]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
