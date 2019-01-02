import withData from '../../hoc/withData';
import ItemList from '../ItemList';

import SwapiService from '../../services/swapi-service';

const { getAllPeople, getAllStarships, getAllPlanets } = new SwapiService();

const PersonList = withData(ItemList, getAllPeople);
const PlanetList = withData(ItemList, getAllPlanets);
const StarshipList = withData(ItemList, getAllStarships);

export { PersonList, PlanetList, StarshipList };
