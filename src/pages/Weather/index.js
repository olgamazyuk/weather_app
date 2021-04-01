import React, { useEffect, useState } from 'react';

import Info from 'pages/Weather/Info';
import { getWeatherByPosition, getMapByPosition } from 'http/weather';
import * as S from './styled';

const Weather = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weatherData, setWeatherData] = useState({
    currentTemp: '',
    pressure: '',
    humidity: '',
    wind: '',
    description: '',
    sunrise: '',
    sunset: '',
  });
  const [weatherMap, setWeatherMap] = useState(null);
  const [showWeather, setShowWeather] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
    });
  }, []);

  const getWeatherData = async () => {
    setWeatherData(await getWeatherByPosition(latitude, longitude));
  };

  const getWeatherMap = async () => {
    setWeatherMap(await getMapByPosition(latitude, longitude));
  };

  const handleClick = () => {
    setShowWeather(!showWeather);
    getWeatherData();
    getWeatherMap();
  };

  return (
    <S.Container>
      <S.Box>
        <S.Header>
          <S.HeaderImage />
          <S.Heading>Weather App</S.Heading>
          <S.Button onClick={handleClick}>{showWeather ? 'Hide weather for today' : 'Get weather for today'}</S.Button>
          <S.StyledLink to="/forecast">
            <S.Button>Next 8 days</S.Button>
          </S.StyledLink>
          <S.StyledLink to="/past">
            <S.Button>Previous 5 days</S.Button>
          </S.StyledLink>
        </S.Header>
        <S.WeatherContainer>
          {showWeather && <Info data={weatherData} />}
          {showWeather && <S.Map src={weatherMap} alt="map" />}
        </S.WeatherContainer>
      </S.Box>
    </S.Container>
  );
};

export default Weather;
