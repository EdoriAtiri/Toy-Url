import { createContext, useState } from 'react'

const UrlContext = createContext()

export const UrlProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [errMsg, setErrMsg] = useState(null)
  const [url, setUrl] = useState('')
  const BASE_URL = process.env.REACT_APP_BASE_URL

  const addUrl = async (newUrl) => {
    setIsLoading(true)
    setErrMsg(null)
    try {
      const response = await fetch(`${BASE_URL}url`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ new_url: newUrl }),
      })
      if (!response.ok) {
        setErrMsg('something went wrong')
        throw new Error('Something went wrong')
      }

      const data = await response.json()
      setUrl(data.url)
      setIsLoading(false)
    } catch (error) {
      setErrMsg('Something wrong happened, please try again')
      setIsLoading(false)
    }

    setIsLoading(false)
    setTimeout(() => {
      setErrMsg(null)
    }, 5000)
  }

  return (
    <UrlContext.Provider value={{ isLoading, url, errMsg, setErrMsg, addUrl }}>
      {children}
    </UrlContext.Provider>
  )
}

export default UrlContext
