import React, { createContext, useState } from 'react'

type urlPathContextProviderProps = {
  children: React.ReactNode
}
type IDEFAUT_VALUE = {
  pathName: string
  setPathName: React.Dispatch<React.SetStateAction<string>>
}

const DEFAULT_VALUE: IDEFAUT_VALUE = {
  pathName: window.location.pathname,
  setPathName: () => {},
}

const urlPathContext = createContext(DEFAULT_VALUE)

const UrlPathContextProvider = ({ children }: urlPathContextProviderProps) => {
  const [pathName, setPathName] = useState(DEFAULT_VALUE.pathName)

  return (
    <urlPathContext.Provider value={{ pathName, setPathName }}>
      {children}
    </urlPathContext.Provider>
  )
}

export { UrlPathContextProvider }
export default urlPathContext
