import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

import './Order.css'
const Order = () => {
  const [user] = useAuthState(auth)
  const { register, formState: { errors, isDirty, isValid  }, handleSubmit, reset } = useForm()
  const onSubmit = data => {

    // order send

    const img = data?.image[0]
    const privateUrl = '44c26384eae4023f6064cf342eee9294'
    const formData = new FormData()
    formData.append('image', img)
    
    fetch(`https://api.imgbb.com/1/upload?key=${privateUrl}`, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(result => {

      const orderData = {
      name: data?.name,
      email: data?.email,
      service: data?.service,
      description: data?.description,
      price: data?.price,
      image: result?.data?.url
      }
      
      fetch('http://localhost:5000/order', {
        method: 'POST',
        headers: {
          "content-type" : "application/json",
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(orderData)
      })

      .then(res => res.json())
      .then(inserted => {      
        if(inserted.insertedId){
          toast.success("Successfully Add A Service")
        }
        reset()
        
      })
    })


    console.log(data)
    reset()
  };
  return (
    <div className='mt-12 mx-6'>
      <form onSubmit={handleSubmit(onSubmit)} className="flex-col space-y-4 grid grid-rows-1">
        <input type="text" {...register("name", { required: true })} placeholder='your Name/Company Name'
          className="input order-input w-4/6 py-8 shadow-xl " />

      {errors.name && errors.name.type === "required" && <span className='text-red-500'>name is required</span>}
        <input
          type="text"
          value={user?.email}
          readOnly
          className="input order-input w-4/6 py-8 shadow-xl"
          {...register("email", {
            required: {
              value: true,
              message: 'Email is Required'
            },
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              message: 'Provide a valid Email'
            }
          })}
        />

        {errors.email?.type === 'required' && <span className="text-sm text-red-500">{errors.email.message}</span>}
        {errors.email?.type === 'pattern' && <span className="text-sm text-red-500">{errors.email.message}</span>}

        <input type="text" {...register("service", { required: true })} placeholder='Service Name'
          className="input order-input w-4/6 py-8 shadow-xl " />

        {errors.service && errors.service.type === "required" && <span className='text-red-500'> service name is required</span>}

        <textarea {...register("description", { required: true })} className="textarea order-textarea w-4/6 py-8 shadow-xl" placeholder="describe your service" />

        {errors.description && errors.description.type === "required" && <span className='text-red-500'> description  is required</span>}
        <div className='w-4/6 flex space-x-4' >

          <div className='w-1/2'>
            <input type="number" placeholder='price' {...register("price", { required: true })} className="input  order-input w-full py-8 shadow-xl" />
            {errors.price && errors.price.type === "required" && <span className='text-red-500'> price  is required</span>}
          </div>

          <div className='w-1/2 '>
            <input type="file" {...register('image', { required: true })} className='input py-8 style-file w-full style-file-image ' />
            {errors.image && errors.image.type === "required" && <span className='text-red-400'>select service image</span>}
          </div>

        </div>

        <input type="submit" value="submit" className='btn btn-primary w-1/4' disabled={!isDirty && !isValid}/>

      </form>
    </div>
  );
};

export default Order;