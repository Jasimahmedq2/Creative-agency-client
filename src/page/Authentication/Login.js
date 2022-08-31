import React from 'react';
import { Link } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

import logo from '../../images/logos/logo.png'
import './Login.css'
import auth from '../../firebase.init';

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if(loading){
    return <p>loading....</p>
  }

  return (
    <div className="w-1/2 mx-auto py-16">
      <img className='image-style my-12 mx-auto' src={logo} alt="" />
      <div className='login-main py-12 flex items-center justify-center'>
        <div>
          <h2 className='text-xl font-bold'>Log In With</h2> 
          <button onClick={() => signInWithGoogle()} className='my-4'>Continue with Google</button>
           
            <h2 >Don't have an account?<Link style={{color: '#3F90FC'}} to='/register'> create account</Link> </h2>
          
        </div>
      </div>
    </div>
  );
};

export default Login;