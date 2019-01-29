import React from 'react';

import { SwapiServiceConsumer } from '../contexts';

import { getDisplayName } from './helpers';

const withSwapiService = (WrappedComponent, mapMethodsToProps) => {
  const WithSwapiService = props => {
    return (
      <SwapiServiceConsumer>
        {swapiService => {
          const serviceProps = mapMethodsToProps(swapiService);

          return <WrappedComponent {...props} {...serviceProps} />;
        }}
      </SwapiServiceConsumer>
    );
  };

  WithSwapiService.displayName = `WithSwapiService(${getDisplayName(
    WrappedComponent
  )})`;

  return WithSwapiService;
};

export { withSwapiService };
