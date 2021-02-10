import styled from 'styled-components';

import * as variables from '../variables';
import bgHome from '../../../assets/homeBg.jpg';

export const Container = styled.div`
  width: 100%;
  background: url(${bgHome}) no-repeat fixed center;
  background-size: cover;
  padding-top: ${variables.navbarHeight};
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    border-radius: 50%;
    display: block;
    max-height: 300px;
    max-width: 300px;
    margin: 0 auto 1em;
    /* width: 100%; */
    border: solid gray 2px;
  }
`;
