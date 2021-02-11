import React from 'react';

import { Container } from './styles';
import TabTitle from '../../Components/TabTitle';

const Contact: React.FC = () => {
  return (
    <>
      <Container>
        <TabTitle>Contact</TabTitle>
        <div>
          <p>
            I&apos;m a developer with focus on the front-end, my speciality
            being web development, the coding I&apos;m use to work with are:
            React, TS, JS, HTML, CSS, PHP.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Contact;
