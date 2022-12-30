import { useContext, useState } from 'react'
import UrlContext from '../Context/UrlContext'
import ShareCard from './ShareCard'
import CopyIcon from '../Assets/SVG/Copy.svg'
import GoToLinkIcon from '../Assets/SVG/GoToLink.svg'
import ShareIcon from '../Assets/SVG/Share.svg'

function Result() {
  const { url } = useContext(UrlContext)
  const [isCopied, setIsCopied] = useState(false)
  const [isShareToggled, setIsShareToggled] = useState(false)

  const { short_url, short_code } = url

  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text)
    } else {
      // IE Fallback
      return document.execCommand('copy', true, text)
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(short_url)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 2000)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      {isShareToggled && (
        <div
          id="share"
          className="fixed inset-0 z-40 h-[100vh] w-full bg-transparent"
        >
          <input
            onClick={() => setIsShareToggled(false)}
            type="button"
            className="absolute inset-0 z-20 bg-gray-700 opacity-50"
          />
          <ShareCard url={short_url} code={short_code} />
        </div>
      )}

      {/* Results */}
      {url && (
        <div className="flex w-full flex-col items-center justify-center gap-6 md:flex-row md:gap-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={short_url}
            className="text-xl font-bold text-blue-600 "
          >
            {short_url}
          </a>
          <div className="flex h-fit gap-4">
            <button
              disabled={isCopied}
              onClick={handleCopyClick}
              className="group relative rounded bg-blue-600 px-2 py-2 font-bold text-white"
            >
              <span
                className={`${'absolute -bottom-6 left-1/2 w-24 -translate-x-1/2 transform text-sm text-blue-600  transition-opacity duration-300 '} ${
                  isCopied ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {isCopied && 'Copied!'}
              </span>
              {!isCopied && <span className="popup">Copy URL</span>}
              <img className="h-auto w-4" src={CopyIcon} alt="Copy URL" />
            </button>

            <a
              href={short_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative grid place-content-center rounded border border-blue-600  px-2 text-center font-bold text-white"
            >
              <span className="popup">Visit URL</span>
              <img className="h-auto w-4" src={GoToLinkIcon} alt="go to link" />
            </a>

            <button
              type="button"
              onClick={() => setIsShareToggled(true)}
              className="group relative rounded bg-blue-600 px-2 font-bold text-white"
            >
              <span className="popup">Share URL</span>
              <img className="h-auto w-4" src={ShareIcon} alt="share url" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Result
