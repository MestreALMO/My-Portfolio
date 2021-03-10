import React from 'react';

import Navbar from './Navbar';
import Home from './Tabs/Home';
import About from './Tabs/About';
import Portfolio from './Tabs/Portfolio';
import Contact from './Tabs/Contact';
import Footer from './Footer';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </Container>
    </>
  );
};

export default Dashboard;
