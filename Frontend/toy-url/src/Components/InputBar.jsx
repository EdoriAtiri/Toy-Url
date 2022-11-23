import { useState, useContext, useEffect } from 'react'
import Search from '../Assets/SVG/Search.svg'
import Loader from './Loader'
import UrlContext from '../Context/UrlContext'

function InputBar() {
  const { addUrl, url, isLoading } = useContext(UrlContext)
  const [link, setLink] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  function validURL(str) {
    // https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ) // fragment locator
    return !!pattern.test(str)
  }

  // useEffect(() => {}, [])
  // const validationErr = (val) => {
  //   if (val === '') {
  //     setErrorMessage('Enter a Link')
  //     return true
  //   }

  //   if (validURL(val) === false) {
  //     setErrorMessage('Invalid Link')
  //     return true
  //   }
  // }

  const handleTextChange = (e) => {
    if (link === '') {
      setErrorMessage('Enter a Link')
    } else if (validURL(link) === false) {
      setErrorMessage('Invalid Link')
    } else {
      setErrorMessage(null)
    }

    setLink(e.target.value)
  }

  useEffect(() => {
    console.log(errorMessage)
  }, [errorMessage])

  const onSubmit = (e) => {
    e.preventDefault()
    addUrl(link)
  }

  const { short_url } = url

  return (
    <div className="w-full">
      <form
        onSubmit={onSubmit}
        className="flex w-full justify-center gap-4 pt-8"
      >
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
            onChange={handleTextChange}
            placeholder="Enter Link Here ..."
          />
        </div>
        <button
          className={`h-14 rounded-3xl bg-blue-600 px-6 font-bold text-white transition-transform active:scale-95 `}
        >
          Process
        </button>
      </form>

      {/*Loading  */}

      <div className="grid h-12 place-content-center">
        {isLoading && <Loader />}
      </div>

      {/* Results */}
      {url && (
        <div className="flex w-full justify-center gap-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={short_url}
            className="text-xl font-bold text-blue-600 "
          >
            {short_url}
          </a>
          <button className="rounded bg-blue-600 px-2 font-bold text-white">
            copy
          </button>
        </div>
      )}
    </div>
  )
}

export default InputBar
