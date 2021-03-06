import React, { Component } from 'react';

import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';
import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';

import SwapiService from '../../services/swapi-service';

import './PeoplePage.css';

class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null
  };

  onPersonSelected = id => {
    this.setState({ selectedPerson: id });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      />
    );
    const itemDetails = (
      <ItemDetails personId={this.state.selectedPerson} />
    );

    return (
      <ErrorBoundry>
        {/* <Row left={itemList} right={itemDetails} /> */}
        {itemList}
      </ErrorBoundry>
    );
  }
}

export default PeoplePage;
