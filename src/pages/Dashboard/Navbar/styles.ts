import styled from 'styled-components';

export const Container = styled.div`
  background: #192da1;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;

  @media (max-width: 730px) {
    div h1 {
      font-size: 16px;
    }
  }

  @media (max-width: 455px) {
    div h1 {
      font-size: 10px;
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
  }
`;
