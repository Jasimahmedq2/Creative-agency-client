import React from 'react';
import frame from '../../images/logos/Frame.png'
import './Banner.css'
const Banner = () => {
  return (
    <div class="container-style py-10">
      <div class=" flex justify-around flex-col lg:flex-row-reverse">
        <img src={frame} class="max-w-sm rounded-lg shadow-2xl" />
        <div className='text-start title-style'>
          <h1 class="text-5xl font-bold">Let’s Grow Your
            Brand To The
            Next Level</h1>
          <p class="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
          <button class="btn btn-accent">Hire us</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;