import React, { Component } from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../PeoplePage';

import './App.css';

class App extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </div>
    );
  }
}

export default App;
