import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './page/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './page/Authentication/Login';
import Dashboard from './page/Dashboard/Dashboard';
import Root from './page/Dashboard/Root';
import Order from './page/Dashboard/user/Order';
import MakeAdmin from './page/Dashboard/Admin/MakeAdmin';
import AddService from './page/Dashboard/Admin/AddService';
import AddReview from './page/Dashboard/user/AddReview';
import RequireAuth from './page/Authentication/RequireAuth';
import RequireAdmin from './page/Authentication/RequireAdmin';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard>
            </Dashboard>
          </RequireAuth>
        }>
          <Route index element={<Root />} />
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
