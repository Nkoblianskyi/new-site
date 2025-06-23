import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="text-white mb-4">
      {/* Mobile Header - Ultra Compact */}
      <div className="md:hidden h-[30px] flex items-center justify-center px-2">
        <Link href="/" className="flex items-center gap-1">
          <div className="w-8 h-8 bg-transparent rounded-full flex items-center justify-center flex-shrink-0">
            <Image src="/logo.png" alt="Logo" width={30} height={20} className="w-6 h-5" />
          </div>
          <h1 className="text-sm font-bold whitespace-nowrap leading-tight">
            <span className="text-green-primary">Betting</span>
            <span className="text-white"> Best</span>
            <span className="text-orange-500"> Irish</span>
            <span className="text-green-primary"> Sites</span>
          </h1>
        </Link>
      </div>

      {/* Desktop/Tablet Header */}
      <div className="hidden md:flex container mx-auto px-2 sm:px-4 items-center justify-center h-[60px]">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 lg:w-14 lg:h-14 bg-transparent rounded-full flex items-center justify-center flex-shrink-0">
            <Image src="/logo.png" alt="Logo" width={60} height={60} className="sm:w-10 sm:h-12 lg:w-16 lg:h-16" />
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
