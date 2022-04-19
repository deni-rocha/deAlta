import React from 'react'
import { ChartsContextProvider } from './chartsContext'
import { UrlPathContextProvider } from './urlPathContext'

type GlobalContextProps = {
  children: React.ReactNode
}

const GlobalContext = ({ children }: GlobalContextProps) => {
  return (
    <UrlPathContextProvider>
      <ChartsContextProvider>{children}</ChartsContextProvider>
    </UrlPathContextProvider>
  )
}

export default GlobalContext
