import { withData } from '../../hoc';
import ItemList from '../ItemList';

import { withSwapiService } from '../../hoc';

const mapPersonMethodsToProps = ({ getAllPeople }) => {
  return {
    getData: getAllPeople
  };
};

const PersonList = withSwapiService(
  withData(ItemList),
  mapPersonMethodsToProps
);

const mapPlanetMethodsToProps = ({ getAllPlanets }) => {
  return {
    getData: getAllPlanets
  };
};

const PlanetList = withSwapiService(
  withData(ItemList),
  mapPlanetMethodsToProps
);

const mapStarshipMethodsToProps = ({ getAllStarships }) => {
  return {
    getData: getAllStarships
  };
};

const StarshipList = withSwapiService(
  withData(ItemList),
  mapStarshipMethodsToProps
);

export { PersonList, PlanetList, StarshipList };
