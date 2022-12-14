import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
  const { register, handleSubmit, formState: { errors },  reset} = useForm();
  const onSubmit = data => {
    console.log(data)
    const reviewData = {
      name: data.name,
      company: data.company,
      description: data.description
    }
    
    fetch('https://creative-agency-server.vercel.app/review', {
      method: 'POST',
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(reviewData)     
    })
    reset()
    toast.success('review added')
  }
  return (
    <div className=''>
         <form onSubmit={handleSubmit(onSubmit)} className='text-start px-12 py-12 relative'>
        <div className='input-container'>
          <div className="form-control w-full">
            <input type="text" {...register('name', { required: true })} placeholder="your name" className="input input-bordered sm:w-1/2 w-11/12 shadow-lg " />
            {errors.name && errors.name.type === "required" && <span className='text-red-400'>name is required</span>}
          </div>
          <div className="form-control w-full mt-2">
            <input type="text" {...register('company', { required: true })} placeholder="company's name, designation" className="input input-bordered sm:w-1/2 w-11/12 shadow-lg" />
            {errors.name && errors.name.type === "required" && <span className='text-red-400'>company's name is required</span>}
          </div>
        </div>
        <div className="form-control w-full  mt-2">
          <textarea {...register('description', { required: true })} className="textarea sm:w-1/2 w-11/12 shadow-lg  style-textarea" placeholder="service details"></textarea>
          {errors.name && errors.name.type === "required" && <span className='text-red-400'>written description</span>}
          <input type="submit" value="Submit" className='mt-2' style={{ background: '#111430', color: '#ffffff', width: '112px', height: '37px', cursor: 'pointer' }} />
        </div>

      </form>
    </div>
  );
};

export default AddReview;