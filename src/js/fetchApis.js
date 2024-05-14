import { CreateFilmCard, CreatePlanetCard, CreateVehicleCard, CreateCharacterCard } from "./createCards.js"
import renderCard from "./renderCard.js";
import renderErrorMessage from "./renderErrorMessage.js";

// @TODO UPDATE TO ASYNC
export const fetchAndRenderFilms = ()=> {
	fetch("https://swapi.dev/api/films")
	.then(response => response.json())
	.then((data) => {
		data.results.forEach(film => {			
			const currentFilm = new CreateFilmCard(
				film.title,
				film.director, 
				film.release_date,
				film.episode_id,
				film.opening_crawl,
				`./assets/images/films/${film.title.replace(/\s+/g, '')}.jpg`
			);
			renderCard(currentFilm);				
		});
	})
	.catch((error)=> {
		renderErrorMessage(error);
	});
};

export const fetchAndRenderPlanets = ()=> {
	fetch("https://swapi.dev/api/planets")
	.then(response => response.json())
	.then((data) => {
		data.results.forEach(planet => {			
			const currentPlanet = new CreatePlanetCard(
				planet.name,
				planet.climate, 
				planet.rotation_period,
				planet.orbital_period,
				planet.diameter,
				`./assets/images/planets/${planet.name.replace(/\s+/g, '')}.jpg`
			);
			renderCard(currentPlanet);				
		});
	})
	.catch((error)=> {
		renderErrorMessage(error);
	});
};

export const fetchAndRenderVehicles = ()=> {
	fetch("https://swapi.dev/api/vehicles")
	.then(response => response.json())
	.then((data) => {
		data.results.forEach(vehicle => {			
			const currentVehicle = new CreateVehicleCard(
				vehicle.name,
				vehicle.manufacturer, 
				vehicle.crew,
				vehicle.cargo_capacity,
				vehicle.vehicle_class,
				`./assets/images/vehicles/${vehicle.name.replace(/[\/\s]+/g, '')}.jpg`
			);
			renderCard(currentVehicle);				
		});
	})
	.catch((error)=> {
		renderErrorMessage(error);
	});
};

export const fetchAndRenderCharacters = ()=> {
	fetch("https://swapi.dev/api/people")
	.then(response => response.json())
	.then((data) => {
		data.results.forEach(character => {			
			const currentCharacter = new CreateCharacterCard(
				character.name,
				character.height, 
				character.mass,
				character.hair_color,
				character.skin_color,
				`./assets/images/characters/${character.name.replace(/[\/\s]+/g, '')}.jpg`
			);
			renderCard(currentCharacter);				
		});
	})
	.catch((error)=> {
		renderErrorMessage(error);
	});
};
