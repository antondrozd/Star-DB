import React from 'react'

import { SwapiServiceConsumer } from '../contexts'

const withSwapiService = (WrappedComponent, mapMethodsToProps) => {
  return props => {
    return (
      <SwapiServiceConsumer>
        {swapiService => {
          const serviceMethods = mapMethodsToProps(swapiService)

          return <WrappedComponent {...props} {...serviceMethods} />
        }}
      </SwapiServiceConsumer>
    )
  }
}

export default withSwapiService
