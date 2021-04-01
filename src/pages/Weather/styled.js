import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Background from './bg-image.jpg';
import WeatherAnimation from './weather.svg';

export const Container = styled.div`
  background-image: url(${Background});
  background-size: cover;
  background-position: 100% 100%;
  height: 100%;
`;

export const Box = styled.div`
  background-color: rgba(233, 236, 239, 0.6);
  border-radius: 0.3rem;
  margin: 4rem 6rem;
  padding: 1rem 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Heading = styled.h2`
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.2;
  margin: 0.67em 0;
`;

export const Button = styled.button`
  height: 3rem;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
  color: #ffffff;
  background-color: #007bff;
  border-color: #007bff;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const HeaderImage = styled.div`
  background-image: url(${WeatherAnimation});
  background-size: cover;
  width: 13rem;
  height: 13rem;
`;

export const WeatherContainer = styled.div`
  display: flex;
`;

export const Map = styled.img`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 0.3rem;
`;
