
const renderErrorMessage = (error)=> {
	const cardContainer = document.querySelector(".cards");
	const errorMessageContainer = document.createElement("div");
	cardContainer.append(errorMessageContainer);
	errorMessageContainer.classList.add("error-message");
	errorMessageContainer.innerHTML = `Ooops 😔 Something went wrong: <br/> Error message: ${error.message}`;
	errorMessageContainer.style.display = "block";

	setInterval(()=> {
		errorMessageContainer.style.display = "none";
	}, 5000)
};

export default renderErrorMessage;