import styled from 'styled-components';

import * as variables from '../../variables';

export const Container = styled.div`
  background: ${variables.bgLightColor};
  width: 100%;
  padding: 88px 0 88px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;

  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Frame = styled.a`
  text-decoration: none;
  border-radius: 4px;
  margin: 0 15px 0 15px;

  figure {
    background-color: #333;
    transition: box-shadow 0.2s;

    &:hover {
      box-shadow: 0 10px 100px #c82333;
    }

    img {
    }

    figcaption {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 4px 4px 4px;
      color: #fff;
      font-weight: 800;
    }

    p {
      background-color: #888;
      color: #000;
      padding: 4px;
      text-indent: 16px;
    }
  }

  @media only screen and (max-width: 1300px) {
    img {
      width: 400px;
    }
  }

  @media only screen and (max-width: 900px) {
    img {
      width: auto;
    }
    margin: 15px;
  }

  @media only screen and (max-width: 600px) {
    img {
      width: 400px;
    }
    margin: 15px;
  }
`;
