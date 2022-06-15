import { EmojiHappyIcon } from '@heroicons/react/outline'

const PostInputBox = () => {
  return (
    <div>
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7 cursor-pointer" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  )
}

export default PostInputBox
