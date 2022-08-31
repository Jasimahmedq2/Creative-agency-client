import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './page/Home/Home';
import Navbar from './page/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './page/Authentication/Login';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
