import { SearchIcon } from '@heroicons/react/outline'
import HeaderNav from './HeaderNav'
import Logo from './Logo'

function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center space-x-5 bg-white py-5 px-12 shadow-md">
      <Logo />

      <HeaderNav />

      <div className="flex items-center space-x-2 rounded-full bg-gray-100 p-2">
        <div>
          <SearchIcon className="w-6" />
        </div>
        <input
          className="bg-transparent font-thin text-gray-700 outline-none"
          type="search"
          placeholder="Search 500px"
        />
      </div>

      <div className="flex items-center space-x-5">
        <a href="#" className="font-semibold">
          Log in
        </a>
        <a
          href="#"
          className="rounded-full border-[3px] border-black py-1 px-3 font-semibold hover:text-blue-400"
        >
          Sign up
        </a>
      </div>
    </header>
  )
}

export default Header
