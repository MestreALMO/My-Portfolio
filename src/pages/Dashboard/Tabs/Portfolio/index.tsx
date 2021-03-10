import React from 'react';

import { Container, Row, Frame } from './styles';
import TabTitle from '../../Components/TabTitle';
import * as Projects from './projects';

const Portfolio: React.FC = () => {
  // const api = 'https://api.github.com/repos/MestreALMO/';

  return (
    <>
      <Container id="portfolio">
        <TabTitle>Portfolio</TabTitle>
        <Row>
          <Frame
            href={Projects.githubLink + Projects.projects[0]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure>
              <img
                src={`${
                  Projects.githubLink + Projects.projects[0]
                }/blob/master/_README.md/app.gif?raw=true`}
                alt={Projects.projects[0]}
              />
              <figcaption>{Projects.projects[0]}</figcaption>
              {/* <p>test</p> */}
            </figure>
          </Frame>
          <Frame
            href={Projects.githubLink + Projects.projects[0]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure>
              <img
                src={`${
                  Projects.githubLink + Projects.projects[1]
                }/blob/master/_README.md/app.gif?raw=true`}
                alt={Projects.projects[1]}
              />
              <figcaption>{Projects.projects[1]}</figcaption>
              {/* <p>test</p> */}
            </figure>
          </Frame>
        </Row>
        <Row>
          <Frame
            href={Projects.githubLink + Projects.projects[2]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure>
              <img
                src={`${
                  Projects.githubLink + Projects.projects[2]
                }/blob/master/_README.md/app.gif?raw=true`}
                alt={Projects.projects[2]}
              />
              <figcaption>{Projects.projects[2]}</figcaption>
              {/* <p>test</p> */}
            </figure>
          </Frame>
          <Frame
            href={Projects.githubLink + Projects.projects[3]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure>
              <img
                src={`${
                  Projects.githubLink + Projects.projects[3]
                }/blob/master/_README.md/app.gif?raw=true`}
                alt={Projects.projects[3]}
              />
              <figcaption>{Projects.projects[3]}</figcaption>
              {/* <p>test</p> */}
            </figure>
          </Frame>
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;
