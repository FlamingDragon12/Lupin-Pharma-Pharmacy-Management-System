import React, { useState } from 'react'
import Header from './Header';
import Login from './Login';
import Register from './Register';

const Signin = ({currentForm, setCurrentForm, admin, setAdmin, user, setUser, username, setName ,pass1 , setPass}) => {
    const [isLogedIn, setIsLogedIn] = useState(false);
  return (
    <div>

        {/* heyeyeyey    */}
   {currentForm === "login" ?  <Login currentForm={currentForm} setCurrentForm={setCurrentForm} admin={admin} setAdmin={setAdmin} setIsLogedIn={setIsLogedIn} pass1={pass1} setPass={setPass}/> :  <Register setCurrentForm={setCurrentForm}  user={user} setUser={setUser}  username={username} setName={setName} pass1={pass1} setPass={setPass}/> }
        {/* <Header/>    */}
    {/* } */}
        
    </div>
  )
}

export default Signin