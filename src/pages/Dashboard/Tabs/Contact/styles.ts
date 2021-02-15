import styled from 'styled-components';

import * as variables from '../../variables';

export const Container = styled.div`
  background: ${variables.bgDarkColor};
  width: 100%;
  padding: ${variables.paddingMain} 0 ${variables.paddingMain} 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Email = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 22px;
  margin-bottom: 20px;
  border-radius: 10%;
  padding: 4px;
  transition: color 0.2s;

  &:hover {
    background-color: #c82333;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #363636;
  padding: 50px;
  border-radius: 50%;
`;

export const Squares = styled.div`
  display: flex;
  flex-direction: row;

  a {
    text-decoration: none;
    color: #fff;
    margin: 0 15px 0 15px;
    background-color: #003561;
    border-radius: 10%;
    transition: background-color 0.2s;

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
