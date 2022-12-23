import React from 'react'
import QRCode from 'qrcode.react'
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share'
import {
  FaFacebook,
  FaTwitter,
  FaTelegram,
  FaWhatsapp,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa'

function ShareCard({ code, url }) {
  const downloadQRCode = () => {
    const qrCodeUrl = document
      .getElementById(code)
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream')
    let download = document.createElement('a')
    download.href = qrCodeUrl
    download.download = `${code}.png`

    document.getElementById('downloadQRCode').appendChild(download)
    download.click()
    // document.getElementById('downloadQRCode').remove(download)
  }

  return (
    <div className="share absolute top-1/2 left-1/2 z-30 flex h-fit w-80 -translate-x-1/2 -translate-y-1/2 transform flex-col gap-6 rounded-md bg-white py-6 px-4 opacity-100">
      <div className="flex justify-between">
        <EmailShareButton subject="Shared from Toy URL" url={url}>
          <FaEnvelope size={36} color={'#2563eb'} />
        </EmailShareButton>
        <FacebookShareButton url={url}>
          <FaFacebook size={36} color={'#2563eb'} />
        </FacebookShareButton>
        <LinkedinShareButton
          title="Toy URL"
          summary="Shared from Toy URL"
          source="https://toyurl.com"
          url={url}
        >
          <FaLinkedin size={36} color={'#2563eb'} />
        </LinkedinShareButton>
        <TelegramShareButton title="Toy URL" url={url}>
          <FaTelegram size={36} color={'#2563eb'} />
        </TelegramShareButton>
        <TwitterShareButton title="Shared from Toy URL" url={url}>
          <FaTwitter size={36} color={'#2563eb'} />
        </TwitterShareButton>
        <WhatsappShareButton title="Shared from Toy URL" url={url}>
          <FaWhatsapp size={36} color={'#2563eb'} />
        </WhatsappShareButton>
      </div>
      <div className="flex items-start justify-between">
        <div className="h-auto w-3/5">
          <QRCode id={code} size={150} value={url} />
        </div>
        <input
          className="text-md grid cursor-pointer place-content-center rounded-sm bg-blue-600 p-2 font-bold text-white"
          type="button"
          onClick={downloadQRCode}
          value="Download QR"
        />
      </div>

      <div id="downloadQRCode" aria-hidden className="hidden">
        download
      </div>
    </div>
  )
}

export default ShareCard
