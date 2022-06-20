import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import PostButtons from './PostButtons'
import PostComments from './PostComments'
import PostHeader from './PostHeader'
import PostInputBox from './PostInputBox'

const Post = ({ id, username, userImg, img, caption }) => {
  const [comments, setComments] = useState([])

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'desc')
        ),
        (snapshot) => {
          setComments(snapshot.docs)
        }
      ),
    [db]
  )
  return (
    <div className="bg-white my-7 border rounded-lg">
      <PostHeader username={username} userImg={userImg} />

      <img className="object-cover w-full" src={img} alt="image" />
      <PostButtons />
      {/* likes */}
      <div className="pl-5 py-1 truncate">
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </div>
      <PostComments comments={comments} />
      <PostInputBox id={id} />
    </div>
  )
}

export default Post
