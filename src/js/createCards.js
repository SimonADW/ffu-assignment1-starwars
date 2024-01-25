export function CreateFilmCard(title, director, releaseDate, episodeID, openingCrawl, imageUrl) {
	this.Title = title,
	this.Director = director, 
	this.ReleaseYear = releaseDate, 
	this.EpisodeID = episodeID, 
	this.OpeningCrawl = openingCrawl,
	this.ImageUrl = imageUrl 
}

export function CreatePlanetCard(title, climate, rotation_period, orbital_period, diameter, imageUrl) {
	this.Title = title,
	this.Climate = climate, 
	this.RotationPeriod = rotation_period, 
	this.OrbitalPeriod = orbital_period, 
	this.Diameter = diameter,
	this.ImageUrl = imageUrl 
}

export function CreateVehicleCard(title, manufacturer, crew, cargo, vehicle_class, imageUrl) {
	this.Title = title,
	this.Manufacturer = manufacturer, 
	this.CrewSize = crew, 
	this.CargoCapasity = cargo, 
	this.VehicleClass = vehicle_class,
	this.ImageUrl = imageUrl 
}