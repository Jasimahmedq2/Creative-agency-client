import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import logo from '../../images/logos/logo.png'
import './Login.css'
import auth from '../../firebase.init';
import useToken from '../Hooks/useToken';
import { useEffect } from 'react';
import Loading from '../Shared/Loading';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Google from '../../images/logos/google.png'


const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [signInWithGoogle,  guser, gloading, gerror] = useSignInWithGoogle(auth);

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const { register, formState: { errors, isDirty, isValid }, handleSubmit, reset } = useForm()

  const onSubmit = data => {
    const email = data?.email
    const password = data?.password
    signInWithEmailAndPassword(email, password)
   
    console.log(data)
    reset()
  }

  const [token] = useToken(user || guser)

  const from = location?.state?.from?.pathname || '/';

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true })
    }
  }, [ user, guser, navigate])


  if (loading || gloading) {
    return <Loading></Loading>
  }
let errorMessage;
  if(error || gerror){
    errorMessage = <h2 className='text-sm text-red-400 text-bold'> {error?.message}</h2>
  }



  return (
    <div>
        <h2 className='text-xl sm:w-1/2 w-11/12 mx-auto py-12'>if you are see admin route? use this email address & password <p className='font-bold text-secondary text-xl'>email: admin@gmail.com</p> <p className='text-xl font-bold text-primary'>password:  adminpassword</p></h2>
    <div className="sm:w-1/2 w-11/12 mx-auto py-16">
      <img className='image-style my-12 mx-auto' src={logo} alt="" />
      <div className='login-main '>
        <div>
          <form  onSubmit={handleSubmit(onSubmit)} className=" space-y-4 grid grid-rows-1 px-8 py-8 " >

          <input
            type="email"
            placeholder='enter email'
            className="input order-input py-8 shadow-xl"
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

          <input type="password" {...register("password", { required: true })} placeholder='enter your password'
            className="input order-input py-8 shadow-xl " />

          {errors.password && errors.password.type === "required" && <span className='text-red-500'> password is required</span>}
          <h2 >Don't have an account?<Link style={{ color: '#3F90FC' }} to='/register'> create account</Link> </h2>
          {errorMessage}
          <input type="submit" value="login" className='btn btn-primary w-1/4' disabled={!isDirty && !isValid} />

          </form>

          <div className="divider">OR</div>

          <button onClick={() => signInWithGoogle()} className=' w-full btn btn-outline'><span>Continue With Google</span></button>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;