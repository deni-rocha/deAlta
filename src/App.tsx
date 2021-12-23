import GlobalContext from './context'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <GlobalContext>
        <Home />
      </GlobalContext>
    </div>
  )
}

export default App
