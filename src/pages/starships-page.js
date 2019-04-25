import React, { Component } from 'react'

import { StarshipsList } from '../components/sw-components/lists'
import { StarshipDetails } from '../components/sw-components/details'
import Row from '../components/row'

export default class StarshipsPage extends Component {
  state = {
    selectedStarship: null
  }

  onStarshipSelected = id => {
    this.setState({ selectedStarship: id })
  }

  render() {
    const starshipsList = (
      <StarshipsList onItemSelected={this.onStarshipSelected} />
    )

    const starshipDetails = (
      <StarshipDetails itemId={this.state.selectedStarship} />
    )

    return <Row left={starshipsList} right={starshipDetails} />
  }
}
