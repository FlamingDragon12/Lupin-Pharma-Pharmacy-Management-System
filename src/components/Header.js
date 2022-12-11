import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Billings from '../pages/Billings';
import Medicines from '../pages/Medicines';
import Customer from '../pages/Customer';
import MainPage from '../pages/MainPage';
import { useStateContext } from './contexts/ContextProvider';
import Navbar from './elements/Navbar';
import Sidebar from './elements/Sidebar';
import Footer from './elements/Footer';
import ThemeSettings from './elements/ThemeSettings';
import Dashboard from './Dashboard';
import AddMedicineForm from '../pages/forms/AddMedicineForm';
import Login from './Login';
import Register from './Register';
import Signin from './Signin';
import Home from './Home';
// import { Navbar, Footer, Sidebar, ThemeSettings } from './elements';

const Header = ({admin}) => {
    const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

    return(
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
    {/* { <Signin />} */}
   {/* <BrowserRouter> */}
     <div className="flex relative dark:bg-main-dark-bg">
       <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
         <TooltipComponent
           content="Settings"
           position="Top"
         >
           <button
             type="button"
             onClick={() => setThemeSettings(true)}
             style={{ background: currentColor, borderRadius: '50%' }}
             className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
           >
             <FiSettings />
           </button>
 
         </TooltipComponent>
       </div>
       {activeMenu ? (
         <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
           <Sidebar admin={admin} />
         </div>
       ) : (
         <div className="w-0 dark:bg-secondary-dark-bg">
           <Sidebar admin={admin} />
         </div>
       )}
       
       <div
         className={
           activeMenu
             ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
             : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
         }
       >
         <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
           <Navbar />
         </div>
         <div>
           {themeSettings && (<ThemeSettings />)}
 
           
             {/* <Dashboard /> */}
             
        
 
           {/* {admin == true ? 
           ( */}
            
           {/* )
           :
           ( */}
           {/* <Routes>
           <Route path="/Dashboard" element={(<MainPage />)} />
             <Route path="/Medicines" element={<Medicines />} />
             <Route path="/Billings" element={<Billings />} />
             <Route path="/Customers" element={<Customer />} />
             <Route path="/addProduct" element={<AddMedicineForm />} />
             </Routes> */}
             {/* <Routes>
             <Route path="/" element={(<MainPage />)} />
             <Route path="/Medicines" element={<Medicines />} />
             <Route path="/Billings" element={<Billings />} />
            
             </Routes> */}
           {/* )
 
           } */}
           
           
         </div>
         <Footer />
       </div>
       
     </div>
   {/* </BrowserRouter> */}
   
 </div>
    )
};
  

export default Header