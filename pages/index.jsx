import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Feed from '../components/Feed'
import Header from '../components/Header'

const Home = () => {
  const router = useRouter()

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/auth/signin')
    },
  })

  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram 2.0 - FabKaiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {session && (
        <>
          <Header />
          <Feed />
        </>
      )}
    </div>
  )
}

export default Home
