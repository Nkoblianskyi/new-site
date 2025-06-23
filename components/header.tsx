import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="text-white mb-1">
      {/* Mobile Header - Ultra Compact */}
      <div className="md:hidden h-[32px] flex items-center justify-center px-2">
        <Link href="/" className="flex items-center gap-0.5">
          <div className="w-5 h-5 bg-transparent rounded-full flex items-center justify-center flex-shrink-0">
            <Image src="/logo.png" alt="Logo" width={20} height={20} className="w-5 h-5" />
          </div>
          <h1 className="text-[10px] font-bold whitespace-nowrap leading-tight text-center">
            <span className="text-green-primary">Betting</span>
            <span className="text-white"> Best</span>
            <span className="text-orange-500"> Irish</span>
            <span className="text-green-primary"> Sites</span>
          </h1>
        </Link>
      </div>

      {/* Desktop/Tablet Header */}
      <div className="hidden md:flex container mx-auto px-2 sm:px-4 items-center justify-center h-[60px]">
        <Link href="/" className="flex items-center gap-1">
          <div className="w-7 h-7 lg:w-12 lg:h-12 bg-transparent rounded-full flex items-center justify-center flex-shrink-0">
            <Image src="/logo.png" alt="Logo" width={48} height={48} className="sm:w-8 sm:h-8 lg:w-12 lg:h-12" />
          </div>
          <h1 className="text-lg md:text-xl lg:text-3xl font-bold whitespace-nowrap">
            <span className="text-green-primary">Betting</span>
            <span className="text-white"> Best</span>
            <span className="text-orange-500"> Irish</span>
            <span className="text-green-primary"> Sites</span>
          </h1>
        </Link>
      </div>
    </header>
  )
}
