import styled from 'styled-components';

export const Container = styled.h2`
  font-size: 40px;

  &:after {
    content: '';
    width: 60%;
    height: 3px;
    background: #c82333;
    display: block;
    margin: 15px auto;
    transition: all 0.2s ease-in-out;
    margin-bottom: 30px;
  }

  &:hover:after {
    width: 100%;
  }
`;
