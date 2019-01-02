import React, { Component } from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';
import { PersonList, StarshipList, PlanetList } from '../sw-components';
import {
  PersonDetails,
  StarshipDetails,
  PlanetDetails
} from '../sw-components/item-details';

import './App.css';

class App extends Component {
  render() {
    return (
      <ErrorBoundry>
        <div className="container stardb-app">
          <Header />

          <RandomPlanet />

          <Row left={<PersonList />} right={<PersonDetails itemId={1} />} />
          <Row left={<StarshipList />} right={<StarshipDetails itemId={9} />} />
          <Row left={<PlanetList />} right={<PlanetDetails itemId={2} />} />
        </div>
      </ErrorBoundry>
    );
  }
}

export default App;
