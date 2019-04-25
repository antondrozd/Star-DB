import React from 'react'

import './item-list.css'

function ItemList(props) {
  const items = props.data.map(item => {
    const { id } = item

    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => props.onPersonSelected(id)}
      >
        {props.children(item)}
      </li>
    )
  })

  return <ul className="item-list list-group">{items}</ul>
}

export default ItemList
