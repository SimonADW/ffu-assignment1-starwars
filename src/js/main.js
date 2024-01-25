
import renderCard from "./renderCard.js";
import { fetchAndRenderFilms } from "./fetchApis.js";

export function CreateFilmCard(title, director, releaseDate, episodeID, openingCrawl, imageUrl) {
	this.Title = title,
	this.Director = director, 
	this.ReleaseYear = releaseDate, 
	this.EpisodeID = episodeID, 
	this.OpeningCrawl = openingCrawl,
	this.ImageUrl = imageUrl 
}

const selectFunction = ()=> {
	const path = window.location.pathname;
	const pageFile = path.split("/").pop().split(".").shift()

	switch(pageFile) {
		case "films":
			fetchAndRenderFilms();
			break;
		case "characters":
			fetchAndRenderCharacters();
			break;
		case "planets":
			fetchAndRenderPlanets();
			break;
		case "vehicles":
			fetchAndRenderVehicles();
			break;
		default:
			console.log(`Cannot find ${pageFile} function`);		
	};
};

selectFunction();

