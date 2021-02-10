import React from 'react';
import { IoReloadCircleOutline } from 'react-icons/io5';

import { Container, Button, Span } from './styles';

const Header: React.FC = () => {
  function refreshPage() {
    window.location.reload();
  }

  return (
    <>
      <Container>
        <div>
          <h1>Welcome to André Lusegadis&apos; Portfolio!</h1>
        </div>

        <Button onClick={refreshPage}>
          <IoReloadCircleOutline />
          <Span>See the typing animation again</Span>
        </Button>
      </Container>
    </>
  );
};

export default Header;
