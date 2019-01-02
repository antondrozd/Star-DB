import React from 'react';

import ItemDetails, { Record } from '../ItemDetails';
import { withSwapiService } from '../../hoc';

const PersonDetails = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImageUrl } = swapiService;

  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImageUrl}
    >
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth Year" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

export default withSwapiService(PersonDetails);
