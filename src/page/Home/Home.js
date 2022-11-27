import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import Email from './Email';
import Projects from './Projects';
import Reviews from '../Dashboard/user/Reviews';
import Service from './Service';
import SmallBanner from './SmallBanner';
import Loading from '../Shared/Loading';
import { useState } from 'react';
import { BiArrowToTop } from 'react-icons/bi'


const Home = () => {
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div className='relative'>
      {
        visible && <button onClick={scrollToTop} className="right-10 bottom-6 fixed z-20 topButton">
          <BiArrowToTop className='text-6xl hover:shadow-lg rounded-lg hover:text-white hover:bg-black bg-slate-50  '/>
        </button>
      }
      <div>
        <Navbar></Navbar>
        <Banner />
        <SmallBanner />
        <Service />
        <Projects />
        <Reviews />
        <Email />
      </div>


    </div>
  );
};

export default Home;