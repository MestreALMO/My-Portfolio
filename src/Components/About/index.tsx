import React from 'react';

import { Container } from './styles';
import TabTitle from '../TabTitle';

const About: React.FC = () => {
  return (
    <>
      <Container id="about">
        <TabTitle>About Me</TabTitle>
        <div>
          <p>
            I&apos;m a developer with focus on the front-end, my speciality
            being web development, the coding I&apos;m use to work with are:
            NextJS, ReactJS, TypeScript, JavaScript, HTML, CSS, PHP.
          </p>
          <p>
            Since I was a kid I always dreamed about being a developer, making
            my owns softwares. As the years gonne by, with me putting a lot of
            effort and time to make my dreams come true, I made it true.
          </p>
          <p>
            Today here I am with my diploma (Bachelor&apos;s degrees in
            information systems), lot&apos;s of systems developed and this site
            of my making. This site was made with ReactJS.
          </p>
          <p>
            Among my main hobbies are: Developing; Watching series, animes,
            youtube; gaming on PC and consoles; reading romances.
          </p>
        </div>
      </Container>
    </>
  );
};

export default About;
