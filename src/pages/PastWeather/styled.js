import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BackgroundPast from './bg-image-past.jpg';

export const Container = styled.div`
  background-image: url(${BackgroundPast});
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
  justify-content: space-around;
  align-items: center;
`;

export const Heading = styled.h1`
  text-align: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
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
