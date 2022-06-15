import PostButtons from './PostButtons'
import PostHeader from './PostHeader'
import PostInputBox from './PostInputBox'

const Post = ({ id, username, userImg, img, caption }) => {
  return (
    <div className="bg-white my-7 border rounded">
      <PostHeader username={username} userImg={userImg} />

      <img className="object-cover w-full" src={img} alt="image" />
      <PostButtons />
      {/* likes */}
      <div className="p-5 truncate">
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </div>
      {/* comments */}

      <PostInputBox />
    </div>
  )
}

export default Post
