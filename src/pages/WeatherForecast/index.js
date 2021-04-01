import React, { useEffect, useState } from 'react';

import { getWeatherForecastByPosition } from 'http/weather';
import Info from 'pages/WeatherForecast/Info';
import * as S from './styled';

const WeatherForecast = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [dailyData, setDailyData] = useState([]);
  const [showWeather, setShowWeather] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
    });
  }, []);

  const getWeatherForecast = async () => {
    setDailyData(await getWeatherForecastByPosition(latitude, longitude));
  };

  const handleClick = () => {
    setShowWeather(!showWeather);
    getWeatherForecast();
  };

  return (
    <S.Container>
      <S.Box>
        <S.Header>
          <S.StyledLink to="/">
            <S.Button>Back</S.Button>
          </S.StyledLink>
          <S.Heading>8 Day Forecast</S.Heading>
          <S.Button onClick={handleClick}>{showWeather ? 'Hide forecast' : 'Get forecast'}</S.Button>
        </S.Header>
        {showWeather && <Info data={dailyData} />}
      </S.Box>
    </S.Container>
  );
};

export default WeatherForecast;
