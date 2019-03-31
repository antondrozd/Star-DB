import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-list.css';

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null
  };

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then(peopleList => this.setState({ peopleList }));
  }

  renderPeoples() {
    return this.state.peopleList.map(people => {
      return (
        <li
          className="list-group-item"
          key={people.id}
          onClick={() => this.props.onPersonSelected(people.id)}
        >
          {people.name}
        </li>
      );
    });
  }

  render() {
    if (!this.state.peopleList) return <Spinner />;

    const peoples = this.renderPeoples();

    return <ul className="item-list list-group">{peoples}</ul>;
  }
}
