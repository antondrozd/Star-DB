import React, { Component, Fragment } from 'react'

import Spinner from '../spinner'
import './item-details.css'

export function Record({ item, field, label }) {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
}

export default class ItemDetails extends Component {
  state = {
    item: null,
    isLoading: false
  }

  update = () => {
    this.setState({ isLoading: true })

    this.props
      .getData(this.props.itemId)
      .then(item => {
        this.setState({ item, isLoading: false })
      })
      .catch(console.error)
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.update()
    }
  }

  renderItem() {
    const { imageUrl, name } = this.state.item

    return (
      <Fragment>
        <img className="item-image" src={imageUrl} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, child => {
              return React.cloneElement(child, { item: this.state.item })
            })}
          </ul>
        </div>
      </Fragment>
    )
  }

  render() {
    const isItemSelected = !!this.state.item
    const { isLoading } = this.state

    if (!isItemSelected && !isLoading)
      return <span>Please select item from list</span>

    const content = isLoading ? <Spinner /> : this.renderItem()

    return <div className="item-details card">{content}</div>
  }
}
