const cardContainer = document.querySelector(".cards");
const card = document.querySelector(".cards__card");

function CreateFilmCard(title, director, releaseYear, episodeID, openingCrawl, imageUrl) {
	this.title = title,
	this.director = director, 
	this.releaseYear = releaseYear, 
	this.episodeID = episodeID, 
	this.openingCrawl = openingCrawl,
	this.imageUrl = imageUrl
}

const attackOfTheClones = new CreateFilmCard(
	"Attack of the clones",
	"George Lucas",
	2002,
	2,
	"There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....",
	"assets/images/films/attack-of-the-clones.jpeg"
	);

console.log(attackOfTheClones.director);

