import React from 'react';
import { Link, Outlet, Route, useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation()
  return (
    <div className="drawer drawer-mobile relative">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mt-12" style={{ background: '#E5E5E5' }}>
        <div className="navbar absolute top-0" style={{ background: '#FFFFFF' }}>
          
          <div className="flex-1">
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

          </div>
          <div className="flex-none">
            <label for="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
          </div>
        </div>
        <Outlet />


      </div>
      <div className="drawer-side">
    
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 sm:mt-16 overflow-y-auto w-80 text-base-content" style={{ background: '#FFFFFF' }}>

          <li><Link to="/" className=''>home</Link></li>
          <li><Link to='order'>My order</Link></li>
          <li><Link to='makeadmin'>Make admin</Link></li>
          <li><Link to='addservice'>Add Service</Link></li>
          <li><Link to='addreview'>Add Review</Link></li>

        </ul>

      </div>
    </div>
  );
};

export default Dashboard;