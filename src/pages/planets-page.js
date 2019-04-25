import React, { Component } from 'react'

import { PlanetsList } from '../components/sw-components/lists'
import { PlanetDetails } from '../components/sw-components/details'
import Row from '../components/row'

export default class PlanetsPage extends Component {
  state = {
    selectedPlanet: null
  }

  onPlanetSelected = id => {
    this.setState({ selectedPlanet: id })
  }

  render() {
    const planetsList = <PlanetsList onItemSelected={this.onPlanetSelected} />

    const planetDetails = <PlanetDetails itemId={this.state.selectedPlanet} />

    return <Row left={planetsList} right={planetDetails} />
  }
}
