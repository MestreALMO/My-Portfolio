import React from 'react';

import Navbar from './Navbar';
import Home from './Tabs/Home';
import About from './Tabs/About';
import Portfolio from './Tabs/Portfolio';
import Contact from './Tabs/Contact';
import { Container } from './styles';

const Dashboard: React.FC = () => (
  <>
    <Container>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </Container>
  </>
);

export default Dashboard;
