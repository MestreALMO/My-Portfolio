import styled from 'styled-components';

import * as variables from '../../pages/Frontpage/variables';

export const Container = styled.div`
  background: ${variables.bgLightColor};
  width: 100%;
  padding: 88px 0 88px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #363636;
  padding: 25px;
  border-radius: 10%;
  max-width: 400px;
`;

export const Email = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #fff;
  font-size: 22px;
  margin-bottom: 10px;
  border-radius: 10%;
  padding: 4px;
  transition: color 0.2s;

  &:hover {
    background-color: #c82333;
  }

  @media screen and (max-width: 410px) {
    flex-direction: column;
  }
`;

export const Squares = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 410px) {
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: #fff;
    margin: 0 15px 0 15px;
    background-color: #003561;
    border-radius: 10%;
    transition: background-color 0.2s;
    margin-bottom: 8px;

    &::first-child {
      margin-bottom: 0;
    }

    &::last-child {
      margin-bottom: 0;
    }

    &:hover {
      background-color: #c82333;
    }

    figure {
      display: flex;
      flex-direction: column;
      align-items: center;

      figcaption {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 16px;
        background-color: #000000;
        border-radius: 10%;
        width: 90%;
        margin: 2px;
      }
    }
  }
`;
