import ItemList from '../item-list'
import withSwapiService from '../../hocs/withSwapiService'
import SwapiService from '../../services/swapi-service'

const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService()

const PersonList = withSwapiService(ItemList, getAllPeople)
const PlanetsList = withSwapiService(ItemList, getAllPlanets)
const StarshipsList = withSwapiService(ItemList, getAllStarships)

export { PersonList, PlanetsList, StarshipsList }
