import { useContext, useState } from 'react'
import QRCode from 'react-qr-code'
import UrlContext from '../Context/UrlContext'
import GoToLinkIcon from '../Assets/SVG/GoToLink.svg'

function Result() {
  const { url } = useContext(UrlContext)
  const [isCopied, setIsCopied] = useState(false)

  const { short_url } = url

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
          <button
            disabled={isCopied}
            onClick={handleCopyClick}
            className="group relative rounded bg-blue-600 px-2 font-bold text-white"
          >
            <span className="popup">Copy URL</span>

            {isCopied ? 'Copied!' : 'Copy'}
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
        </div>
      )}
      {/* <div
        style={{
          height: 'auto',
          margin: '0 auto',
          maxWidth: 64,
          width: '100%',
        }}
      >
        <QRCode
          size={256}
          style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
          value={short_url}
          viewBox={`0 0 256 256`}
        />
      </div> */}
    </div>
  )
}

export default Result
