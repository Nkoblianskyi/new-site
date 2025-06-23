import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="text-white h-[60px] mb-4">
      <div className="container mx-auto px-2 sm:px-4 flex items-center justify-center h-full">
        <Link href="/" className="flex items-center gap-1">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Image src="/logo.png" alt="Irish Flag" width={32} height={32} />
          </div>
          <h1 className="text-xs sm:text-lg md:text-xl lg:text-3xl font-bold whitespace-nowrap">
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
