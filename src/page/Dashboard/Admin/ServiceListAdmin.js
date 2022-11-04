import { async } from '@firebase/util';
import React from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading';

const ServiceListAdmin = () => {
  const { data: orders, isLoading } = useQuery('service', () => fetch(`http://localhost:5000/order`, {
    method: 'GET',
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  })
    .then(res => res.json())
  )

  const handleUpdate = (id) => {

    fetch(`http://localhost:5000/order/${id}`, {
      method: 'PUT',
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => res.json()).then(data => {
      if(data.modifiedCount > 0){
        toast.success('service done')
      }
      console.log("data update", data)
    })
     
  }

  useEffect(() => {
    handleUpdate()
  }, [])

  if (isLoading) {
    return <Loading></Loading>
  }



  return (
    <div className='bg-white mx-6 my-12 11/12 rounded-xl shadow-lg'>
      <table className=''>
        <div className='px-4 py-6'>


          <thead style={{ background: '#F5F6FA' }}>

            <tr>
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

                  <td className='p-3 text-xs font-sans '>{order?.name}</td>
                  <td className='p-3 text-xs font-sans '>{order?.email}</td>
                  <td className='p-3 text-xs font-sans '>{order?.service}</td>
                  <td className='p-3 text-xs font-sans '>{order?.description}</td>
                  <td className='p-3 text-xs font-sans '>
                    <select className="select">
                      <option disabled selected className='text-red-400 text-bold'>pending</option>

                      <option className='font-bold text-blue-600'>


                      </option>

                      <option><button>delete</button></option>

                    </select>

                  </td>
                  <td>
                    <button onClick={() => handleUpdate(order?._id)}>Done</button></td>
                </tr>

              ))
            }
          </tbody>
        </div>
      </table >
    </div >
  );
};

export default ServiceListAdmin;