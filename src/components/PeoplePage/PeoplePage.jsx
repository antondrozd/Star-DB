import React, { Component } from 'react';

import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';

import './PeoplePage.css';

class PeoplePage extends Component {
  state = {
    selectedPerson: null
  };

  onPersonSelected = id => {
    this.setState({ selectedPerson: id });
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-md-7 offset-md-1">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}

export default PeoplePage;
