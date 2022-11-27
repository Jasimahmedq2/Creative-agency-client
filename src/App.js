import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './page/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './page/Authentication/Login';
import Dashboard from './page/Dashboard/Dashboard';
import Order from './page/Dashboard/user/Order';
import MakeAdmin from './page/Dashboard/Admin/MakeAdmin';
import AddService from './page/Dashboard/Admin/AddService';
import AddReview from './page/Dashboard/user/AddReview';
import RequireAuth from './page/Authentication/RequireAuth';
import RequireAdmin from './page/Authentication/RequireAdmin';
import ServiceList from './page/Dashboard/user/ServiceList';
import ServiceListAdmin from './page/Dashboard/Admin/ServiceListAdmin';
import './App.css'
import Register from './page/Authentication/Register';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />}/>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard>
            </Dashboard>
          </RequireAuth>
        }>

          <Route path='servicelist' element={<ServiceList />} />

          <Route path='serviceadmin' element={
            <RequireAdmin>
              <ServiceListAdmin />
            </RequireAdmin>
          } />

          <Route path='order' element={<Order />} />
          <Route path='makeadmin' element={

            <RequireAdmin>
              <MakeAdmin />
            </RequireAdmin>

          } />
          <Route path='addservice' element={

            <RequireAdmin>
              <AddService />
            </RequireAdmin>

          } />

          <Route path='addreview' element={<AddReview />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
