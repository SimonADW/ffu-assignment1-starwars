import { CreateFilmCard, CreatePlanetCard, CreateVehicleCard } from "./createCards.js"
import renderCard from "./renderCard.js";

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
	});
};

export const fetchAndRenderPlanets = ()=> {
	fetch("https://swapi.dev/api/planets")
	.then(response => response.json())
	.then((data) => {
		console.log(data);
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
	});
};

export const fetchAndRenderVehicles = ()=> {
	fetch("https://swapi.dev/api/vehicles")
	.then(response => response.json())
	.then((data) => {
		console.log(data);
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
	});
};
