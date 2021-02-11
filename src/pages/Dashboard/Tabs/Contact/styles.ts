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

  a {
    text-decoration: none;
    color: #fff;
    font-size: 22px;
    margin-bottom: 3vh;
  }
`;
