import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { MdDeleteForever } from 'react-icons/md'
import { useStateContext } from '../components/contexts/ContextProvider'
import { customer, managers } from '../components/data/info'
import Navbar from '../components/elements/Navbar'
import Sidebar from '../components/elements/Sidebar'
import db from '../firebase'

const Customer = ({admin, user}) => {

  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
  const [medicineList , setMedicineList] = useState(customer);
  const [search, setSearch] = useState(false);


  const [searchMedicine, setSearchMedicine] = useState(customer);
  const [searchInput, setSearchInput] = useState("");
  // const[customer1 ,setCustomer] = useState(
    // {
    // name: "",
    // company: "",
    // location: "",
  // }
  // []
  // )
  const[customer1 ,setCustomer] = useState();
 const ref = db.collection("pharmacyuser");
  const Fetchdata = ()=>{
    // db.collection("pharmacyuser").get().then((querySnapshot) => {
         
    //     // Loop through the data and store
    //     // it in array to display
    //     querySnapshot.forEach(element => {
    //         var data = element.data();
    //         setCustomer(customer1 => [...customer1 , data]);
              
    //     });
        
    // })

    ref.onSnapshot((querySnapshot) => {
      const items =[];
      querySnapshot.forEach((elem) => {
        items.push(elem.data());
      });
      // setSearchMedicine(items);
      setMedicineList(items);
    })

    // const response=db.collection('pharmacyuser');
    // const data=await response.get();
    // data.docs.forEach(item=>{


    //  setCustomer([...customer1,item.data()])
    // })
}
  
  useEffect(() => {
    // setSearchMedicine([...searchMedicine, ...user]) 
   
    console.log(searchMedicine);

  //   var name;
  //   var location;
  //   var company;
  //   user.map((item) => (
  //     name  = item.name,
  //     location  = item.location,
  //     company  = item.company
  // ));
  // console.log(location);

      Fetchdata();
      console.log(customer1 );
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.length > 0) {
      // let filteredData = medicine.filter((item) => {
      //   console.log(item.name.match(searchInput));
      // return (item.name.includes(searchInput));
      //  filteredData = item.name.match(searchInput)
      let filteredData = searchMedicine.filter((item) => {
        console.log(item.name.match(searchInput));
        if(item.name.includes(searchInput)){
          return (item);
        }
      
      });
      setSearchMedicine(filteredData);
      console.log(filteredData)
    }
      else{
        setSearchMedicine(medicineList);
      }
      console.log(searchMedicine)
      setSearch(true)
}

const handleDel =(item) => {
  setMedicineList(medicineList.filter((el) => el.company !== item.company));

}

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
         <div></div>
    <div className=' mt-auto   w-full p-10 bg-gray-50 lg:ml-auto'>
      
      
      <p className="text-4xl font-medium text-gray-900">Customers</p>
            {/* top search bar */}
            <div className="flex justify-between items-stretch m-8">
              {/* search box */}
              <div className="flex space-x-1 items-stretch">
                <input
                  // value={this.state.search_bill}
                  // onChange={(event) => this.inputChange(event)}
                  onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
                  type="text"
                  name="search_bill"
                  className={`w-full lg:p-8  p-1 text-primary border rounded-md outline-none text-m transition duration-150 ease-in-out`}

                  id="search"
                  placeholder="Search for Customers"
                />
                
              </div>
              <button
                  type="search"
              onClick={handleSearch}

                  className={`cursor-pointer bg-blue-400 lg:p-6 p-1 text-m  rounded-lg border focus:outline-none focus:`}
                >
                  <BsSearch />
                </button>
              
              {/* add bill button */}
              {/* <Link to="/addbill">
                <button className="flex space-x-2 justify-center button lg:px-16 px-8 py-4 bg-primary hover:bg-indigo-700 transition-all rounded-lg text-sm font-medium text-center text-white">
                  <PlusIcon></PlusIcon>
                  Add a bill
                </button>
              </Link> */}
            </div>
            {/* table */}
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-s font-medium text-gray-700 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-s font-medium text-gray-700 uppercase tracking-wider"
                    >
                      Company Name 
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-s font-medium text-gray-700 uppercase tracking-wider"
                    >
                      Business Location
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">View</span>
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
                                  <div className="text-md font-medium text-gray-900 uppercase">
                                    {item.name}
                                  </div>
                                  {/* <div className="text-sm text-gray-500">
                                    {this.truncate(additionalNotes, 30)}
                                  </div> */}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900 capitalize">
                                {item.company}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                              {item.location}
                            </td>
                            
                            
                            <td onClick={() => handleDel(item)} className="px-6 py-4 cursor-pointer whitespace-nowrap  font-bold text-3xl capitalize text-red-500">
                              
                              <MdDeleteForever  className='' />
                              
                            </td>
                          
                          </tr>
                        )
                      )}
                    </tbody>
               
                </table>
                </div>
                </div>
                </div>
                </div>

      //  </div> 
    // </div>
  )
}

export default Customer