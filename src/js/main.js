

import { fetchAndRenderFilms, fetchAndRenderPlanets, fetchAndRenderVehicles, fetchAndRenderCharacters } from "./fetchApis.js";


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

