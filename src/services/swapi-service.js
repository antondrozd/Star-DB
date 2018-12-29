export default class SwapiService {
  _apiBase = 'https://swapi.co/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(res.status);
    }

    const body = await res.json();

    return body;
  }

  async getAllPeople() {
    const res = await this.getResource('/people/');

    return res.results.map(this._transformPersonData);
  }

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}/`);

    return this._transformPersonData(person);
  }

  async getAllPlanets() {
    const res = await this.getResource('/planets/');

    return res.results.map(this._transformPlanetData);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}/`);

    return this._transformPlanetData(planet);
  }

  async getAllStarships() {
    const res = await this.getResource('/starships/');

    return res.results.map(this._transformStarshipData);
  }

  async getStarship(id) {
    const starship = await this.getResource(`/starships/${id}/`);

    return this._transformStarshipData(starship);
  }

  _transformPlanetData = ({
    url,
    name,
    population,
    rotation_period,
    diameter
  }) => {
    return {
      id: this._extractId(url),
      name,
      population,
      rotationPeriod: rotation_period,
      diameter
    };
  };

  _transformStarshipData = ({
    url,
    name,
    model,
    manufacturer,
    costInCredits,
    length,
    crew,
    passengers,
    cargoCapacity
  }) => {
    return {
      id: this._extractId(url),
      name,
      model,
      manufacturer,
      costInCredits,
      length,
      crew,
      passengers,
      cargoCapacity
    };
  };

  _transformPersonData = ({ url, name, gender, birth_year, eye_color }) => {
    return {
      id: this._extractId(url),
      name,
      gender,
      birthYear: birth_year,
      eyeColor: eye_color
    };
  };

  _extractId(url) {
    const idRegExp = /\/([0-9]*)\/$/;

    return url.match(idRegExp)[1];
  }
}
