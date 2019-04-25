import React from 'react'

import ItemDetails, { Record } from '../item-details'
import { SwapiServiceConsumer } from '../../contexts'

const PersonDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({ getPerson }) => (
        <ItemDetails itemId={itemId} getData={getPerson}>
          <Record field="gender" label="Gender" />
          <Record field="birthYear" label="Birth Year" />
          <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
      )}
    </SwapiServiceConsumer>
  )
}

const PlanetDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({ getPlanet }) => (
        <ItemDetails itemId={itemId} getData={getPlanet}>
          <Record field="population" label="Population" />
          <Record field="rotationPeriod" label="Rotation Period" />
          <Record field="diameter" label="Diameter" />
        </ItemDetails>
      )}
    </SwapiServiceConsumer>
  )
}

const StarshipDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({ getStarship }) => (
        <ItemDetails itemId={itemId} getData={getStarship}>
          <Record field="model" label="Model" />
          <Record field="length" label="Length" />
          <Record field="costInCredits" label="Cost" />
        </ItemDetails>
      )}
    </SwapiServiceConsumer>
  )
}

export { PersonDetails, PlanetDetails, StarshipDetails }
