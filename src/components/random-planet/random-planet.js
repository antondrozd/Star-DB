import React, { Component, Fragment } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './random-planet.css';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    isLoading: true,
    isError: false
  };

  componentDidMount() {
    this.update();
    this.interval = setInterval(this.update, 2500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = planet => {
    this.setState({ planet, isLoading: false });
  };

  update = () => {
    const id = Math.floor(Math.random() * 25) + 3;

    this.swapiService
      .getPlanet(id)
      .then(planet => {
        this.onPlanetLoaded(planet);
      })
      .catch(error => {
        console.error(error);
        this.setState({ isError: true, isLoading: false });
      });
  }

  renderPlanet() {
    const {
      planet: { imageUrl, name, population, rotationPeriod, diameter }
    } = this.state;

    return (
      <Fragment>
        <img className="planet-image" src={imageUrl} />
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
      </Fragment>
    );
  }

  render() {
    const { isLoading, isError } = this.state;
    const hasData = !(isError || isLoading);

    return (
      <div className="random-planet jumbotron rounded">
        {hasData && this.renderPlanet()}
        {isLoading && <Spinner />}
        {isError && <ErrorIndicator />}
      </div>
    );
  }
}
