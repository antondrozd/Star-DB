import React, { Component } from 'react'
import Spinner from '../components/spinner'

const withDataFetching = (View, getData) => {
  return class extends Component {
    state = {
      data: null
    }

    componentDidMount() {
      getData().then(data => this.setState({ data }))
    }

    render() {
      const { data } = this.state

      if (!data) return <Spinner />

      return <View {...this.props} data={data} />
    }
  }
}

export default withDataFetching