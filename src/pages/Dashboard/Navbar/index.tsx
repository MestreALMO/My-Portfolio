import React from 'react';
import { BiWorld } from 'react-icons/bi';

import { Container, Ul } from './styles';

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <div>
          <BiWorld />
          <Ul>
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
          </Ul>
        </div>
      </Container>
    </>
  );
};

export default Header;
