import React from 'react';
import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import './project.css'

import carousel1 from '../../images/carousel-1.png'
import carousel2 from '../../images/carousel-2.png'
import carousel4 from '../../images/carousel-4.png'
import carousel5 from '../../images/carousel-5.png'



const Projects = () => {
  return (
    <div className='background-color'>
      <h2 className='text-xl font-bold text-white pt-16 text-center'>Here are some of <span style={{color: '#7AB259'}}>our works</span></h2>
    <div className='main-container flex justify-center items-center'>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        Pagination={{ clickable: true }}

        breakpoints={{
          350: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}

        className="mySwiper ">
        <SwiperSlide>
          <a href="https://tools-manufacturer-jasim.netlify.app/" target="_blank">
          <img src={carousel1} alt="" />
          </a>
        
        </SwiperSlide>
        <SwiperSlide>

        <a href="https://crypto-currency-jasim.netlify.app/" target="_blank">
          <img src={carousel2} alt="" />
          </a>

        </SwiperSlide>
        <SwiperSlide>

        <a href="https://jasim-personal-portfolio.netlify.app/" target="_blank">
          <img src={carousel4} alt="" />
          </a>

        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
};

export default Projects;