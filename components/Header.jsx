import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const Header = () => {
  const { data: session } = useSession()
  const router = useRouter()

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        {/* Logo for big screen */}
        <div
          onClick={() => router.push('/')}
          className="relative hidden lg:inline-grid w-24 cursor-pointer"
        >
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
          <Image
            src="https://links.papareact.com/jjm"
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Search bar */}
        <div className="max-w-xs">
          <div className="mt-1 p-3 rounded-md relative ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Buttons group right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={() => router.push('/')} className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="rotate-45" />
                <div className="absolute -top-1 -right-2 text-xs w-4 h-4 text-white bg-red-500 rounded-full flex items-center justify-center">
                  2
                </div>
              </div>
              <PlusCircleIcon className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />

              <img
                onClick={signOut}
                src={session?.user?.image}
                alt="profil pic"
                className="h-10 w-10 cursor-pointer rounded-full"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
