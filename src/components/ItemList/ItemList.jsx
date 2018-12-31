import React, { Component } from 'react';

import Spinner from '../Spinner';

import './ItemList.css';

export default class ItemList extends Component {
  state = {
    itemList: null
  };

  componentDidMount() {
    const { getData } = this.props;

    getData().then(itemList => this.setState({ itemList }));
  }

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

    return (
      <ul className="item-list list-group">
        {itemList.map(({ id, name }) => (
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
