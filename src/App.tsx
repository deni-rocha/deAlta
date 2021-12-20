import Header from './components/Header'
import GlobalContext from './context'

function App() {
  return (
    <div className="App">
      <GlobalContext>
        <Header />
      </GlobalContext>
    </div>
  )
}

export default App
