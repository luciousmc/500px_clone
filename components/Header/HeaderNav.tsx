import { ChevronDownIcon } from '@heroicons/react/solid'

function HeaderNav() {
  return (
    <nav className="flex-grow">
      <ul className="flex items-center space-x-5">
        <li className="hover:text-blue-400">
          <a href="#">Discover</a> <ChevronDownIcon className="inline w-4" />
        </li>
        <li className="hover:text-blue-400">
          <a href="#">Licensing</a> <ChevronDownIcon className="inline w-4" />
        </li>

        <li>
          <a href="#">NFT Vault</a>{' '}
        </li>

        <div className="hidden items-center space-x-5 lg:flex">
          <li>
            <a href="#">Memberships</a>
          </li>
          <li>
            <a href="#">Quests</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default HeaderNav
