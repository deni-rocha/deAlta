import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import GlobalContext from './context'
import {
  BrowserRouter as Router,
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalContext>
        <App />
      </GlobalContext>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
