import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'

const Home = () => {
  const router = useRouter()

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      // router.push('/auth/signin')
    },
  })

  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Fakestagram - FabKaiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {session && (
        <>
          <Feed />
          <Modal />
        </>
      )}
    </div>
  )
}

export default Home
