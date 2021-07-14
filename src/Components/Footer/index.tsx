import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => {
  const Mensagem = `© André L. M. de Oliveira`;
  const year = new Date().getFullYear();

  return (
    <>
      <Container>
        <p>
          {Mensagem} {year}
        </p>
      </Container>
    </>
  );
};

export default Footer;
