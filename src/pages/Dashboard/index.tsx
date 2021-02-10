import React from 'react';

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import { Container } from './styles';

const Dashboard: React.FC = () => (
  <>
    <Container>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </Container>
  </>
);

export default Dashboard;
