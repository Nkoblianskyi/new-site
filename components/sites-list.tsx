"use client"

import { Card } from "./card"
import { HorizontalBanner } from "./horizontal-banner"
import { bettingSites, horizontalBanners } from "../data/mock-data"
import type { BettingSite } from "../types"

export function SitesList() {
  return (
    <div className="space-y-2 w-full">
      {bettingSites.map((site: BettingSite, index: number) => (
        <div key={site.id} className="w-full">
          <Card site={site} rank={index + 1} />
          {/* Банер після 3-го елемента */}
          {index === 2 && (
            <div className="my-3 w-full">
              <HorizontalBanner banner={horizontalBanners[0]} />
            </div>
          )}
          {/* Банер після 6-го елемента */}
          {index === 5 && (
            <div className="my-3 w-full">
              <HorizontalBanner banner={horizontalBanners[1]} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
