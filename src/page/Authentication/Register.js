import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading'
import useToken from '../Hooks/useToken';
import auth from '../../firebase.init'
import { useEffect } from 'react';

const Register = () => {
  const location = useLocation()
  const { register, formState: { errors, isDirty, isValid }, handleSubmit, reset } = useForm()

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [token] = useToken(user)

  const navigate = useNavigate()

  const onSubmit = data => {
    const email = data?.email
    const password = data?.password
    createUserWithEmailAndPassword(email, password)
    console.log(data)
    reset()
  }
  const from = location?.state?.from?.pathname || '/';
useEffect(() => {
if(token){
  navigate(from, {replace: true})
}
}, [navigate, user])

let errorMessage;
  if(error){
    errorMessage = <p className='text-sm text-red-400 font-bold'>{error?.message}</p>
  }

  if(loading) {
    return <Loading></Loading>
  }


     
  

  return (
    <div className=' '>

      <div className=' my-12 sm:w-1/2 w-11/12 mx-auto shadow-lg rounded-lg'>

        <form onSubmit={handleSubmit(onSubmit)} className=" space-y-4 grid grid-rows-1 bg-base-200 px-8 py-8">
          <input type="text" {...register("name", { required: true })} placeholder='your Name'
            className="input order-input max-w-lg py-8 shadow-xl " />

          {errors.name && errors.name.type === "required" && <span className='text-red-500'>name is required</span>}

          <input
            type="email"
            placeholder='enter email'
            className="input order-input max-w-lg py-8 shadow-xl"
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


          <input type="password" {...register("password", { required: true })} placeholder='enter strong password'
            className="input order-input max-w-lg py-8 shadow-xl " />

          {errors.password && errors.password.type === "required" && <span className='text-red-500'> password is required</span>}
          <h2 className='text-accent font-bold'>already have a account? <Link to='/login' className='text-sm text-primary font-bold'>please login</Link></h2>
          {errorMessage}
          <input type="submit" value="register" className='btn btn-primary w-1/4' disabled={!isDirty && !isValid} />

        </form>
      </div>
    </div>
  );
};

export default Register;