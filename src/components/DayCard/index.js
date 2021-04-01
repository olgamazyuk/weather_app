import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import * as S from './styled';

const DayCard = ({ item, temp }) => {
  const newDate = new Date();
  const weekday = item.dt * 1000;
  newDate.setTime(weekday);

  return (
    <S.Card>
      <S.CardTitle>{moment(newDate).format('dddd')}</S.CardTitle>
      <S.CardDate>{moment(newDate).format('MMMM Do, h:mm a')}</S.CardDate>
      <S.CardTemperature>{Math.round(temp)}°C</S.CardTemperature>
      <S.CardText>{item.weather[0].description}</S.CardText>
    </S.Card>
  );
};

DayCard.propTypes = {
  item: PropTypes.shape({
    dt: PropTypes.number,
    temp: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    weather: PropTypes.array,
  }),
  temp: PropTypes.number,
};

DayCard.defaultProps = {
  item: {},
  temp: 'No info about temperature',
};

export default DayCard;
