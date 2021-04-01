import React, { useEffect, useState } from 'react';

import { getDateByPosition, getPastWeatherByPosition } from 'http/weather';
import Info from 'pages/PastWeather/Info';
import * as S from './styled';

const PastWeather = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [pastWeather, setPastWeather] = useState([]);
  const [currentDate, setCurrentDate] = useState(null);
  const [dateFromFiveDays, setDateFromFiveDays] = useState(null);
  const [showWeather, setShowWeather] = useState(false);
  const UnixTimeNextDay = 86400;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
    });
    const getDate = async () => {
      setCurrentDate(await getDateByPosition(latitude, longitude));
      setDateFromFiveDays(currentDate - UnixTimeNextDay * 5);
    };
    getDate();
  }, [currentDate, latitude, longitude]);

  const getPastWeather = async () => {
    const res = await getPastWeatherByPosition(latitude, longitude, dateFromFiveDays, currentDate, UnixTimeNextDay);
    setPastWeather(res.map(item => item.data.current));
  };

  const handleClick = () => {
    setShowWeather(!showWeather);
    getPastWeather();
  };

  return (
    <S.Container>
      <S.Box>
        <S.Header>
          <S.StyledLink to="/">
            <S.Button>Back</S.Button>
          </S.StyledLink>
          <S.Heading>5 previous days</S.Heading>
          <S.Button onClick={handleClick}>{showWeather ? 'Hide previous weather' : 'Get previous weather'}</S.Button>
        </S.Header>
        {showWeather && <Info data={pastWeather} />}
      </S.Box>
    </S.Container>
  );
};

export default PastWeather;
