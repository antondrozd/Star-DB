import React, { Component } from 'react';

import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

import SwapiService from '../../services/swapi-service';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {
  state = {
    planet: {},
    loading: true,
    error: false
  };

  swapiService = new SwapiService();

  onPlanetDataLoaded = planet => {
    this.setState({ planet, loading: false, error: false });
  };

  onDataError = err => {
    this.setState({ loading: false, error: true });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 15 + 2);

    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetDataLoaded)
      .catch(this.onDataError);
  }

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    return (
      <div className="random-planet jumbotron rounded">
        {hasData && <PlanetView planet={planet} />}
        {loading && <Spinner />}
        {error && <ErrorIndicator />}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt="planet"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
