import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram 2.0 - FabKaiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Feed />
    </div>
  )
}

export default Home
