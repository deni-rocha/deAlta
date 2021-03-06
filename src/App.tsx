import { useContext, useEffect, useState } from 'react'

import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import { DivLoad, DivMain } from './AppStyled'
import ChartsContext from './context/chartsContext'
import { darkTheme, lightTheme } from './Themes'
import LoadGif from './assets/gifs/Load'
import { getCharts } from './services/api'
import Rotas from './routes'

function App() {
  const { dataCharts, setDataCharts } = useContext(ChartsContext)
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const loading = dataCharts.artists.total === 1 ? true : false

  useEffect(() => {
    let existsLocalTheme: string | undefined = localStorage.theme

    if (existsLocalTheme) {
      let themeParsed: boolean = JSON.parse(localStorage.theme)
      setIsDarkTheme(themeParsed)
    }
  }, [])

  useEffect(() => {
    const fetch = async () => {
      const res = await getCharts()
      setDataCharts(res)
    }

    fetch()
  }, [setDataCharts])

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <DivMain>
        <div className="center">
          <Header theme={{ isDarkTheme, setIsDarkTheme }} />
          {loading ? (
            <DivLoad>
              <LoadGif className="load" />
            </DivLoad>
          ) : (
            <Rotas />
          )}
        </div>
      </DivMain>
    </ThemeProvider>
  )
}

export default App
