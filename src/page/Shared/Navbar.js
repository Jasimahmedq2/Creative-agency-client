import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, } from 'react-router-dom'
import auth from '../../firebase.init';
import logo from '../../images/logos/logo.png'

const Navbar = () => {
  const LogOut = () => {
    signOut(auth)
    localStorage.removeItem('accessToken')
   
  }
  const [user, loading] = useAuthState(auth)

  if(loading){
    return <h2>loading....</h2>
  }
  const Navbar = <>
    <li><Link to='/'>Home</Link></li>
    {user && <li><Link to='dashboard'>DashBoard</Link></li>
}
  </>
  return (
    <div style={{
      background: '#FBD062'
    }} className="navbar px-16">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {Navbar}
          </ul>
        </div>
        <img style={{width: '150px'}} src={logo} alt="" />
       
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">

          {Navbar}
        </ul>
      </div>
      <button className='btn btn-accent'> {!user ? <Link to='/login'>Login</Link> : <button onClick={LogOut}>Sing Out</button> }</button>

    </div>
  );
};

export default Navbar;