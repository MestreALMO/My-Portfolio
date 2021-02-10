import React from 'react';

import { Container } from './styles';
import homePhoto from '../../../assets/homePhoto.jpeg';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <img
          // src="https://image.shutterstock.com/image-illustration/red-dragon-portrait-digital-painting-260nw-1543370009.jpg"
          src={homePhoto}
          alt="my_photo"
        />
        <h1>Welcome!</h1>
        <h3>
          <p>I&apos;m André L. M. de Oliveira,</p>
          <p>it&apos;s a pleasure to have you here.</p>
        </h3>
      </Container>
    </>
  );
};

export default Home;
