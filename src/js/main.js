
import renderCard from "./renderCard.js";

function CreateFilmCard(title, director, releaseYear, episodeID, openingCrawl, imageUrl) {
	this.Title = title,
	this.Director = director, 
	this.ReleaseYear = releaseYear, 
	this.EpisodeID = episodeID, 
	this.OpeningCrawl = openingCrawl,
	this.ImageUrl = imageUrl 
}

const attackOfTheClones = new CreateFilmCard(
	"Attack of the clones",
	"George Lucas",
	2002,
	2,
	"There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo",
	"assets/images/films/attack-of-the-clones.jpeg",
	);

const aNewHope = new CreateFilmCard(
	"A New Hope",
	"George Lucas",
	1977,
	4,
	"It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.",
	"assets/images/films/A_ New _Hope.jpeg"
);

const empireStrikesBack = new CreateFilmCard(
	"The Empire Strikes Back",
	"Irvin Kershner",
	1980,
	5,
	"It is a dark time for the Rebellion.\r\nAlthough the Death Star has been\r\ndestroyed, Imperial troops have\r\ndriven the Rebel forces from their\r\nhidden base and pursued them\r\nacross the galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker has\r\nestablished a new secret base on\r\nthe remote ice world of Hoth.",
	"assets/images/films/empireStrikesBack.jpeg"
);

renderCard(attackOfTheClones);
renderCard(aNewHope);
renderCard(empireStrikesBack);