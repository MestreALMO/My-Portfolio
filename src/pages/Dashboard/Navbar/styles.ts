import styled from 'styled-components';
import { shade } from 'polished';

import * as variables from '../variables';

export const Container = styled.div`
  background: ${variables.bgNavbarFooter};
  height: ${variables.navbarHeight};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  overflow: hidden;
  opacity: 0.8;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${variables.mainWidth};

    svg {
      font-size: 30px;
      margin: 0 30px 0 30px;
      color: #000312;
    }
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;

  li {
    button {
      background: transparent;
      font-family: cursive, sans-serif;
      color: #000312;
      height: ${variables.navbarHeight};
      border: 0;
      padding: 0 15px 0 15px;
      transition: background-color 0.2s;
      font-weight: 600;
      font-size: 1em;

      &:hover {
        color: gray;
        background: ${shade(0.2, '#000312')};
      }
    }
  }
`;
