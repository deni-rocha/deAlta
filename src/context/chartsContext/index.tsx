import React, { createContext } from 'react'

import { getCharts } from '../../api'

type ChartsContextProviderProps = {
  children: React.ReactNode
}

const DEFAULT_VALUE = getCharts()

const ChartsContext = createContext(DEFAULT_VALUE)

const ChartsContextProvider = ({ children }: ChartsContextProviderProps) => {
  return (
    <ChartsContext.Provider value={DEFAULT_VALUE}>
      {children}
    </ChartsContext.Provider>
  )
}

export { ChartsContextProvider }
export default ChartsContext
