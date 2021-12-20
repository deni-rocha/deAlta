import React from 'react'
import { ChartsContextProvider } from './chartsContext'

type GlobalContextProps = {
  children: React.ReactNode
}

const GlobalContext = ({ children }: GlobalContextProps) => {
  return <ChartsContextProvider>{children}</ChartsContextProvider>
}

export default GlobalContext
