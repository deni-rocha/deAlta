import React, { createContext, useState } from 'react'
import { ICharts } from '../../types/ICharts'
import { INITIAL_VALUE } from './initialValue'

type ChartsContextProviderProps = {
  children: React.ReactNode
}

type IDEFAULT_VALUE = {
  dataCharts: ICharts
  setDataCharts: React.Dispatch<React.SetStateAction<ICharts>>
}

const DEFAULT_VALUE = {
  dataCharts: INITIAL_VALUE,
  setDataCharts: () => {},
}

const ChartsContext = createContext<IDEFAULT_VALUE>(DEFAULT_VALUE)

const ChartsContextProvider = ({ children }: ChartsContextProviderProps) => {
  const [dataCharts, setDataCharts] = useState(DEFAULT_VALUE.dataCharts)

  return (
    <ChartsContext.Provider value={{ dataCharts, setDataCharts }}>
      {children}
    </ChartsContext.Provider>
  )
}

export { ChartsContextProvider }
export default ChartsContext
