import ItemList from '../item-list'
import { withSwapiService, withDataFetching } from '../../hocs'

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

const PersonList = withSwapiService(
  withDataFetching(ItemList),
  mapPersonMethodsToProps
)
const PlanetsList = withSwapiService(
  withDataFetching(ItemList),
  mapPlanetMethodsToProps
)
const StarshipsList = withSwapiService(
  withDataFetching(ItemList),
  mapStarshipMethodsToProps
)

export { PersonList, PlanetsList, StarshipsList }
