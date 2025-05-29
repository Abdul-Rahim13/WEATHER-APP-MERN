import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
  return (
    <div className="ml-20 sm:ml-8 mr-15">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for cities"
          className="w-full max-w-[650px] md:pl-14 py-2 bg-[#202C3A] text-white placeholder-gray-400 rounded-md focus:outline-none font-light text-center md:text-left"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-6 top-5 transform -translate-y-1/2 text-white"
        />
      </div>
    </div>
  )
}

export default Header
