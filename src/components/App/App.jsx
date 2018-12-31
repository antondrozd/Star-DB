import React, { Component } from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../PeoplePage';

import SwapiService from '../../services/swapi-service';
import ItemList from '../ItemList';

import './App.css';

class App extends Component {
  swapiService = new SwapiService();

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    return (
      <div className="container stardb-app">
        <Header />
        <RandomPlanet />
        <PeoplePage />

        <div className="row mb2">
          <div className="col-md-4">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
            />
          </div>
          <div className="col-md-7 offset-md-1">
            {/* <PersonDetails personId={this.state.selectedPerson} /> */}
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
            />
          </div>
          <div className="col-md-7 offset-md-1">
            {/* <PersonDetails personId={this.state.selectedPerson} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
