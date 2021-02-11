import React from 'react';

import { Container } from './styles';
import TabTitle from '../../Components/TabTitle';

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
              <img
                src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                alt="Linkedin"
              />
              <figcaption>Linkedin</figcaption>
            </figure>
          </a>
        </div>
      </Container>
    </>
  );
};

export default Contact;
