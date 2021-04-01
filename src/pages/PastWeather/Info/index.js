import React from 'react';
import PropTypes from 'prop-types';

import DayCard from 'components/DayCard';
import * as S from './styled';

const Info = ({ data }) => {
  return (
    <S.WeatherInfo>
      {data.map(item => {
        return <DayCard item={item} temp={item.temp} key={item.dt} />;
      })}
    </S.WeatherInfo>
  );
};

Info.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

Info.defaultProps = {
  data: [],
};

export default Info;
