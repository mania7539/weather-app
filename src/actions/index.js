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

    console.log("Request: ", request);

    return ({
        type: FETCH_WEATHER,
        payload: request
    });
}
//  ``` Get message: 
//  bundle.js:22739 Request:  Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}__proto__: Promise[[PromiseStatus]]: "resolved"[[PromiseValue]]: Object
//  bundle.js:24306 Action received  {type: "FETCH_WEATHER", payload: {…}}
//  ```
//  it shows that the action creates first which gets pending, 
//  and then it resolves, so passes to reducer later.
//  redux-promise is a middleware, so this is what it does - pending until it resolves.