import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import React from 'react'
import { FiSettings } from 'react-icons/fi';
import { useStateContext } from '../components/contexts/ContextProvider';

import OutOfStockProducts from "../components/dashboard/out-of-stock-products";
import ProductsOnLowStock from "../components/dashboard/products-on-low-stock";
import ProductsToBeArrived from "../components/dashboard/products-to-be-arrived";
import WeightedScore from "../components/dashboard/weighted-score";
import Navbar from '../components/elements/Navbar';
import Sidebar from '../components/elements/Sidebar';

const MainPage = ({admin}) => {
const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  return (
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
           <Navbar admin={admin}/>
         </div>
         <div></div>
    <div className=" mt-auto   w-full p-10 bg-gray-50 lg:ml-auto">
    <div className="md:flex-row flex-col flex gap-4 items-stretch justify-between my-6">
        <OutOfStockProducts amt={5} />
        <ProductsOnLowStock amt={8} />
        <ProductsToBeArrived amt={10} />
    </div>
    <div className="md:flex-row flex-col flex">
    
      <WeightedScore
        lowStock={
          // (lowStock / (lowStock + outOfStock + rndInt + 1)) * 100
          5
        }
        outOfStock={
          // (outOfStock / (lowStock + outOfStock + rndInt + 1)) * 100
          8
        }
        arrivingStock={
          // 100 -
          // (lowStock / (lowStock + outOfStock + rndInt + 1)) * 100 -
          // (outOfStock / (lowStock + outOfStock + rndInt + 1)) * 100
          10
        }
      />
    
    
    </div>
    </div>
     </div>
    </div>
  )
}

export default MainPage