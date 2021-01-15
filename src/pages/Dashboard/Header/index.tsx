import React from 'react';
import { IoReloadCircleOutline } from 'react-icons/io5';

import { Container, Button } from './styles';

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

        <Button type="button" onClick={refreshPage}>
          <IoReloadCircleOutline />
        </Button>
      </Container>
    </>
  );
};

export default Header;
