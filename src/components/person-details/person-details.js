import React, { Component, Fragment } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import './person-details.css';

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    isLoading: false
  };

  update = () => {
    this.setState({ isLoading: true });

    this.swapiService.getPerson(this.props.personId).then(person => {
      this.setState({ person, isLoading: false });
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.update();
    }
  }

  renderPerson() {
    const { imageUrl, name, gender, birthYear, eyeColor } = this.state.person;

    return (
      <Fragment>
        <img className="person-image" src={imageUrl} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender:</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year:</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color:</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }

  render() {
    const isPersonSelected = !!this.state.person;
    const { isLoading } = this.state;

    if (!isPersonSelected && !isLoading)
      return <span>Please select person from list</span>;

    const content = isLoading ? <Spinner /> : this.renderPerson();

    return <div className="person-details card">{content}</div>;
  }
}
