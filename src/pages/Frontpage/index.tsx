import React from 'react';

import Navbar from '../../Components/Navbar';
import Home from '../../Components/Home';
import About from '../../Components/About';
import Portfolio from '../../Components/Portfolio';
import Contact from '../../Components/Contact';
import Footer from '../../Components/Footer';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Home />
        <About />
        <Contact />
        <Portfolio />
        <Footer />
      </Container>
    </>
  );
};

export default Dashboard;
