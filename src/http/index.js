import axios from 'axios';

const baseURL = {
  weatherData: `https://api.openweathermap.org/data/2.5`,
  weatherMap: `https://tile.openweathermap.org/map`,
};

export const httpData = axios.create({
  baseURL: baseURL.weatherData,
});

export const httpMap = axios.create({
  baseURL: baseURL.weatherMap,
});
