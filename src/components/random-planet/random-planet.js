import React, { Component, Fragment } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './random-planet.css';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    isLoading: true
  };

  componentDidMount() {
    this.update();
  }

  onPlanetLoaded = planet => {
    this.setState({ planet, isLoading: false });
  };

  update() {
    const id = Math.floor(Math.random() * 25) + 2;

    this.swapiService.getPlanet(id).then(planet => {
      this.onPlanetLoaded(planet);
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
    const { isLoading } = this.state;

    return (
      <div className="random-planet jumbotron rounded">
        {isLoading ? <Spinner /> : this.renderPlanet()}
      </div>
    );
  }
}
