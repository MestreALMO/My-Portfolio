import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <ul>
          <li>
            <button type="button">Home</button>
          </li>
          <li>
            <button type="button">Projects</button>
          </li>
          <li>
            <button type="button">About</button>
          </li>
          <li>
            <button type="button">Contact</button>
          </li>
        </ul>
      </Container>
    </>
  );
};

export default Header;
