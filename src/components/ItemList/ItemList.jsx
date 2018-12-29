import React, { Component } from 'react';

import Spinner from '../Spinner';

import SwapiService from '../../services/swapi-service';

import './ItemList.css';

export default class ItemList extends Component {
  state = {
    peopleList: null
  };

  swapiService = new SwapiService();

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then(peopleList => this.setState({ peopleList }));
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }

    return (
      <ul className="item-list list-group">
        {peopleList.map(({ id, name }) => (
          <li
            className="list-group-item"
            key={id}
            onClick={() => this.props.onItemSelected(id)}
          >
            {name}
          </li>
        ))}
      </ul>
    );
  }
}
