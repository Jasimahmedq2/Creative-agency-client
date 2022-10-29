import React from 'react';
import { Link, Outlet, Route, useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation()
  return (
    <div class="drawer drawer-mobile relative">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col justify-center " style={{background: '#E5E5E5'}}>
      <div class="navbar absolute top-0" style={{background: '#FFFFFF'}}>
          <div class="flex-1">
            {
              location.pathname === "/dashboard/addservice" &&  <h2 className='text-xl text-red font-bold'>Add Service</h2>
            }
            {
              location.pathname === "/dashboard/makeadmin" && <h2 className='text-xl text-red font-bold'>Make Admin</h2>
            }
            {
              location.pathname === "/dashboard/order" && <h2 className='text-xl text-red font-bold'>Order</h2>
            }
           
          </div>
          <div class="flex-none">
          <label for="my-drawer-2" class="btn btn-ghost drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
          </div>
        </div>
        <Outlet />


      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 text-base-content" style={{background: '#FFFFFF'}}>


          <li><Link to='order'>My order</Link></li>
          <li><Link to='makeadmin'>Make admin</Link></li>
          <li><Link to='addservice'>Add Service</Link></li>

        </ul>

      </div>
    </div>
  );
};

export default Dashboard;