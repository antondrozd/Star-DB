import React from 'react';

import ItemDetails, { Record } from '../ItemDetails';
import { withSwapiService } from '../../hoc';

const PlanetDetails = ({ itemId, swapiService }) => {
  const { getPlanet, getPlanetImageUrl } = swapiService;

  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImageUrl}
    >
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

export default withSwapiService(PlanetDetails);
