import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import logo from '../../images/logos/logo.png'
import './Login.css'
import auth from '../../firebase.init';
import useToken from '../Hooks/useToken';
import { useEffect } from 'react';
import Loading from '../Shared/Loading';

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [token] = useToken(user)

  const from = location?.state?.from?.pathname || '/';
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true })
    }
  }, [ user, navigate])

  if (loading) {
    return <Loading></Loading>
  }



  return (
    <div className="w-1/2 mx-auto py-16">
      <img className='image-style my-12 mx-auto' src={logo} alt="" />
      <div className='login-main py-12 flex items-center justify-center'>
        <div>
          <h2 className='text-xl font-bold'>Log In With</h2>
          <button onClick={() => signInWithGoogle()} className='my-4'>Continue with Google</button>

          <h2 >Don't have an account?<Link style={{ color: '#3F90FC' }} to='/register'> create account</Link> </h2>

        </div>
      </div>
    </div>
  );
};

export default Login;