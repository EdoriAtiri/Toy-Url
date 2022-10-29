import { createContext, useState, useEffect } from 'react'

const UrlContext = createContext()

export const UrlProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [url, setUrl] = useState([])
}
