import { useContext, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import { DivLoad } from './AppStyled'
import ChartsContext from './context/chartsContext'
import Home from './pages/Home'
import { darkTheme, lightTheme } from './Themes'
import LoadGif from './assets/gifs/Load'
import { getCharts } from './services/api'


function App() {
  const { dataCharts, setDataCharts } = useContext(ChartsContext)
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const loading = dataCharts.artists.total === 1 ? true : false


  useEffect(() => {
    const fetch = async () => {
      const res = await getCharts()
      setDataCharts(res)
    }

    fetch()
  }, [])


  return (
    <div className="App">
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Header theme={{ isDarkTheme, setIsDarkTheme }} />
        {loading ? <DivLoad>
          <LoadGif className='load' />
        </DivLoad> : <Home />}
      </ThemeProvider>
    </div>
  )
}

export default App
