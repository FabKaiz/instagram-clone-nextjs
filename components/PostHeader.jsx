import { DotsHorizontalIcon } from '@heroicons/react/outline'

const PostHeader = ({ userImg, username }) => {
  return (
    <div className="flex items-center p-5">
      <img
        className="rounded-full h-12 w-12 object-cover border p-1 mr-3"
        src={userImg}
        alt="user pic"
      />
      <p className="flex-1 font-bold">{username}</p>
      <DotsHorizontalIcon className="h-5" />
    </div>
  )
}

export default PostHeader