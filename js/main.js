

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


const renderCard = (objectToRender)=> {
	const cardContainer = document.querySelector(".cards");
	
	const card = document.createElement("div");
	card.classList.add("cards__card");

	cardContainer.appendChild(card);

	const imageContainer = document.createElement("img");
	imageContainer.classList.add("card__image");
	imageContainer.setAttribute("src", objectToRender.ImageUrl)
	const cardContent = document.createElement("div");
	cardContent.classList.add("card__content");
	
	card.append(imageContainer, cardContent);
	
	const cardTitle = document.createElement("h5");
	const cardList = document.createElement("ul");
	
	cardContent.append(cardTitle, cardList)
	

	for (let key in objectToRender) {
		
		if (key === "Title" || key === "ImageUrl") {
			continue;
		}
		
		console.log(key);

		const listItem = document.createElement("li");
		cardList.appendChild(listItem);

		const keySpan = document.createElement("span");
		keySpan.textContent = `${key}: `;
		const valueSpan = document.createElement("span");
		valueSpan.textContent = objectToRender[key];		
		listItem.append(keySpan, valueSpan);
	}
}


renderCard(attackOfTheClones);

