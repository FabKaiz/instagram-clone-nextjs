import {
  HeartIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { signOut, useSession } from 'next-auth/react'

const NavMenu = () => {
  const { data: session } = useSession()

  return (
    <div className="flex items-center justify-end space-x-4">
      <HomeIcon onClick={() => router.push('/')} className="navBtn" />
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
  )
}

export default NavMenu
