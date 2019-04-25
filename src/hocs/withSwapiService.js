import React from 'react'

import { SwapiServiceConsumer } from '../contexts'

const withSwapiService = WrappedComponent => {
  return props => {
    return (
      <SwapiServiceConsumer>
        {SwapiService => (
          <WrappedComponent {...props} swapiService={SwapiService} />
        )}
      </SwapiServiceConsumer>
    )
  }
}

export default withSwapiService
