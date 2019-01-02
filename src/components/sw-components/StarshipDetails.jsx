import React from 'react';

import ItemDetails, { Record } from '../ItemDetails';
import { withSwapiService } from '../../hoc';

const StarshipDetails = ({ itemId, swapiService }) => {
  const { getStarship, getStarshipImageUrl } = swapiService;

  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImageUrl={getStarshipImageUrl}
    >
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

export default withSwapiService(StarshipDetails);
