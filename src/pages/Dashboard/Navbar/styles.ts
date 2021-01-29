import styled from 'styled-components';
import * as variables from '../variables';

export const Container = styled.div`
  background: #192da1;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${variables.mainMargin} 0 ${variables.mainMargin};

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

  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;

    li {
      margin-left: 30px;

      button {
        background: transparent;
        font-family: cursive, sans-serif;
        color: #fff;
        height: 48px;
        border: 0;

        &:hover {
          color: gray;
        }
      }

      &:first-child {
        margin-left: 0px;
      }
    }
  }
`;
