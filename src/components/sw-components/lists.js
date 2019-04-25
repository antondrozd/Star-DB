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

const PersonList = withSwapiService(mapPersonMethodsToProps)(
  withDataFetching(ItemList)
)
const PlanetsList = withSwapiService(mapPlanetMethodsToProps)(
  withDataFetching(ItemList)
)
const StarshipsList = withSwapiService(mapStarshipMethodsToProps)(
  withDataFetching(ItemList)
)

export { PersonList, PlanetsList, StarshipsList }
