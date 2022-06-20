import { EmojiHappyIcon } from '@heroicons/react/outline'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { db } from '../firebase'

const PostInputBox = ({ id }) => {
  const [comment, setComment] = useState('')
  const { data: session } = useSession()

  const sendComment = async (e) => {
    e.preventDefault()

    const commentToSend = comment
    setComment('')

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    })
  }

  return (
    <div>
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7 cursor-pointer" />
        <input
          values={comment}
          onChange={(e) => setComment(e.target.value)}
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button
          type="submit"
          disabled={!comment.trim()}
          onClick={sendComment}
          className="font-semibold text-blue-400"
        >
          Post
        </button>
      </form>
    </div>
  )
}

export default PostInputBox
