import React, { Component } from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorBoundry from '../error-boundry/error-boundry'
import { PeoplePage, PlanetsPage, StarshipsPage } from '../../pages'

class App extends Component {
  render() {
    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />
          <ErrorBoundry>
            <RandomPlanet />
          </ErrorBoundry>
          <PeoplePage />
          <PlanetsPage />
          <StarshipsPage />
        </div>
      </ErrorBoundry>
    )
  }
}

export default App
