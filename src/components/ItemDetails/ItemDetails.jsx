import React, { Component } from 'react';

import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
import ErrorBoundry from '../ErrorBoundry';

import './ItemDetails.css';

class ItemDetails extends Component {
  state = {
    item: null,
    imageUrl: null,
    loading: true,
    error: false
  };

  updateItem() {
    this.setState(() => {
      return { loading: true };
    });

    const { itemId, getData, getImageUrl } = this.props;

    if (!itemId) return;

    getData(itemId)
      .then(item =>
        this.setState({ item, imageUrl: getImageUrl(itemId), loading: false })
      )
      .catch(err => {
        console.error(err);

        this.setState({ loading: false, error: true });
      });
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  render() {
    if (!this.state.item && !this.state.loading)
      return <span>Select person from list</span>;

    const { item, imageUrl, loading, error } = this.state;
    const hasData = !loading;

    return (
      <div className="person-details card d-flex">
        {hasData && (
          <ErrorBoundry>
            <img className="person-image" src={imageUrl} alt="item" />
            <div className="card-body">
              <h4>{item.name}</h4>
              <ul className="list-group list-group-flush">
                {React.Children.map(this.props.children, child => {
                  return React.cloneElement(child, { item });
                })}
              </ul>
            </div>
          </ErrorBoundry>
        )}
        {loading && <Spinner />}
        {error && <ErrorIndicator />}
      </div>
    );
  }
}

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };
export default ItemDetails;
