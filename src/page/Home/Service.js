import React from 'react';
import service1 from '../../images/icons/service1.png'
import service2 from '../../images/icons/service2.png'
import service3 from '../../images/icons/service3.png'


const Service = () => {
  return (
    <div className='py-12'>
      <h2 className='text-xl font-bold my-6'> Provide Awesome <span style={{ color: '#7AB259' }} className=''>Services</span></h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-12 py-12 '>
        <div className="lg:max-w-lg hover:shadow-xl p-6">
          <figure><img className='w-full mx-auto py-2' style={{width: '74px'}}  src={service1} alt="Shoes" /></figure>
          <div className="">
            <h2 className="text-2xl font-bold">Web & Mobile design</h2>
            <p className='pt-4'>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
          </div>
        </div>


        <div>
          <div className="lg:max-w-lg bg-base-100 shadow-xl border-spacing-5 p-6">
            <figure><img className='w-full mx-auto py-2' style={{width: '74px'}}  src={service2} alt="Shoes" /></figure>
            <div className="">
              <h2 className="text-2xl font-bold">Graphic design</h2>
             
              <p className='pt-4'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>

            </div>
          </div>
        </div>


        <div>
          <div className="lg:max-w-lg hover:shadow-xl p-6">
            <figure><img className='w-full mx-auto py-2' style={{width: '74px'}} src={service3} alt="Shoes" /></figure>
            <div className="">
              <h2 className="text-2xl font-bold">Web development</h2>
              <p className='pt-4'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;