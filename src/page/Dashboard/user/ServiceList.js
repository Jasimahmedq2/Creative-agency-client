import { useQuery } from 'react-query';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'
import Loading from '../../Shared/Loading';
import { useState } from 'react';
const ServiceList = () => {
  const [pending, setPending] = useState(false)
  const [user] = useAuthState(auth)
  const email = user?.email;

  const { data: orders, isLoading, refetch } = useQuery(['order', email], () => fetch(`http://localhost:5000/order/${email}`, {
    method: 'GET',
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    },
  })
    .then(res => res.json())




  )


  if (isLoading) {
    return <Loading></Loading>
  }


  return (
    <div className='my-12 grid grid-cols-1 sm:grid-cols-2 gap-5'>
      {
        orders.map(order => {
          return (
            <div key={order._id} className="mx-3 w-11/12 ">

              <div className="card lg:max-w-lg shadow-xl p-6" style={{
                background: '#ffffff'
              }}>
                <div className='w-1/3 left absolute top-4 right-4 '>
                  {
                    pending ? <>
                      <h2 className='text-center py-2 text-xl' style={{
                        background: '#FFE3E3',
                        color: '#FF4545'
                      }}>Pending</h2>
                    </>
                      :
                      <>
                        <h2 className='text-center py-2 text-xl' style={{
                          background: '#C6FFE0',
                          color: '#009444'
                        }}>Done</h2>
                      </>

                  }
                </div>

                <div className='avatar'>
                 
                  <div className="w-16 rounded-full ">
                    <img src={order?.image} alt="avatar" />
                  </div>
                
               
                </div>

                <div className=" ">
                  <h2 className="text-left text-2xl font-bold">{order.service}</h2>
                  <p className='text-xs font-bold pt-2'>{order?.description}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default ServiceList;