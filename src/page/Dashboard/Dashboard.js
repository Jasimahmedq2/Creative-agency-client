import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet, Route, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import logo from '../../images/logos/logo.png'
import {BiArrowBack} from 'react-icons/bi'
import {AiFillHome} from 'react-icons/ai'

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <div className="drawer drawer-mobile relative bg-transparent">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mt-12 " style={{ background: '#E5E5E5' }}>
        <div className="navbar absolute top-0" style={{ background: '#FFFFFF' }}> 
          <div className="flex" >

            {
              location.pathname === "/dashboard/addservice" && <h2 className='text-xl text-red font-bold'>Add Service</h2>
            }
            {
              location.pathname === "/dashboard/makeadmin" && <h2 className='text-xl text-red font-bold'>Make Admin</h2>
            }
            {
              location.pathname === "/dashboard/order" && <h2 className='text-xl text-red font-bold'>Order</h2>
            }

            {
              location.pathname === "/dashboard/addreview" && <h2 className='text-xl text-red font-bold'>Add Review</h2>
            }
            {
              location.pathname === "/dashboard/serviceadmin" && <h2 className='text-xl text-red font-bold'>Service List</h2>
            }
                        {
              location.pathname === "/dashboard/servicelist" && <h2 className='text-xl text-red font-bold'>Service List</h2>
            }

          </div>
          <div className="flex-none">
            <label for="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
          </div>
        </div>
        <Outlet />


      </div>
      <div className="drawer-side  bg-transparent">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4  overflow-y-auto w-80 text-base-content" style={{ background: '#FFFFFF' }}>
        <img style={{ width: '150px' }} src={logo} alt="" className='pb-10'/>
        <div className='flex justify-between items-center py-6'>
        <button onClick={() => navigate(-1)}><BiArrowBack className='text-2xl '/></button>
        <Link to='/'><AiFillHome className='text-2xl'/></Link>
        </div>

          {
            !admin && <>
              <li><NavLink to='order'>order</NavLink></li>
              <li><NavLink to='addreview'>Add Review</NavLink></li>
              <li><NavLink to='servicelist'>service List</NavLink></li>
            </>
          }
          {
            admin && <>
              <li><NavLink to='serviceadmin'>service List</NavLink></li>
              <li><NavLink  to='makeadmin'>Make admin</NavLink></li>
              <li><NavLink to='addservice'>Add Service</NavLink></li>
            </>
          }




        </ul>

      </div>
    </div>
  );
};

export default Dashboard;