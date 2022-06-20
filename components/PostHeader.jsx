import { DotsHorizontalIcon } from '@heroicons/react/outline'

const PostHeader = ({ userImg, username }) => {
  return (
    <div className="flex items-center p-3">
      <img
        className="rounded-full h-8 w-8 object-cover mr-3"
        src={userImg}
        alt="user pic"
      />
      <p className="flex-1 font-bold">{username}</p>
      <DotsHorizontalIcon className="h-5" />
    </div>
  )
}

export default PostHeader
