import Link from 'next/link'

const Welcome = ({
  buttonText,
  buttonClass,
  smallText,
  bigText,
  imgSrc,
  alt,
  imgClass,
  buttonClick,
  disclaimerText,
}) => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-68px)] md:h-[calc(100vh-68px)]">
      <div className="col-span-2 flex flex-col md:flex-row items-center justify-center">
        <div>
          <img
            src="https://i.ibb.co/tZL25m7/instaz-removebg-preview.png"
            alt="logo"
            className="w-40 sm:w-80"
          />
        </div>

        <div className="flex flex-col items-center justify-center mt-8 md:mt-0 md:ml-8">
          <div className="relative">
            <p className="absolute font-bold rounded-md py-[1.4px] px-2 text-white bg-red-500 md:text-2xl -top-3 -left-6 -rotate-12">
              Fake
            </p>
            <img
              src="https://links.papareact.com/ocw"
              alt="logo"
              className="w-40 md:w-80"
            />
          </div>
          <h1 className="text-lg md:text-3xl mb-14 text-center max-w-md">
            {bigText}
          </h1>
          <h3 className="text-lg md:text-xl mb-14 text-center max-w-sm">
            {disclaimerText}
          </h3>
          <h3 className="text-lg md:text-xl mb-8 text-center max-w-sm">
            {smallText}
          </h3>
          <Link href="/auth/signin">
            <button onClick={buttonClick} className={buttonClass}>
              {buttonText}{' '}
              {imgSrc && <img className={imgClass} src={imgSrc} alt={alt} />}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Welcome
