import styled from 'styled-components';

import * as variables from '../../variables';

export const Container = styled.div`
  background: ${variables.bgLightColor};
  width: 100%;
  padding: ${variables.paddingMain} 0 ${variables.paddingMain} 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    width: ${variables.mainWidth};
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

export const Frame = styled.a`
  text-decoration: none;
  border-radius: 4px;

  figure {
    background-color: #333;
    transition: box-shadow 0.2s;

    &:hover {
      box-shadow: 0 10px 100px #c82333;
    }

    img {
      width: 470px;
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
`;
