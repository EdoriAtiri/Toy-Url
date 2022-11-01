import { createContext, useState } from 'react'

const UrlContext = createContext()

export const UrlProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [url, setUrl] = useState('yui')
  const BASE_URL = process.env.REACT_APP_BASE_URL

  const addUrl = async (newUrl) => {
    console.log(newUrl)
    const response = await fetch(`${BASE_URL}/url`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUrl),
    })

    const data = await response.json()
    console.log(data)
    setUrl(data)
  }

  return (
    <UrlContext.Provider value={{ isLoading, url, addUrl }}>
      {children}
    </UrlContext.Provider>
  )
}

export default UrlContext