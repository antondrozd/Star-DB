import React, { Component } from 'react';

import Spinner from '../components/Spinner';
import ErrorIndicator from '../components/ErrorIndicator';

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      error: false
    };

    componentDidMount() {
      getData()
        .then(data => this.setState({ data, loading: false }))
        .catch(err => {
          console.error(err);

          this.setState({ error: true, loading: false });
        });
    }

    render() {
      const { data, loading, error } = this.state;
      const hasData = !(loading || error);

      return (
        <React.Fragment>
          {hasData && <View {...this.props} data={data} />}
          {loading && <Spinner />}
          {error && <ErrorIndicator />}
        </React.Fragment>
      );
    }
  };
};

export default withData;