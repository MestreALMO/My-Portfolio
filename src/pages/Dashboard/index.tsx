import React from 'react';

import Header from './Header';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import { Container } from './styles';

const Dashboard: React.FC = () => (
  <>
    <Container>
      <Header />
      <Navbar />
      <Home />
      <Projects />
    </Container>
  </>
);

export default Dashboard;
