import React from 'react';

import Header from './Header';
import Navbar from './Navbar';
import HomeOld from './Home_old';
import Home from './Home';
import Home2 from './Home2';
import Projects from './Projects';
import { Container } from './styles';

const Dashboard: React.FC = () => (
  <>
    <Container>
      <Navbar />
      <Header />
      <Home />
      <HomeOld />
      <Home2 />
      <Projects />
    </Container>
  </>
);

export default Dashboard;
