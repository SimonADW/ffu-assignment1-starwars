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

	const cardTitle = document.createElement("h5");
	cardTitle.textContent = objectToRender.Title;
	cardContent.appendChild(cardTitle);
	
	card.append(imageContainer, cardContent);

	const cardContentList = document.createElement("ul");
	
	cardContent.append(cardTitle, cardContentList)
	
	for (let key in objectToRender) {
		if (key === "Title" || key === "ImageUrl") {
			continue;
		}	
				
		const listItem = document.createElement("li");
		cardContentList.appendChild(listItem);

		const keySpan = document.createElement("span");
		keySpan.textContent = `${key}: `;
		const valueSpan = document.createElement("span");
		valueSpan.textContent = objectToRender[key];		
		listItem.append(keySpan, valueSpan);
	}

	const lightSaber = document.createElement("div");
	lightSaber.classList.add("light-saber");
	cardContainer.appendChild(lightSaber);

	const saberHandle = document.createElement("div");
	const saberLight = document.createElement("div");
	const saberLight2 = document.createElement("div");
	lightSaber.append(saberLight ,saberHandle, saberLight2);

};

export default renderCard;