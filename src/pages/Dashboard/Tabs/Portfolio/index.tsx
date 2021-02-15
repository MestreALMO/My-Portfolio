import React from 'react';

import { Container, Row, Frame } from './styles';
import TabTitle from '../../Components/TabTitle';

const Portfolio: React.FC = () => {
  return (
    <>
      <Container>
        <TabTitle>Portfolio</TabTitle>
        <Row>
          <Frame
            href="https://github.com/MestreALMO/MestreALMO.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure>
              <img
                src="https://github.com/MestreALMO/MestreALMO.github.io/blob/master/_README.md/app.gif?raw=true"
                alt="Test"
              />
              <figcaption>Test</figcaption>
            </figure>
          </Frame>
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;
