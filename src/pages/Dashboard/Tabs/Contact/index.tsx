import React from 'react';

import { Container, Squares, Info, Email } from './styles';
import TabTitle from '../../Components/TabTitle';
import Linkedin from '~/assets/contact/linkedin.png';
import Github from '~/assets/contact/github.png';
import Codepen from '~/assets/contact/codepen.png';

const Contact: React.FC = () => {
  return (
    <>
      <Container id="contact">
        <TabTitle>Contact</TabTitle>
        <Info>
          <Email href="mailto:lusegardis@gmail.com">
            <div>E-mail:&nbsp;</div>
            <div>lusegardis@gmail.com</div>
          </Email>
          <Squares>
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

            <a
              href="https://github.com/MestreALMO"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <img src={Github} alt="Github" />
                <figcaption>Github</figcaption>
              </figure>
            </a>

            <a
              href="https://codepen.io/MestreALMO"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <img src={Codepen} alt="Codepen" />
                <figcaption>Codepen</figcaption>
              </figure>
            </a>
          </Squares>
        </Info>
      </Container>
    </>
  );
};

export default Contact;
