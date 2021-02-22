import styled from 'styled-components';

import * as variables from '../../variables';

export const Container = styled.div`
  background: ${variables.bgDarkColor};
  width: 100%;
  padding: 88px 0 88px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    width: ${variables.mainWidth};
    padding: 0 100px 0 100px;

    p {
      text-indent: 3em;
      font-size: 26px;
    }
  }

  @media only screen and (max-width: ${variables.mainWidth}) {
    div {
      width: 100%;
      padding: 30px;
    }
  }
`;
