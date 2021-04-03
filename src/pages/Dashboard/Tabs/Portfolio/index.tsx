import React, { useMemo } from 'react';

import { Container, Row, Frame } from './styles';
import TabTitle from '../../Components/TabTitle';
import * as Projects from './projects';

const ProjectInPair = Projects.projects.reduce((acc, curr, index) => {
  if (index && (index + 1) % 2 === 0) {
    acc.push([Projects.projects[index - 1], Projects.projects[index]]);
  }
  return acc;
}, [] as Array<string[]>);

const Portfolio: React.FC = () => {
  const automaticHtml = useMemo(() => {
    return ProjectInPair.map(item => (
      <Row key={item.join()}>
        <Frame
          href={Projects.githubLink + item[0]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure>
            <img
              src={`${
                Projects.githubLink + item[0]
              }/blob/master/_README.md/app.gif?raw=true`}
              alt={item[0]}
            />
            <figcaption>{item[0]}</figcaption>
            {/* <p>test</p> */}
          </figure>
        </Frame>
        <Frame
          href={Projects.githubLink + item[1]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure>
            <img
              src={`${
                Projects.githubLink + item[1]
              }/blob/master/_README.md/app.gif?raw=true`}
              alt={item[1]}
            />
            <figcaption>{item[1]}</figcaption>
            {/* <p>test</p> */}
          </figure>
        </Frame>
      </Row>
    ));
  }, []);

  return (
    <>
      <Container id="portfolio">
        <TabTitle>Portfolio</TabTitle>
        {automaticHtml}
      </Container>
    </>
  );
};

export default Portfolio;
