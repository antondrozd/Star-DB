import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import SwapiService from './services/swapi-service'
import { SwapiServiceProvider } from './contexts'

ReactDOM.render(
  <SwapiServiceProvider value={new SwapiService()}>
    <App />
  </SwapiServiceProvider>,
  document.getElementById('root')
)
