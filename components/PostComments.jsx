import moment from 'moment'
import Moment from 'react-moment'

moment.defineLocale('en-short', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: '1s',
    ss: '%ss',
    m: '1m',
    mm: '%dm',
    h: '1h',
    hh: '%dh',
    d: '1d',
    dd: '%dd',
    M: '1M',
    MM: '%dM',
    y: '1Y',
    yy: '%dY',
  },
})

moment.updateLocale('en-short', 'en')

const PostComments = ({ comments }) => {
  return (
    <div>
      {comments.length > 0 && (
        <>
          {comments.length === 1 ? (
            ''
          ) : (
            <p className="ml-3 text-gray-500 cursor-pointer">
              View all {comments.length} comment
              {comments.length === 1 ? '' : 's'}
            </p>
          )}
          <div className="ml-3 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="flex items-center justify-between"
              >
                <div className="">
                  <span className="font-bold mr-1">
                    {comment.data().username}
                  </span>
                  {comment.data().comment}
                </div>
                <Moment fromNow ago className="mr-5 text-gray-400 text-sm">
                  {comment.data().timestamp?.toDate()}
                </Moment>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default PostComments
