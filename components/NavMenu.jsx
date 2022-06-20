import {
  HeartIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
  LogoutIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

const NavMenu = () => {
  const { data: session } = useSession()
  const [toggleMenu, setToggleMenu] = useState(false)
  const [open, setOpen] = useRecoilState(modalState)

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
          <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          <div className="relative">
            <img
              onClick={() => setToggleMenu(!toggleMenu)}
              src={session?.user?.image}
              alt="profil pic"
              className=" h-10 w-10 cursor-pointer rounded-full"
              referrerPolicy="no-referrer"
            />
            {toggleMenu && (
              <div className="absolute z-20 bg-white py-2 px-4 top-11 right-0 border drop-shadow-lg rounded w-36">
                <button onClick={signOut} className="flex items-center">
                  <LogoutIcon className="w-4" />
                  <p className="ml-2">Log Out</p>
                </button>
              </div>
            )}
          </div>
          {toggleMenu && (
            <div
              onClick={() => setToggleMenu(false)}
              className="absolute top-0 right-0 bg-black/10 w-screen h-screen"
            ></div>
          )}
        </>
      ) : (
        <button onClick={signIn}>Sign In</button>
      )}
    </div>
  )
}

export default NavMenu
