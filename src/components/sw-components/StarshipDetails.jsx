import React from 'react';

import ItemDetails, { Record } from '../ItemDetails';
import { withSwapiService } from '../../hoc';

const StarshipDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

const mapMethodsToProps = ({ getStarship }) => {
  return {
    getData: getStarship
  };
};

export default withSwapiService(StarshipDetails, mapMethodsToProps);
