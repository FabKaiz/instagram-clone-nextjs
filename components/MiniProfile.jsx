import { useSession, signOut } from 'next-auth/react'

const MiniProfile = () => {
  const { data: session } = useSession()

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src={session?.user?.image}
        alt="profil pic"
        className="h-16 w-16 border p-[2px] cursor-pointer rounded-full"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">{session?.user?.name}</h3>
      </div>
      <button onClick={signOut} className="text-blue-400 text-sm font-semibold">
        Sign Out
      </button>
    </div>
  )
}

export default MiniProfile
