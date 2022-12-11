import React from 'react'
import { MdArrowBack } from 'react-icons/md';
import { RiArrowGoBackFill } from 'react-icons/ri';
import Navbar from '../../components/elements/Navbar';
import Sidebar from '../../components/elements/Sidebar';

const Invoice = ({searchMedicine,  total,
 name,
 medicine,
 date,
 id,
 quantity,
 setForm,
 invoice,
 ordercan,
  matches,
today,
}) => {

    
  return (
    <div>
        {/* <Navbar /> */}
        {/* sidebar */}
        {/* <Sidebar /> */}
        {/* main content container */}
        <div className=" mt-auto lg:w-4/5 w-full lg:px-20 p-4 ml-auto bg-gray-50">
          <MdArrowBack onClick={() => {setForm(false)}} className="cursor-pointer text-lg"/>
          <div className="container bg-white border rounded-lg border-subtle mt-12 lg:p-12 p-2">
            {/* total amount date showcase */}
            {invoice.map((item) => {
               return(
                  <div>
            <div className="flex flex-row justify-between">
              <div className="w-full flex flex-col">
                <div>
                  <h1 className="text-xl font-medium antialiased mb-1 text-left">
                    Total amount
                  </h1>
                </div>
                <div>
                  <h1 className="text-2xl text-primary font-bold antialiased mb-1 text-left">
                    {item.total}
                  </h1>
                </div>
              </div>
              <div className="w-1/4">
                <div className="flex flex-col ml-auto">
                  <div>
                    <h1 className="text-xl font-medium mb-1 text-left">Date</h1>
                  </div>
                  <div>
                    <h1 className="text-2xl text-primary font-bold  mb-3 text-left">
                      {item.date}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div>
            <hr className="new2" />
            {/* name*/}
            <div className="mt-4 flex justify-between">
              <div className="text-lg font-medium">Customer Name</div>
              <div className="text-md font-bold">{item.name}</div>
            </div>
            {/* description */}
            <div className="mt-4 flex justify-between">
              <div className="text-lg font-medium">Invoice ID</div>
              <div className="text-md font-bold">{item.id}</div>
            </div>
            {/* total number of items */}
            <div className="mt-4 flex justify-between">
              <div className="text-lg font-medium">Total number of items</div>
              <div className="text-md font-bold">{item.quantity}</div>
            </div>
            {/* total amount */}
            <div className="mt-4 flex justify-between">
              <div className="text-lg font-medium">Total amount</div>
              <div className="text-md font-bold">₹ {item.total}</div>
            </div>
            <hr className="new2 mt-4" />
            <div className="flex">
              <h1 className="lg:text-2xl text-xl font-medium mt-4 text-primary">
                Products
              </h1>
            </div>
            {/* add multiple products */}
            <ul>
              <li className="flex flex-row justify-between items-center">
                <div className="flex items-center justify-start w-48">
                  <div className="flex-shrink-0 h-12 w-12"></div>
                  <div className="text-md font-bold">Name</div>
                </div>
                <div className="w-20 text-md font-bold">Quantity</div>
                <h1 className="w-20 text-md font-bold">Price</h1>
              </li>
              <hr />
              
                  <li
                    key={item.id}
                    className="flex flex-row justify-between items-center my-2"
                  >
                    <div className="flex items-center justify-start w-48">
                      <div className="flex-shrink-0 h-12 w-12">
                        <img
                          className="h-12 w-12 rounded-lg"
                          src={
                            item.picture
                              ? item.picture
                              : "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1130&q=80"
                          }
                          alt="medicine pic"
                        />
                      </div>
                      <div className="flex flex-col text-bold text-lg capitalize ml-2">
                        {item.medicine}
                      </div>
                    </div>
                    <div className="flex w-20">{item.quantity}</div>
                    <h1 className="w-20 text-2xl text-black font-medium antialiased  text-left">
                      ₹ {item.total}
                    </h1>
                  </li>
                
              {/* })} */}
            </ul>
            {/* </Link> */}
          </div>
            </div>
            
                        )})}
              {/* { ordercan &&
              <div className='flex flex-col justify-center items-center m-8'>
                <h3 className='text-lg'>You can cancel Orders in 2 days from Order Date</h3>
              <button className="border bg-red-600 m-5 hover:bg-red-400 text-white transition-all py-2 px-8 text-m  cursor-pointer  rounded-lg">Cancel</button>
              </div>
 } */}
 {/* {
  (matches[0] +1 <= total) ? <p>Order is Canceled</p> : <p>Order cannot be canceled as the order is confirmed more than 2 days back</p> 
 } */}
         </div>
        

        </div>
      </div>

  )
}

export default Invoice