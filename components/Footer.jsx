const Footer = ({ customClass }) => {
  return (
    <footer
      className={`${customClass} p-4 rounded-lg flex items-center justify-between md:p-6`}
    >
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{' '}
        <a href="https://flowbite.com" className="hover:underline">
          Fakestagram™
        </a>
      </span>
      <ul className="mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          Coded with ❤️ by{' '}
          <a
            href="https://github.com/FabKaiz"
            className="mr-4 hover:underline md:mr-6"
          >
            FabKaiz
          </a>
        </li>
      </ul>
      <ul className="flex flex-col sm:flex-row items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://www.linkedin.com/in/fabien-chareun/"
            className="mr-4 hover:underline md:mr-6"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/fab_citron/"
            className="mr-4 hover:underline md:mr-6"
          >
            Insta
          </a>
        </li>
        <li>
          <a href="https://www.fabien-chareun.com/" className="hover:underline">
            Portfolio
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
