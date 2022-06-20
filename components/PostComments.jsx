const PostComments = ({ comments }) => {
  return (
    <div>
      {comments.length > 0 && (
        <>
          {comments.length === 1 ? (
            ''
          ) : (
            <p className="ml-5 text-gray-500 cursor-pointer">
              View all {comments.length} comment{' '}
              {comments.length === 1 ? '' : 's'}
            </p>
          )}
          <div className="ml-5 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
            {comments.map((comment) => (
              <div key={comment.id}>
                <span className="font-bold mr-1">
                  {comment.data().username}
                </span>
                {comment.data().comment}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default PostComments
