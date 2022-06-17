import { SearchIcon } from '@heroicons/react/outline'

const NavSearch = () => {
  return (
    <div className="hidden sm:block max-w-xs">
      <div className="mt-1 p-3 rounded-md relative ">
        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-500" />
        </div>
        <input
          className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  )
}

export default NavSearch
