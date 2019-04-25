import React, { Component } from 'react'

import Spinner from '../components/spinner'

import { getDisplayName } from './helpers'

const withDataFetching = View => {
  class WithDataFetching extends Component {
    state = {
      data: null
    }

    componentDidMount() {
      this.props.getData().then(data => this.setState({ data }))
    }

    render() {
      const { data } = this.state

      if (!data) return <Spinner />

      return <View {...this.props} data={data} />
    }
  }

  WithDataFetching.displayName = `WithDataFetching(${getDisplayName(View)})`

  return WithDataFetching
}

export default withDataFetching
