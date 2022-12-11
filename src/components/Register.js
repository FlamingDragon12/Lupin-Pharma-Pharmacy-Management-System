    import React from 'react'
import { Link } from 'react-router-dom';
import db from '../firebase';
import {ReactComponent as LogoImage} from "./assets/register2.svg";


    
    const Register = ({setCurrentForm, user, setUser ,username ,setName ,pass1 , setPass}) => {

      let name,value;
      const getData= (event) => {
        name =event.target.name;
         value=event.target.value;

         setUser({...user, [name]: value});
      }

      const postData = async (event) => {
        event.preventDefault();

        const {name, email,
            pass,
            company,
            location,
        } = user;
        setName(name);
        // setPass(pass);
        //  const res = await fetch("https://pharmacy-1976c-default-rtdb.firebaseio.com/pharmacyuser.json",
        //  {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json"
        //   },
        //   body: JSON.stringify({
        //     name,
        //     email,
        //     pass,
        //     company,
        //     location,
            
        //   })
        //  }); 

         db.collection("pharmacyuser").add({
          name: name,
          email: email,
          pass: pass,
          company: company,
          location: location
      })
      .then((docRef) => {
          alert("Data Successfully Submitted");
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });

      }

        const renderForm = (
            <div className="form">
              <form className=' flex-column space-y-2'>
              <div className="input-container">
                  <label className="text-m font-medium">Name </label>
                  <input className="w-full p-4 text-primary border-none rounded-md outline-none text-sm transition duration-150 ease-in-out " type="text" placeholder="name" name="name" 
                  value={user.name} onChange={getData} required />
                  {/* {renderErrorMessage("uname")} */}
                </div>
                <div className="input-container">
                  <label className="text-m font-medium">Email </label>
                  <input value={user.email}  onChange={getData} className="w-full p-4 text-primary border-none rounded-md outline-none text-sm transition duration-150 ease-in-out " type="text" placeholder="name@xyz.com" name="email" required />
                  {/* {renderErrorMessage("uname")} */}
                </div>
                <div className="input-container">
                  <label className="text-m font-medium">Password  </label>
                  <input value={user.pass}  onChange={getData} className="w-full p-4 text-primary border-none rounded-md outline-none text-sm transition duration-150 ease-in-out " type="password" placeholder="Your Password" name="pass" required />
                  {/* {renderErrorMessage("pass")} */}
                </div>
                <div className="input-container">
                  <label className="text-m font-medium">Company Name  </label>
                  <input value={user.company}  onChange={getData} className="w-full p-4 text-primary border-none rounded-md outline-none text-sm transition duration-150 ease-in-out " type="text" placeholder="your store name" name="company" required />
                  {/* {renderErrorMessage("pass")} */}
                </div>
                <div className="input-container">
                  <label className="text-m font-medium">Business Location </label>
                  <input value={user.location}  onChange={getData} className="w-full p-4 text-primary border-none rounded-md outline-none text-sm transition duration-150 ease-in-out " type="text" placeholder="Mumbai, Dadar" name="location" required />
                  {/* {renderErrorMessage("pass")} */}
                </div>
            
            <Link to="/Home">
              <div className="button-container">
                  <button onClick={postData} className="w-full m-8 flex cursor-pointer justify-center items-center bg-blue-200 hover:bg-indigo-500 transition-all py-2 px-4 rounded border focus:outline-none" type="submit">Register</button>
                </div>
                </Link>
              </form>
              <label class="text-m font-medium mb-4">Already a member ? <a onClick={() => setCurrentForm('login')}  class="w-full cursor-pointer text-blue-700 m-2" >Login</a></label>
        
            </div>
          );
        
          return (
            <div className="lg:flex ">
                <div className="lg:w-1/2 xl:max-w-screen-sm bg-purple-200 mr-auto   ">
                {/* <h1 className="items-center  font-bold text-4xl">LUPIN PHARMA</h1> */}
                <div className="h-20 p-5 "><LogoImage className="mx-auto object-fit ml-auto" /></div>
                </div>
              <div className="w-full max-w-md m-auto bg-white py-5 px-10">
                <div className="text-4xl font-medium mt-4 antialiased lg:mb-12 mb-6 text-center">Welcome Back!</div>
                {/* {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
              </div> */}
              {renderForm}
            
            </div>
            </div>
          );
    }
    
    export default Register