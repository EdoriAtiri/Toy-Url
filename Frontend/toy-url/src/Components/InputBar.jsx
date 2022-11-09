import { useState, useContext } from 'react'
import Search from '../Assets/SVG/Search.svg'
import Loader from './Loader'
import UrlContext from '../Context/UrlContext'

function InputBar() {
  const { addUrl, url, isLoading } = useContext(UrlContext)
  const [link, setLink] = useState('')

  const onClick = () => {
    addUrl(link)
  }

  return (
    <div className="w-full">
      <div className="flex w-full justify-center gap-3 pt-8">
        <div className="flex h-14 w-6/12 items-center rounded-3xl border-[0.5px]  px-6 shadow-xl transition-shadow duration-500 focus-within:shadow-blue-100 focus-within:ring-1 focus-within:ring-blue-600">
          <figure className="h-1/2">
            <img
              src={Search}
              alt="Search"
              className="mr-5 h-full w-7 border-r-2  pr-2"
            />
          </figure>
          <input
            className="h-1/2 w-full focus:outline-none"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Enter Link Here ..."
          />
        </div>
        <button
          className="h-14 rounded-3xl bg-blue-600 px-6 font-bold text-white transition-transform active:scale-95"
          onClick={onClick}
        >
          Process
        </button>
      </div>

      {/*Loading  */}

      <div className="grid h-12 place-content-center">
        {isLoading && <Loader />}
      </div>

      {/* Results */}
      <div className="flex w-full justify-center gap-2">
        <p className="text-xl font-bold text-blue-600 underline">{url}</p>
        <button className="rounded bg-blue-600 px-2 font-bold text-white">
          copy
        </button>
      </div>
    </div>
  )
}

export default InputBar
