import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Moment from 'react-moment'
import { db } from '../firebase'
import PostButtons from './PostButtons'
import PostComments from './PostComments'
import PostHeader from './PostHeader'
import PostInputBox from './PostInputBox'

const Post = ({ id, username, userImg, img, caption, timestamp }) => {
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
    [db, id]
  )
  return (
    <div className="bg-white my-7 border rounded-lg">
      <PostHeader username={username} userImg={userImg} />

      <img
        className="sm:max-h-[680px] max-h-[490px] object-contain w-full"
        src={img}
        alt="image"
      />
      <PostButtons id={id} />
      <div className="pl-3 py-1 truncate">
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </div>
      <PostComments comments={comments} />
      <Moment fromNow className="ml-3 text-gray-400 text-xs">
        {timestamp}
      </Moment>
      <PostInputBox id={id} />
    </div>
  )
}

export default Post
