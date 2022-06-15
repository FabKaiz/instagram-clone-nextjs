import { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react'
import Story from './Story'

const Stories = () => {
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
      {users.map((user) => (
        <Story key={user.userId} img={user.avatar} username={user.username} />
      ))}
    </div>
  )
}

export default Stories
