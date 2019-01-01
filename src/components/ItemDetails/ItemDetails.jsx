import React, { Component } from 'react';

import Spinner from '../Spinner';
import ErrorBoundry from '../ErrorBoundry';

import './ItemDetails.css';

class ItemDetails extends Component {
  state = {
    item: null,
    imageUrl: null,
    loading: true
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

        this.setState({ loading: false });
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

    const { item, imageUrl, loading } = this.state;
    const hasData = !loading;

    return (
      <div className="person-details card">
        {hasData && (
          <ItemDetailsView item={item} imageUrl={imageUrl}>
            {React.Children.map(this.props.children, child => {
              return React.cloneElement(child, { item });
            })}
          </ItemDetailsView>
        )}
        {loading && <Spinner />}
      </div>
    );
  }
}

const ItemDetailsView = ({ item, imageUrl, children }) => {
  const { name, gender, birthYear, eyeColor } = item;

  return (
    <ErrorBoundry>
      <img className="person-image" src={imageUrl} alt="person" />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">{children}</ul>
      </div>
    </ErrorBoundry>
  );
};

export default ItemDetails;
