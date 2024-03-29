import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    button {
      cursor:pointer;
    }
  }

  body {
    background: #000;
    color: white;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
