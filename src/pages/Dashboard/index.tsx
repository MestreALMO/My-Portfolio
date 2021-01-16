import React from 'react';

import Header from './Header';
import Navbar from './Navbar';
import { Container } from './styles';

const Dashboard: React.FC = () => (
  <>
    <Container>
      <Header />
      <Navbar />
      {/* <h1>Hello World</h1>
      <p>Template</p>
      <br />
      <a href="Page2">Sign up</a> */}
      <p>p testing</p>
      <div>div test</div>
    </Container>
  </>
);

export default Dashboard;
