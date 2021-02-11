import React from 'react';

import { Container } from './styles';
import TabTitle from '../../Components/TabTitle';
import Linkedin from '@assets/contact/linkedin.png';

const Contact: React.FC = () => {
  return (
    <>
      <Container>
        <TabTitle>Contact</TabTitle>
        <a href="mailto:lusegardis@gmail.com">E-mail: lusegardis@gmail.com</a>
        <div>
          <a
            href="https://www.linkedin.com/in/andr%C3%A9-lusegardis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure>
              <img src={Linkedin} alt="Linkedin" />
              <figcaption>Linkedin</figcaption>
            </figure>
          </a>
        </div>
      </Container>
    </>
  );
};

export default Contact;
