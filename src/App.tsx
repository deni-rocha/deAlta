import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import GlobalContext from './context'
import Home from './pages/Home'
import { darkTheme, lightTheme } from './Themes'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
    <div className="App">
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalContext>
          <Header theme={{ isDarkTheme, setIsDarkTheme }} />
          <Home />
        </GlobalContext>
      </ThemeProvider>
    </div>
  )
}

export default App
