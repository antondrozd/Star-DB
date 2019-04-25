import React from 'react'

import { SwapiServiceConsumer } from '../contexts'

import { getDisplayName } from './helpers'

const withSwapiService = (WrappedComponent, mapMethodsToProps) => {
  const WithSwapiService = props => {
    return (
      <SwapiServiceConsumer>
        {swapiService => {
          const serviceMethods = mapMethodsToProps(swapiService)

          return <WrappedComponent {...props} {...serviceMethods} />
        }}
      </SwapiServiceConsumer>
    )
  }

  WithSwapiService.displayName = `WithSwapiService(${getDisplayName(
    WrappedComponent
  )})`

  return WithSwapiService
}

export default withSwapiService
