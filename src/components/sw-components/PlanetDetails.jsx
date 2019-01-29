import React from 'react';

import ItemDetails, { Record } from '../ItemDetails';
import { withSwapiService } from '../../hoc';

const PlanetDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

const mapMethodsToProps = ({ getPlanet, getPlanetImageUrl }) => {
  return {
    getData: getPlanet,
    getImageUrl: getPlanetImageUrl
  };
};

export default withSwapiService(PlanetDetails, mapMethodsToProps);
