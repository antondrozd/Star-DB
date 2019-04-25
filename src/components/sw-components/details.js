import React from 'react'

import ItemDetails, { Record } from '../item-details'
import SwapiService from '../../services/swapi-service'

const { getPerson, getPlanet, getStarship } = new SwapiService()

const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails itemId={itemId} getData={getPerson}>
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth Year" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  )
}

const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails itemId={itemId} getData={getPlanet}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  )
}

const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails itemId={itemId} getData={getStarship}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  )
}

export { PersonDetails, PlanetDetails, StarshipDetails }
