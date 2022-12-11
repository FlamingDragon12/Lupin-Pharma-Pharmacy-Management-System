import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from './components/Login';
import Register from "./components/Register";
import Signin from "./components/Signin";
import Billings from "./pages/Billings";
import Customer from "./pages/Customer";
import AddMedicineForm from "./pages/forms/AddMedicineForm";
import MainPage from "./pages/MainPage";
import Medicines from "./pages/Medicines";
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from "./components/contexts/ContextProvider";
import Sidebar from "./components/elements/Sidebar";
import Navbar from "./components/elements/Navbar";
import ThemeSettings from "./components/elements/ThemeSettings";
import Footer from "./components/elements/Footer";
import SelectMedicines from "./pages/SelectMedicines";
import Orders from "./pages/Orders";
import Logout from "./pages/Logout";
import Manager from "./pages/Manager";
// import {ReactComponent as LogoImage} from "./assets/login.svg";

function App() {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [currentForm, setCurrentForm] = useState('login');
  const[admin ,setAdmin] = useState('admin')
  const[username ,setName] = useState('');
  const[pass1,setPass] = ("");
  const[ordercan ,setOrdercan] = useState(true);
  const[user ,setUser] = useState({
    name: "",
    email: "",
    pass: "",
    company: "",
    location: "",
  }
  )
 

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }
  return (
    <div className="App">
      <BrowserRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <LogoImage /> */}
      {/* <Home/> */}
      
        {/* {currentForm === "login" ? <Login currentForm={currentForm} setCurrentForm={setCurrentForm} setIsLogedIn={setIsLogedIn}/> :  <Register setCurrentForm={setCurrentForm} />} */}
        {/* <Signin /> */}
        {/* <div className="py-5 ml-auto">
            <Link to="/login" class="w-full">
              <button
                className={`w-full py-2 px-12 text-sm  cursor-pointer text-black rounded-lg`}
              >
                Login
              </button>
            </Link>
          </div>   */}
          

          {/* if(admin === "admin"){ */}
          <Routes>
                
               <Route path="/" element={(<Signin currentForm={currentForm} setCurrentForm={setCurrentForm} admin={admin} setAdmin={setAdmin} user={user} setUser={setUser} username={username} setName={setName} pass1={pass1} setPass={setPass}/>)} />
               <Route path="/Home" element={(<Header admin={admin}/>)} /> 
               <Route path="/Dashboard" element={(<MainPage admin={admin} />)} />
               <Route path="/Medicines" element={<Medicines admin={admin}  />} />
               <Route path="/SelectMedicines" element={<SelectMedicines  username={username}/>} />
               <Route path="/Orders" element={<Orders admin={admin} ordercan={ordercan}  setOrdercan={setOrdercan}  username={username} />} />
               <Route path="/Billings" element={<Billings admin={admin} ordercan={ordercan} setOrdercan={setOrdercan} />} />
               <Route path="/Logout" element={<Logout admin={admin}/>} />
               <Route path="/Customers" element={<Customer admin={admin} user={user} />} />
               <Route path="/Managers" element={<Manager admin={admin} user={user} />} />
               <Route path="/addProduct" element={<AddMedicineForm />} />
               </Routes>
{/* } */}

{/* return ( */}
 {/* <div> */}
   {/* {isLogedIn ? (currentForm === "login" ? <Link to="/login" <Login currentForm={currentForm} setCurrentForm={setCurrentForm} setIsLogedIn={setIsLogedIn}/> :  <Register setCurrentForm={setCurrentForm} />) */} 
     {/* : 
       ( */}
       {/* { !isLogedIn ?
       (<Routes>
              <Route path="/" element={<Signin currentForm={currentForm} setCurrentForm={setCurrentForm} setIsLogedIn={setIsLogedIn}  />} />
              </Routes>)
       : */}
  {/* } */}
</BrowserRouter>
  </div>
);
        
      
       {/*  */}
      {/* isLogedIn === true  ? <Dashboard/> : ( */}
    {/* <Login /> */}
   {/* </div> */}
  // 
}

export default App;
