import React, { Component } from 'react'

import { PersonList } from '../components/sw-components/lists'
import { PersonDetails } from '../components/sw-components/details'
import Row from '../components/row'

export default class PeoplePage extends Component {
  state = {
    selectedPerson: null
  }

  onPersonSelected = id => {
    this.setState({ selectedPerson: id })
  }

  render() {
    const personList = <PersonList onItemSelected={this.onPersonSelected} />

    const personDetails = <PersonDetails itemId={this.state.selectedPerson} />

    return <Row left={personList} right={personDetails} />
  }
}
