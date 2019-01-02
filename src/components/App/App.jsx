import React, { Component } from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';
import {
  PersonList,
  StarshipList,
  PlanetList,
  PersonDetails,
  StarshipDetails,
  PlanetDetails
} from '../sw-components';
import { SwapiServiceProvider } from '../../contexts';

import SwapiService from '../../services/swapi-service';

import './App.css';

class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="container stardb-app">
            <Header />

            <RandomPlanet />

            <Row left={<PersonList />} right={<PersonDetails itemId={1} />} />
            <Row
              left={<StarshipList />}
              right={<StarshipDetails itemId={9} />}
            />
            <Row left={<PlanetList />} right={<PlanetDetails itemId={2} />} />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
