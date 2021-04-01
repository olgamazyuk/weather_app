import { httpData, httpMap } from 'http/index';
import { weatherByPositionFormatter, mapByPositionFormatter } from './formatters';

export const getWeatherByPosition = async (latitude, longitude) => {
  const url = `weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_WEATHER_KEY}`;
  const { data } = await httpData.get(url);
  return weatherByPositionFormatter(data);
};

export const getMapByPosition = async (latitude, longitude) => {
  const zoom = 3;
  const longToTile = () => {
    return Math.floor(((longitude + 180) / 360) * 2 ** zoom);
  };
  const latToTile = () => {
    return Math.floor(
      ((1 - Math.log(Math.tan((latitude * Math.PI) / 180) + 1 / Math.cos((latitude * Math.PI) / 180)) / Math.PI) / 2) *
        2 ** zoom,
    );
  };
  const url = `temp_new/${zoom}/${longToTile(longitude)}/${latToTile(latitude)}.png?appid=${
    process.env.REACT_APP_WEATHER_KEY
  }`;
  const { config } = await httpMap.get(url);
  return mapByPositionFormatter(config);
};

export const getWeatherForecastByPosition = async (latitude, longitude) => {
  const url = `onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`;
  const { data } = await httpData.get(url);
  return data.daily;
};

export const getDateByPosition = async (latitude, longitude) => {
  const url = `weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_WEATHER_KEY}`;
  const { data } = await httpData.get(url);
  return data.dt;
};

export const getPastWeatherByPosition = async (latitude, longitude, dateFromFiveDays, currentDate, UnixTimeNextDay) => {
  const results = [];
  for (let i = dateFromFiveDays; i < currentDate; i += UnixTimeNextDay) {
    const url = `onecall/timemachine?lat=${latitude}&lon=${longitude}&dt=${i}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`;
    results.push(httpData.get(url));
  }
  return Promise.all(results);
};
