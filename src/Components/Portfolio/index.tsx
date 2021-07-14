import React, { useMemo } from 'react';

import { Container, Element, Elements } from './styles';
import TabTitle from '../TabTitle';
import * as Projects from './projects';

const Portfolio: React.FC = () => {
  const automaticHtml = useMemo(() => {
    return Projects.projects.map(item => (
      <Element
        key={item}
        href={`"https://github.com/MestreALMO/" + ${item}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <figure>
          <img
            src={
              `${Projects.githubLink}` +
              `${item}` +
              '/blob/main/_README.md/img01.png?raw=true'
            }
            alt={item}
          />
          <figcaption>{item}</figcaption>
        </figure>
      </Element>
    ));
  }, []);

  return (
    <>
      <Container id="portfolio">
        <TabTitle>Portfolio</TabTitle>

        <Elements>{automaticHtml}</Elements>
      </Container>
    </>
  );
};

export default Portfolio;
