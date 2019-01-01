import React from 'react';

import withData from '../../hoc/withData';

import SwapiService from '../../services/swapi-service';

import './ItemList.css';

const { getAllPeople } = new SwapiService();

const ItemList = ({ data, onItemSelected }) => {
  return (
    <ul className="item-list list-group">
      {data.map(({ id, name }) => (
        <li
          className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

export default withData(ItemList, getAllPeople);
