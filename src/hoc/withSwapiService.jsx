import React from 'react';

import { SwapiServiceConsumer } from '../contexts';

import { getDisplayName } from './helpers';

const withSwapiService = WrappedComponent => {
  const WithSwapiService = props => {
    return (
      <SwapiServiceConsumer>
        {swapiService => (
          <WrappedComponent {...props} swapiService={swapiService} />
        )}
      </SwapiServiceConsumer>
    );
  };

  WithSwapiService.displayName = `WithSwapiService(${getDisplayName(
    WrappedComponent
  )})`;

  return WithSwapiService;
};

export { withSwapiService };
