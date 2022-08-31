
import React, { useEffect, useState } from 'react';
import './Reviews.css'

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/review')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])
  return (
    <div className='py-20 mx-20'>
      <h2 className='text-2xl font-bold pb-20'>Clients <span style={{ color: '#7AB259' }}>Feedback</span> </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          reviews.map(review => {
            return (
              <div>
                <div class="lg:max-w-lg  card-style">
                  <div className='flex  items-center  py-5 '>
                    <div class="avatar ml-5">
                      <div class="w-12 rounded-full  ring ring-primary ring-offset-base-100 ring-offset-2 ">
                        <img src={review.picture} alt="user" />
                      </div>
                    </div>
                    <div className='text-start ml-5'>
                      <h2 class="">{review.name}</h2>
                      <h2 class="">{review.profession}</h2>
                    </div>
                  </div>
                  <div class=" items-center text-center">
                    <p>{review.description}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Reviews;