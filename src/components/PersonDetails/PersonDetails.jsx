import React, { Component } from 'react';

import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

import SwapiService from '../../services/swapi-service';

import './PersonDetails.css';

export default class PersonDetails extends Component {
  state = {
    person: null,
    loading: true,
    error: false
  };

  swapiService = new SwapiService();

  updatePerson() {
    this.setState(() => {
      return { loading: true };
    });

    const { personId } = this.props;

    if (!personId) return;

    this.swapiService
      .getPerson(personId)
      .then(person => this.setState({ person, loading: false }))
      .catch(err => {
        console.error(err);

        this.setState({ loading: false, error: true });
      });
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  render() {
    if (!this.state.person) return <span>Select person from list</span>;

    const { person, loading, error } = this.state;
    const hasData = !(loading || error);

    return (
      <div className="person-details card">
        {hasData && <PersonDetailsView person={person} />}
        {loading && <Spinner />}
        {error && <ErrorIndicator />}
      </div>
    );
  }
}

const PersonDetailsView = ({ person }) => {
  const { id, name, gender, birthYear, eyeColor } = person;

  return (
    <React.Fragment>
      <img
        className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt="person"
      />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
