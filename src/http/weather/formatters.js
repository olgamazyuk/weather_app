export const weatherByPositionFormatter = data => {
  return {
    currentTemp: `${Math.round(data.main.temp)}°C`,
    pressure: `${data.main.pressure}hPa`,
    humidity: `${data.main.humidity}%`,
    wind: `${data.wind.speed}m/s`,
    description: data.weather[0].description,
    sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-GB').slice(0, 5),
    sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString('en-GB').slice(0, 5),
  };
};

export const mapByPositionFormatter = config => {
  return `${config.baseURL}/${config.url}`;
};
