import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const MakeAdmin = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = data => {
    const email = data.email
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => {
        if (res.status === 403) {
          toast.error('error filed to made admin')
        }
        return res.json()
      })
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          toast.success(`Successfully made an admin`);
        }
        
      })
    reset()
  };

  return (
    <div className='mt-12 px-12 h-screen'>
      <div className='h-1/3 rounded-xl ' style={{ background: '#FFFFFF' }}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-x-2 px-4">

          <label className="label">
            <span className="label-text">email</span>
          </label>

          <input
            type="email"
            placeholder="email for made admin"
            className="input input-bordered sm:max-w-lg max-w-xs"
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
          <input type="submit" value="submite" className='btn btn-primary' />
          <label className="label">
            {errors.email?.type === 'required' && <span className="text-sm text-red-500">{errors.email.message}</span>}
            {errors.email?.type === 'pattern' && <span className="text-sm text-red-500">{errors.email.message}</span>}
          </label>



        </form>


      </div>
    </div>
  );
};

export default MakeAdmin;