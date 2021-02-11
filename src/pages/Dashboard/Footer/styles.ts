import styled from 'styled-components';

import * as variables from '../variables';

export const Container = styled.div`
  background: ${variables.bgNavbarFooter};
  height: ${variables.navbarHeight};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: #090502;
  font-weight: 800;
  font-size: 20px;
`;
