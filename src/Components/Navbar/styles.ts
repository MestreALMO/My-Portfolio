import styled from 'styled-components';
import { shade } from 'polished';

import * as variables from '../../pages/Frontpage/variables';

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

  @media only screen and (max-width: 800px) {
    visibility: hidden;
  }
`;

export const Container2 = styled.div`
  background: ${variables.bgNavbarFooter};
  /* height: ${variables.navbarHeight}; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  overflow: hidden;
  opacity: 0.8;
  transition: opacity 0.3s;
  visibility: hidden;

  @media only screen and (max-width: 800px) {
    visibility: visible;
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: -16px;

    li {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      button {
        width: 100%;
      }

      a {
        padding-top: 20px;
        padding-bottom: 20px;
      }
    }
  }

  .Accordion {
    width: 100%;
    height: ${variables.navbarHeight};
  }
  .AccordionSummary {
    margin-top: -10px;
    width: 100%;
  }
  .Mui-expanded {
    height: auto;
  }
`;

export const MiniNavBar = styled.button`
  width: 100%;
  border: 0;
  background-color: transparent;
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${variables.mainWidth};

  svg {
    font-size: 2.2em;
    margin: 0 30px 0 30px;
    color: #000312;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;

  li {
    a {
      padding: 15px;
      background: transparent;
      font-family: cursive, sans-serif;
      color: #000312;
      padding-top: ${variables.navbarHeight};
      padding-bottom: ${variables.navbarHeight};
      border: 0;
      transition: background-color 0.2s;
      font-weight: 600;
      font-size: 1.2em;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        color: gray;
        background: ${shade(0.2, '#000312')};
      }
    }
  }
`;
