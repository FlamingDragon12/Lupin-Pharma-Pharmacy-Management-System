import { Edit } from '@syncfusion/ej2-react-grids';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react'
import { BsPlusCircleFill, BsSearch } from 'react-icons/bs'
import { FiEdit, FiSettings } from 'react-icons/fi';

import { MdAddTask, MdDeleteForever } from 'react-icons/md';
import { RiEditFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useStateContext } from '../components/contexts/ContextProvider';
import { medicine } from '../components/data/info';
import Footer from '../components/elements/Footer';
import Navbar from '../components/elements/Navbar';
import Sidebar from '../components/elements/Sidebar';
import ThemeSettings from '../components/elements/ThemeSettings';
import AddMedicineForm from './forms/AddMedicineForm';



const Medicines = ({admin}) => {

  // const [searchInput, setSearchInput] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState(false);
  const [searchMedicine, setSearchMedicine] = useState(medicine);
  const [medicineList , setMedicineList] = useState(medicine);
  const [medicineDetail, setMedicineDetail] =useState({
    name: "",
    quantity: 0,
    lowStock: 0,
    costPrice: 0,
    sellingPrice: 0,
    category: "",
    additionalNotes: "",
  });

  const [form, setForm] = useState(false);

  const handleChange = (e) => {
    
    setSearchInput(e.target.value);
  };
  
  // const fetchMedicines = () => {
  //   setSearchMedicine(medicine)
  // }

  // var filteredData = []

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.length > 0) {
      // let filteredData = medicine.filter((item) => {
      //   console.log(item.name.match(searchInput));
      // return (item.name.includes(searchInput));
      //  filteredData = item.name.match(searchInput)
      let filteredData = medicineList.filter((item) => {
        console.log(item.name.match(searchInput));
        if(item.name.includes(searchInput)){
          return (item);
        }
      
      });
      setSearchMedicine(filteredData);
      console.log(filteredData)
    }
      else{
        setSearchMedicine(medicine);
      }
      console.log(searchMedicine)
      setSearch(true);
}

function handleAdd(){
  setForm(true);
  setSearch(false);
}

function removeHandler(item) {
  setMedicineList(medicineList.filter((el) => el.id !== item.id));
  console.log(medicineList);
}

// useEffect(()=> {
//   fetchMedicines();

  
// },[])

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
           <Navbar admin={admin} />
         </div>
         <div>
           {themeSettings && (<ThemeSettings />)}
 
    <div className=' mt-auto   w-full p-10 bg-gray-50 lg:ml-auto'>
    <p className="text-4xl mb-7 font-medium text-gray-900">Medicines</p>
    
      <div className=''>
        <div className="flex justify-between items-stretch mb-8">
          {/* search box */}
          <div className="flex space-x-5 items-stretch">
            <input
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
              type="search"
              className={`w-full lg:p-4 p-1 text-primary border rounded-md outline-none text-m transition duration-150 ease-in-out`}
              id="search"
              name="search_product"
              placeholder="Search for product"
            />
            <button
              type="search"
              className={`cursor-pointer flex space-x-2 justify-center  bg-blue-400  lg:p-6 p-1 text-m  rounded-lg border focus:outline-none focus:`}
              onClick={handleSearch}
            >
              <BsSearch />
            </button>
            
          </div>
          {/* <Link to="/addproduct" params={{medicineDetail: medicineDetail}}> */}
          <button
              // type="search"
              className="flex space-x-2 justify-center items-center button lg:px-16 lg:py-4 py-2 px-4 bg-blue-600 rounded-lg text-lg font-medium text-center text-white"
              onClick={handleAdd}
            >
              <BsPlusCircleFill /><p>Add a Medicine</p>
            </button>
            {/* </Link> */}
          </div>
          {form ? <AddMedicineForm medicineDetail={medicineDetail} 
          setMedicineDetail={setMedicineDetail}
           setForm={setForm} 
           setMedicineList={myMedicine => setMedicineList([...medicineList, myMedicine])}
            lastId = {medicineList.reduce((max,item) => Number(item.id) > max ? Number(item.id) : max, 0 )}

           medicineList={medicineList}/> : (
          <div className="flex flex-col">
          <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-300 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-s font-medium text-gray-700 uppercase tracking-wider"
                      >
                        Medicine
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-s font-medium text-gray-700 uppercase tracking-wider"
                      >
                        instock
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-s font-medium text-gray-700 uppercase tracking-wider"
                      >
                        cost price
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-s font-medium text-gray-700 uppercase tracking-wider"
                      >
                        selling price
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-s font-medium text-gray-700 uppercase tracking-wider"
                      >
                        category
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-s font-medium text-gray-700 uppercase tracking-wider"
                      >
                        Action
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-s font-medium text-gray-700 uppercase tracking-wider"
                      >
                        
                      </th>
                      </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                      {
                    (search ?searchMedicine : medicineList).map(
                        (item) => (
                  
                          <tr key={item.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                               
                                <div className="ml-4">
                                  <div className="text-md font-medium text-gray-900">
                                    {item.name}
                                  </div>
                                  {/* <div className="text-sm text-gray-500">
                                    {this.truncate(additionalNotes, 30)}
                                  </div> */}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {item.quantity}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ₹{item.costPrice}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-md font-bold text-gray-500">
                              ₹{item.sellingPrice}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap  text-sm capitalize text-gray-500">
                              {item.category}
                            </td>
                            <td className="px-6 py-4 cursor-pointer whitespace-nowrap  font-bold text-3xl capitalize text-red-500">
                              
                              <MdDeleteForever onClick={() => {removeHandler(item)}}  className='' />
                              
                            </td>
                            {/* <td className="px-3 py-2 cursor-pointer whitespace-nowrap  font-bold text-2xl capitalize text-blue-300">
                              
                             
                              <RiEditFill />
                            </td> */}
                            
                          </tr>
                        )
                      )}
                    </tbody>
                  
                  </table>
              </div>
            </div>
            </div>
        </div>
          )}
      </div>

    </div>
    </div>

       </div>
       </div>
  )
}
 {/* } */}

export default Medicines