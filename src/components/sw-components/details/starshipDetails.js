import React from 'react'

import ItemDetails, { Record } from '../../item-details'
import { withSwapiService } from '../../../hocs'

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getStarship
  }
}

const StarshipDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  )
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails)
