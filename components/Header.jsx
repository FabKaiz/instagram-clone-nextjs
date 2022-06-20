import Image from 'next/image'
import { useRouter } from 'next/router'
import NavMenu from './NavMenu'
import NavSearch from './NavSearch'

const Header = () => {
  const router = useRouter()

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between min-h-[66px] max-w-6xl mx-5 xl:mx-auto">
        {/* Logo for big screen */}
        <div
          onClick={() => router.push('/')}
          className="relative hidden lg:inline-grid w-24 cursor-pointer"
        >
          <p className="absolute font-bold rounded-md py-[1.4px] px-2 text-white bg-red-500 text-xs z-10 top-2 -left-3 -rotate-12">
            Fake
          </p>
          <Image
            src="https://links.papareact.com/ocw"
            alt="logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        {/* Logo for small screen */}
        <div
          onClick={() => router.push('/')}
          className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer"
        >
          <p className="absolute font-bold rounded-md py-[1.4px] px-2 text-white bg-red-500 text-xs z-10 top-1 -left-4 -rotate-12">
            Fake
          </p>
          <Image
            src="https://links.papareact.com/jjm"
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Search bar */}
        <NavSearch />

        {/* Buttons group right */}
        <NavMenu />
      </div>
    </div>
  )
}

export default Header
