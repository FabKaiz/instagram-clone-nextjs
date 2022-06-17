import { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react'
import Story from './Story'
import { useSession } from 'next-auth/react'

const Stories = () => {
  const { data: session } = useSession()
  const [users, setUsers] = useState([])

  useEffect(() => {
    const usersList = [...Array(20)].map(() => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
    }))

    setUsers(usersList)
  }, [])

  return (
    <div className="flex space-x-3 p-4 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <div className="relative">
          <Story
            img={session?.user?.image}
            username={session?.user?.username}
          />
          <span className="absolute right-[2px] top-[32px] border-2 border-white inline-flex items-center justify-center px-[4.4px] pt-[0px] text-md font-bold leading-none text-red-100 bg-blue-500 rounded-full">
            <div className="pb-[3px]">+</div>
          </span>
        </div>
      )}
      {users.map((user) => (
        <Story key={user.userId} img={user.avatar} username={user.username} />
      ))}
    </div>
  )
}

export default Stories
