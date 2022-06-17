import { getProviders, signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Footer from '../../components/Footer'
import Welcome from '../../components/Welcome'

const SignIn = ({ providers }) => {
  const router = useRouter()

  const { data: session } = useSession({})

  if (session) router.push('/')

  return (
    <>
      {Object.values(providers).map((provider) => (
        <Welcome
          key={provider.name}
          buttonText={`Sign in with ${provider.name}`}
          buttonClass="px-8 py-3 font-semibold text-black flex items-center justify-center bg-white rounded-lg border border-blue-500 hover:bg-blue-100 transition-colors duration-300 ease"
          bigText="Welcome to Fakestagram!"
          disclaimerText="This is not the REAL app, it is built for educational purposes only."
          smallText="Click on the button below to sign in with Google 😊"
          imgSrc="https://i.ibb.co/7btBM3m/icons8-google-48.png"
          alt={provider.name}
          imgClass="ml-4 w-8"
          buttonClick={() => signIn(provider.id, { callbackUrl: '/' })}
        />
      ))}
      <Footer customClass="w-screen" />
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

export default SignIn
