import React from 'react';
import Banner from './Banner';
import Email from './Email';
import Projects from './Projects';
import Reviews from './Reviews';
import Service from './Service';
import SmallBanner from './SmallBanner';

const Home = () => {
  return (
    <div>
      <Banner />
      <SmallBanner />
      <Service />
      <Projects />
      <Reviews />
      <Email />
    </div>
  );
};

export default Home;