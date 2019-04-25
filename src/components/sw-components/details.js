import React from 'react'

import ItemDetails, { Record } from '../item-details'
import { withSwapiService } from '../../hocs'

const PersonDetails = withSwapiService(({ itemId, swapiService }) => {
  const { getPerson } = swapiService

  return (
    <ItemDetails itemId={itemId} getData={getPerson}>
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth Year" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  )
})

const PlanetDetails = withSwapiService(({ itemId, swapiService }) => {
  const { getPlanet } = swapiService

  return (
    <ItemDetails itemId={itemId} getData={getPlanet}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  )
})

const StarshipDetails = withSwapiService(({ itemId, swapiService }) => {
  const { getStarship } = swapiService

  return (
    <ItemDetails itemId={itemId} getData={getStarship}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  )
})

export { PersonDetails, PlanetDetails, StarshipDetails }
