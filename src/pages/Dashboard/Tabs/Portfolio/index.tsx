import React from 'react';

import { Container } from './styles';
import TabTitle from '../../Components/TabTitle';

const Portfolio: React.FC = () => {
  return (
    <>
      <Container>
        <TabTitle>Portfolio</TabTitle>
        <div>
          <p>
            I&apos;m a developer with focus on the front-end, my speciality
            being web development, the coding I&apos;m use to work with are:
            React, JS, TS, HTML, CSS, PHP.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Portfolio;
