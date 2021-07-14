import styled from 'styled-components';

import * as variables from '../../pages/Frontpage/variables';

export const Container = styled.div`
  background: ${variables.bgDarkColor};
  width: 100%;
  padding: 88px 0 88px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Element = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0.6em 1.6em;
  background: #2d3748;
  border: solid #2d3748 0.3rem;
  transition: border 0.5s;

  &:hover {
    border: solid red 0.3rem;
  }

  figure {
    max-width: 360px;

    img {
      width: 100%;
    }

    figcaption {
      display: flex;
      justify-content: center;
      padding: 0 0.3rem 0.3rem;
      background: var(--black);
    }
  }
`;

export const Elements = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1em;
`;
