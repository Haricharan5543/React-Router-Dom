
import './App.css';
import{BrowserRouter, Route, Routes} from "react-router-dom";

import Dashboard from './components/Dashboard';
import Details from './components/Details';
import Leaves from './components/Leaves';
import Login from './components/Login';
// import Logout from './components/Logout';
import Profile from './components/Profile';
import Signup from './components/Signup';
import PageNotFOund from './components/PageNotFOund';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/Dashboard' element={<Dashboard/>}></Route>
      <Route path='/Leaves' element={<Leaves/>}></Route>
      <Route path='/Profile' element={<Profile/>}></Route>
      <Route path='/Details' element={<Details/>}></Route>
      <Route path='*' element={<PageNotFOund/>}></Route>
    </Routes>
    </BrowserRouter>



    // <div className="App">
    //   <Login></Login>
    //   <Signup></Signup>
    //   
    //   <Dashboard></Dashboard>
    //   <Logout></Logout>
    //   <Profile></Profile>
    //   <Details></Details>
    //   <Leaves></Leaves>
      
    // </div>
  );
}

export default App;
