import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Info = ({ data }) => {
  return (
    <S.Weather>
      <S.Info>Temperature: {data.currentTemp}</S.Info>
      <S.Info>Pressure: {data.pressure}</S.Info>
      <S.Info>Humidity: {data.humidity}</S.Info>
      <S.Info>Wind: {data.wind}</S.Info>
      <S.Info>Description: {data.description}</S.Info>
      <S.Info>Sunrise: {data.sunrise}</S.Info>
      <S.Info>Sunset: {data.sunset}</S.Info>
    </S.Weather>
  );
};

Info.propTypes = {
  data: PropTypes.shape({
    currentTemp: PropTypes.string.isRequired,
    pressure: PropTypes.string.isRequired,
    humidity: PropTypes.string.isRequired,
    wind: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sunrise: PropTypes.string.isRequired,
    sunset: PropTypes.string.isRequired,
  }),
};

Info.defaultProps = {
  data: {
    currentTemp: 'Sorry, no info about temperature',
    pressure: 'Sorry, no info about pressure',
    humidity: 'Sorry, no info about humidity',
    wind: 'Sorry, no info about wind',
    description: 'Sorry, no info about description',
    sunrise: 'Sorry, no info about sunrise',
    sunset: 'Sorry, no info about sunset',
  },
};

export default Info;
