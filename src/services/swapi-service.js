export default class SwapiService {
  _apiBase = 'https://swapi.co/api';
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(res.status);
    }

    const body = await res.json();

    return body;
  };

  getAllPeople = async () => {
    const res = await this.getResource('/people/');

    return res.results.map(this._transformPersonData);
  };

  getPerson = async id => {
    const person = await this.getResource(`/people/${id}/`);

    return this._transformPersonData(person);
  };

  getPersonImageUrl = id => {
    return `${this._imageBase}/characters/${id}.jpg`
  }

  getAllPlanets = async () => {
    const res = await this.getResource('/planets/');

    return res.results.map(this._transformPlanetData);
  };

  getPlanet = async id => {
    const planet = await this.getResource(`/planets/${id}/`);

    return this._transformPlanetData(planet);
  };

  getPlanetImageUrl = id => {
    return `${this._imageBase}/planets/${id}.jpg`
  }

  getAllStarships = async () => {
    const res = await this.getResource('/starships/');

    return res.results.map(this._transformStarshipData);
  };

  getStarship = async id => {
    const starship = await this.getResource(`/starships/${id}/`);

    return this._transformStarshipData(starship);
  };

  getStarshipImageUrl = id => {
    return `${this._imageBase}/starships/${id}.jpg`
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
    cost_in_credits,
    length,
    crew,
    passengers,
    cargo_capacity
  }) => {
    return {
      id: this._extractId(url),
      name,
      model,
      manufacturer,
      costInCredits: cost_in_credits,
      length,
      crew,
      passengers,
      cargoCapacity: cargo_capacity
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
