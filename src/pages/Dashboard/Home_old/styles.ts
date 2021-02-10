import styled from 'styled-components';
import * as variables from '../variables';

export const Container = styled.div`
  background: #2039cc;
  height: 300px;

  display: flex;
  flex-direction: column;

  div {
    padding: 40px 0 0 0;
  }

  p {
    text-indent: 30px;
    font-family: cursive;
    font-size: 20px;
  }

  /* @media (max-width: 730px) {
    div h1 {
      font-size: 16px;
    }
  }

  @media (max-width: 455px) {
    div h1 {
      font-size: 10px;
    }
  } */
`;
