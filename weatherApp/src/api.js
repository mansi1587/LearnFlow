// const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
 export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bd9af51e50mshfe6bb5596f93ac4p1c9984jsn014e7085c249',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "f7b5ae3b75c16ba41cab12cffd2bf445"; 

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }