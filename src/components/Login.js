import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, Router } from "react-router-dom";
import {ReactComponent as LogoImage} from "./assets/login.svg";
import Dashboard from "./Dashboard";
import Register from "./Register";


function Login({currentForm,setCurrentForm, setIsLogedIn ,admin, setAdmin ,pass1 , setPass}) {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {

    event.preventDefault();


    // var { uname, pass } = document.forms[0];

    // const userData = database.find((user) => user.username === uname.value);

    // if (userData) {
    //   if (userData.password !== pass.value) {

    //     setErrorMessages({ name: "pass", message: errors.pass });
    //   } else {
    //     setIsSubmitted(true);
    //   }
    // } else {

    //   setErrorMessages({ name: "uname", message: errors.uname });
    // }
    setIsLogedIn(true);
    // if(pass1 === )

  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const handleSelect = (e) => { 
    setAdmin(e.target.value);
  }
  const renderForm = (
    // <Router>
    <div className="form">
      {/* <form onSubmit={handleSubmit}> */}
      <div className="input-container">
          <label className="text-m font-medium">Select User/Admin </label>
          <select className="w-full border-l-fuchsia-900 outline-gray-500 p-4 rounded-md text-m transition duration-150 ease-in-out " type="text" name="uname" required 
          defaultValue={admin}
          onChange={handleSelect}>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            </select>
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label className="text-m font-medium">Email </label>
          <input className="w-full p-4 text-primary border-none rounded-md outline-none text-sm transition duration-150 ease-in-out " type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label className="text-m font-medium">Password  </label>
          <input className="w-full p-4 text-primary border-none rounded-md outline-none text-sm transition duration-150 ease-in-out " type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div>
        <label class="text-m font-medium mb-4"><a class="w-full" href="/forgot">forgot password ?</a></label>
        </div>
        <div className="button-container">
         <Link  to={admin == "admin" ? "/Dashboard" : "/SelectMedicines"}> 
          
          <button  
          onClick={() =>     setIsLogedIn(true)}
          
           className="w-full m-8 flex cursor-pointer justify-center items-center bg-blue-200 hover:bg-indigo-500 transition-all py-2 px-4 rounded border focus:outline-none" type="submit">Login</button>
         </Link>
        
        </div>

      {/* </form> */}
      <label class="text-m font-medium mb-4">New Here ?<a onClick={() => setCurrentForm('register')} class="w-full cursor-pointer text-blue-700 m-2" >Register</a></label>

    </div>
    // </Router>
  );

  return (
    // <div>
    
   
    <div className="lg:flex-row flex flex-col-reverse">
      <div className="w-full max-w-md m-auto bg-white py-5 px-10">
        <div className="text-4xl font-medium mt-4 antialiased lg:mb-12 mb-6 text-center">Welcome Back!</div>
      {renderForm}

      </div>
    <div className="lg:w-1/2 lg:h-screen xl:max-w-screen-sm bg-purple-200 lg:ml-auto">
        <h1 className="items-center text-center py-5 px-10 font-bold text-4xl">LUPIN PHARMA</h1>
    <div className="lg:h-20 h-4 p-5 m-10"><LogoImage className="mx-auto object-fit w-1/2 lg:w-full" /></div>
    {/* <img src={process.env.PUBLIC_URL+"assets/login.png"} /> */}
    {/* <img src="https://drive.google.com/file/d/16wEa1KQirYIkCtN7iTZtEDo8-Wfo_Hvn/view?usp=sharing"></img> */}
    </div>
    </div>
    // </div>
  );
}

export default Login;