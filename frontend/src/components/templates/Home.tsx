import React from 'react';
import Header from './Header';
import Body from './Body';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />
      <Body />
    </div>
  );
};

export default Home;