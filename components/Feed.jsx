import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'
import Posts from './Posts'
import Stories from './Stories'
import { useSession } from 'next-auth/react'
import Welcome from './Welcome'
import Footer from './Footer'

const Feed = () => {
  const { data: session } = useSession()

  return (
    <main
      className={`grid grid-cols-1 md:grid-cols-2 md:max-w-2xl xl:grid-cols-3 xl:max-w-3xl mx-auto ${
        !session && '!grid-cols-1 !max-w-3xl'
      }`}
    >
      {session ? (
        <>
          <section className="col-span-2">
            <Stories />
            <Posts />
          </section>
          <section className="hidden xl:inline-grid md:col-span-1">
            <div className="fixed">
              <MiniProfile />
              <Suggestions />
              <Footer customClass="flex-col ml-5 !items-start text-left !h-[125px]" />
            </div>
          </section>
        </>
      ) : (
        <Welcome
          buttonText="Go to Sign In page"
          buttonClass="px-5 py-2 font-semibold bg-blue-500 text-white rounded-lg"
          smallText="Click on the button below to sign in with Google 😊"
          bigText="Welcome to this fake Instagram!"
        />
      )}
    </main>
  )
}

export default Feed
