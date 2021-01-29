import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <p>
          Welcome to my portfolio project! This project was created using
          ReactJS.
        </p>
        <p>Here is my other projects, take a look.</p>
        <p>
          If you like what you see and have a job proposal, please contact me.
        </p>
      </Container>
    </>
  );
};

export default Header;
