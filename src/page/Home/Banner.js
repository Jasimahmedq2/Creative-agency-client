import React from 'react';
import frame from '../../images/logos/Frame.png'
import './Banner.css'
const Banner = () => {
  return (
    <div className="container-style py-10 md:h-screen px-5">
      <div className=" md:flex justify-around items-center">
        
        <div className='text-start md:w-1/3'>
          <h1 className="sm:text-5xl font-bold">Let’s Grow Your
            Brand To The
            Next Level</h1>
          <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
          <button className="btn btn-accent">Hire us</button>
        </div>
        <div className='md:w-1/2'>
          <img src={frame} className="max-w-sm rounded-lg shadow-2xl" />
          </div>
      </div>
    </div>
  );
};

export default Banner;