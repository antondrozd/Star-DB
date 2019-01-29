import React from 'react';

import ItemDetails, { Record } from '../ItemDetails';
import { withSwapiService } from '../../hoc';

const PersonDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth Year" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

const mapMethodsToProps = ({ getPerson, getPersonImageUrl }) => {
  return {
    getData: getPerson,
    getImageUrl: getPersonImageUrl
  };
};

export default withSwapiService(PersonDetails, mapMethodsToProps);
