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

  div {
    width: ${variables.mainWidth};

    p {
      text-indent: 3em;
      font-size: 26px;
    }
  }
`;
