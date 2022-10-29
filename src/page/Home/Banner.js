import React from 'react';
import frame from '../../images/logos/Frame.png'
import './Banner.css'
const Banner = () => {
  return (
    <div class="container-style py-10 md:h-screen px-5">
      <div class=" md:flex justify-around items-center">
        
        <div className='text-start md:w-1/3'>
          <h1 class="sm:text-5xl font-bold">Let’s Grow Your
            Brand To The
            Next Level</h1>
          <p class="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
          <button class="btn btn-accent">Hire us</button>
        </div>
        <div className='md:w-1/2'>
          <img src={frame} class="max-w-sm rounded-lg shadow-2xl" />
          </div>
      </div>
    </div>
  );
};

export default Banner;