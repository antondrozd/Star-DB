import React, { Component } from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import ItemList from '../item-list'
import ItemDetails, { Record } from '../item-details'
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
    const itemList = (
      <ItemList
        onPersonSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {item => `${item.name} (${item.birthYear})`}
      </ItemList>
    )

    const personDetails = (
      <ItemDetails
        itemId={this.state.selectedPerson}
        getData={this.swapiService.getPerson}
      >
        <Record field="gender" label="Gender" />
        <Record field="birthYear" label="Birth Year" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    )

    // const stapshipDetails = (
    //   <ItemDetails itemId={5} getData={this.swapiService.getStarship}>
    //     <Record field="model" label="Model" />
    //     <Record field="length" label="Length" />
    //     <Record field="costInCredits" label="Cost" />
    //   </ItemDetails>
    // )

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />
          <RandomPlanet />

          <Row left={itemList} right={personDetails} />
        </div>
      </ErrorBoundry>
    )
  }
}

export default App
