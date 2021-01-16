import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <a href="/">André Lusegardis&apos; Portfolio</a>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
        </ul>
        Contact
      </Container>
    </>
  );
};

export default Header;
