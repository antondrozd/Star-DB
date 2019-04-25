import ItemList from '../item-list'
import { withSwapiService, withDataFetching } from '../../hocs'
import { compose } from '../../hocs/helpers'

const mapPersonMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPeople
  }
}

const mapPlanetMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPlanets
  }
}

const mapStarshipMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllStarships
  }
}

const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withDataFetching
)(ItemList)

const PlanetsList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withDataFetching
)(ItemList)

const StarshipsList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withDataFetching
)(ItemList)

export { PersonList, PlanetsList, StarshipsList }
