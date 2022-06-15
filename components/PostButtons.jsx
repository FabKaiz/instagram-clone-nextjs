import {
  BookmarkAltIcon,
  ChatIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'

const PostButtons = () => {
  return (
    <div className="flex justify-between px-3 py-4">
      <div className="flex space-x-4 items-center">
        <HeartIcon className="btn" />
        <ChatIcon className="btn" />
        <PaperAirplaneIcon className="btn rotate-45 w-6 -mt-1" />
      </div>

      <BookmarkAltIcon className="btn" />
    </div>
  )
}

export default PostButtons
