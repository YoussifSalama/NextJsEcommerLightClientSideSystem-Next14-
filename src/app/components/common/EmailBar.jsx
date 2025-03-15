import { MailIcon } from "lucide-react"

const EmailBar = () => {
  return (
    <div className="bg-white p-2 rounded-full flex items-center w-full">
      <div>
        <MailIcon className="w-6 h-6 text-gray-400"/>
      </div>
      <input
        type="search"
        name="searchbar"
        id="searchbar"
        placeholder="Enter your email address..."
        className="w-full outline-none placeholder:leading-none text-gray-500 px-2
          [&::-webkit-search-cancel-button]:hidden"
      />
    </div>
  )
}

export default EmailBar
