import React, { Component } from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';
import ItemDetails from '../ItemDetails';
import Record from '../Record';
import PeoplePage from '../PeoplePage';

import SwapiService from '../../services/swapi-service';

import './App.css';

class App extends Component {
  swapiService = new SwapiService();

  render() {
    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={this.swapiService.getPerson}
        getImageUrl={this.swapiService.getPersonImageUrl}
      >
        <Record field="gender" label="Gender" />
        <Record field="birthYear" label="Birth Year" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );
    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={this.swapiService.getStarship}
        getImageUrl={this.swapiService.getStarshipImageUrl}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <div className="container stardb-app">
          <Header />
          {/* <RandomPlanet /> */}

          {/* <Row left={personDetails} right={starshipDetails} /> */}
          <PeoplePage />
        </div>
      </ErrorBoundry>
    );
  }
}

export default App;
