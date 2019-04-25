import React from 'react'

import ItemDetails, { Record } from '../../item-details'
import { withSwapiService } from '../../../hocs'

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPerson
  }
}

const PersonDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth Year" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  )
}

export default withSwapiService(PersonDetails, mapMethodsToProps)
