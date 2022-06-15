import { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'

const Suggestions = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const usersList = [...Array(8)].map(() => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
      connections: faker.internet.userName(),
    }))

    setUsers(usersList)
  }, [])

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-900 font-semibold">See All</button>
      </div>

      {users.map((user) => (
        <div
          key={user.userId}
          className="flex items-center justify-between mt-3 cursor-pointer"
        >
          <img
            src={user.avatar}
            alt="user avatar"
            className="rounded-full border w-10 h-10 p-[2px]"
          />

          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{user.username}</h2>
            <h3 className="text-xs text-gray-400 troncate">
              Followed by {user.connections}
            </h3>
          </div>
          <button className="text-blue-400 text-xs font-bold">Follow</button>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
