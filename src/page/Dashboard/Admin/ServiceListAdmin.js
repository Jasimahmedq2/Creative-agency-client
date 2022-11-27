import { async } from '@firebase/util';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import DeleteConfirm from '../../Shared/DeleteConfirm';
import DoneOrder from '../../Shared/DoneOrder';
import Loading from '../../Shared/Loading';

const ServiceListAdmin = () => {
  const [openDelete, setOpenDelete] = useState(null)
  const [openDone, setOpenDone] = useState(null)

  const { data: orders, isLoading, refetch } = useQuery('service', () => fetch(`https://creative-agency-server.vercel.app/order`, {
    method: 'GET',
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  })
    .then(res => res.json())
  )

  if (isLoading) {
    return <Loading></Loading>
  }



  return (
    <div className='overflow-x-auto '>
      <table className='table bg-white mx-6 my-12 rounded-xl shadow-lg'>
       
          <thead style={{ background: '#F5F6FA' }}>

            <tr>
              <th></th>
              <th className='p-3 text-sm font-serif'>Name</th>
              <th className='p-3 text-sm font-serif'>Email</th>
              <th className='p-3 text-sm font-serif'>Service</th>
              <th className='p-3 text-sm font-serif'>details</th>
              <th className='p-3 text-sm font-serif'>edit</th>
            </tr>

          </thead>

          <tbody>
            {
              orders.map(order => (

                <tr>
                  <th></th>
                  <td className='p-3 text-sm font-sans '>{order?.name}</td>
                  <td className='p-3 text-sm font-sans '>{order?.email}</td>
                  <td className='p-3 text-sm font-sans '>{order?.service}</td>
                  <td className='p-3 text-sm font-sans '>
                    <div className="tooltip tooltip-bottom" data-tip={order.description}>
                    {order?.description.substring(0, 20)}...
                    </div>
                  </td>



                  <td>
                    <div className="dropdown dropdown-bottom">
                      <label tabIndex={0} className=" ">
                        <a className='flex cursor-pointer'>

                          {
                            order.status ? <><p className='text-xl text-primary'>Done</p></> :
                              <> <p className='text-xl text-red-400'>Pending</p>
                              </>
                          }

                          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                      </label>
                      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-200 rounded-box lg:max-w-lg">
                        <li>
                          <a href="#updateOrder" ><button
                            disabled={order?.status}
                            className='btn btn-outline w-full'
                            onClick={() => setOpenDone(order)}
                          > Done</button></a></li>
                        <li>
                          <a href="#deleteOrder" ><button
                            className='btn btn-outline w-full'
                            onClick={() => setOpenDelete(order)}
                          > delete</button></a></li>
                      </ul>
                    </div>
                  </td>

                </tr>


              ))
            }

          </tbody>
      </table >
      {
        openDelete && <DeleteConfirm
          openDelete={openDelete}
          setOpenDelete={setOpenDelete}
          refetch={refetch}
        ></DeleteConfirm>
      }
      {
        openDone && <DoneOrder
          openDone={openDone}
          setOpenDone={setOpenDone}
          refetch={refetch}
        ></DoneOrder>
      }
    </div >
  );
};

export default ServiceListAdmin;