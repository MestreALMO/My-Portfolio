import React from 'react';
import { BiWorld, BiMenu } from 'react-icons/bi';

import { Container, Navbar, Container2, Ul } from './styles';

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <Navbar>
          <BiWorld />
          <Ul>
            <li>
              <button type="button">Home</button>
            </li>
            <li>
              <button type="button">About</button>
            </li>
            <li>
              <button type="button">Portfolio</button>
            </li>
            <li>
              <button type="button">Contact</button>
            </li>
          </Ul>
        </Navbar>
      </Container>
      <Container2>
        <Navbar>
          <BiWorld />
          <Ul>
            <button type="button">
              <BiMenu />
            </button>
            <div />
          </Ul>
        </Navbar>
      </Container2>
    </>
  );
};

export default Header;
