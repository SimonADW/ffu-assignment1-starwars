import { CreateFilmCard } from "./main.js"
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
				`./assets/images/films/${film.title.replace(/\s+/g, '')}.jpeg`
			);
			renderCard(currentFilm);				
		});
	});
};
