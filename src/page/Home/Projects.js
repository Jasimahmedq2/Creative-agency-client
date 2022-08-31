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
      <h2 className='text-xl font-bold text-white pt-16'>Here are some of <span style={{color: '#7AB259'}}>our works</span></h2>
    <div className='main-container flex justify-center items-center'>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        Pagination={{ clickable: true }}
        className="mySwiper ">
        <SwiperSlide>
          <img src={carousel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>

          <img src={carousel2} alt="" />

        </SwiperSlide>
        <SwiperSlide>

          <img src={carousel4} alt="" />

        </SwiperSlide>
        <SwiperSlide>

          <img src={carousel5} alt="" />

        </SwiperSlide>

      </Swiper>
    </div>
    </div>
  );
};

export default Projects;