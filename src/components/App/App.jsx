import React, { Component } from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';

import './App.css';

class App extends Component {
  state = {
    selectedPerson: null
  };

  onPersonSelected = id => {
    this.setState({ selectedPerson: id });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <RandomPlanet />

        <div className="row">
          <div className="col-md-4">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col-md-7 offset-md-1">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
