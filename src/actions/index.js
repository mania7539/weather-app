import axios from "axios";

const API_KEY = "8f88977c65d644e0270a474780baf026";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?apikey=${API_KEY}`;
// use ES6 formatted string syntax

export const FETCH_WEATHER = "FETCH_WEATHER";
// make the name and the value independent for encapsulation so   
// we can just use the const and don't have to worry about its value

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    // use 'us' for country code as default country
    const request = axios.get(url);

    return ({
        type: FETCH_WEATHER,
        payload: request
    });
}