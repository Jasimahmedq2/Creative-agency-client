import React from 'react';
import netflix from '../../images/logos/netflix.png'
import google from '../../images/logos/google.png'
import slack from '../../images/logos/slack.png'
import uber from '../../images/logos/uber.png'
import airbnb from '../../images/logos/airbnb.png'

const SmallBanner = () => {
  return (
    <div className='flex justify-center py-6'>
      <img className='p-3' style={{width: '125px', height: '44px'}} src={netflix} alt="" />
      <img className='p-3' style={{width: '125px', height: '44px'}} src={google} alt="" />
      <img className='p-3' style={{width: '125px', height: '44px'}} src={slack} alt="" />
      <img className='p-3' style={{width: '125px', height: '44px'}} src={uber} alt="" />
      <img className='p-3' style={{width: '125px', height: '44px'}} src={airbnb} alt="" />


    </div>
  );
};

export default SmallBanner;