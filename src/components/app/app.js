import React, { Component } from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import {
  PersonList,
  PlanetsList,
  StarshipsList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components'
import Row from '../row'
import ErrorBoundry from '../error-boundry/error-boundry'
import SwapiService from '../../services/swapi-service'

class App extends Component {
  swapiService = new SwapiService()

  state = {
    selectedPerson: null
  }

  onPersonSelected = id => {
    this.setState({ selectedPerson: id })
  }

  render() {
    const personList = (
      <PersonList onPersonSelected={this.onPersonSelected}>
        {item => <span>{item.name}</span>}
      </PersonList>
    )

    const personDetails = <PersonDetails itemId={this.state.selectedPerson} />

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />
          <RandomPlanet />
          <Row left={personList} right={personDetails} />
        </div>
      </ErrorBoundry>
    )
  }
}

export default App
