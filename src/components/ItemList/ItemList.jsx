import React from 'react';

import './ItemList.css';

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

export default ItemList;
