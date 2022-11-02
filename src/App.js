import './App.css';
import {Routes, Route, Outlet} from 'react-router-dom'
import Home from './page/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './page/Authentication/Login';
import Dashboard from './page/Dashboard/Dashboard';
import Root from './page/Dashboard/Root';
import Order from './page/Dashboard/user/Order';
import MakeAdmin from './page/Dashboard/Admin/MakeAdmin';
import AddService from './page/Dashboard/AddService';
import AddReview from './page/Dashboard/user/AddReview';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='dashboard' element={<Dashboard></Dashboard>}>
         <Route index element={<Root />}/>
         <Route path='order' element={<Order />}/>
         <Route path='makeadmin' element={<MakeAdmin />}/>
         <Route path='addservice' element={<AddService />}/>
         <Route path='addreview' element={<AddReview />}/>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
