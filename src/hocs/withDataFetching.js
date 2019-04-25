import React, { Component } from 'react'

import Spinner from '../components/spinner'
import ErrorIndicator from '../components/error-indicator'

import { getDisplayName } from './helpers'

const withDataFetching = View => {
  class WithDataFetching extends Component {
    state = {
      data: null,
      hasError: false
    }

    componentDidMount() {
      this.props
        .getData()
        .then(data => this.setState({ data, hasError: false }))
        .catch(error => {
          this.setState({ hasError: true })
          console.error(error)
        })
    }

    render() {
      const { data, hasError } = this.state

      if (hasError) return <ErrorIndicator />

      if (!data) return <Spinner />

      return <View {...this.props} data={data} />
    }
  }

  WithDataFetching.displayName = `WithDataFetching(${getDisplayName(View)})`

  return WithDataFetching
}

export default withDataFetching
