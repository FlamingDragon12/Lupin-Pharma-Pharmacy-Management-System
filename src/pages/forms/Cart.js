import React, { useEffect, useState } from 'react'
import { BsCheck2Circle, BsCheckCircleFill } from 'react-icons/bs';
import { medicine } from '../../components/data/info'
import db from '../../firebase';

const Cart = ({cartList, setCart, username, date, lastId}) => {

    const [total, setTotal] = useState();
    const [mrp, setMrp] = useState();
    const [qty, setQty] = useState();
    const [buy, setBuy] = useState(false);
    var id = 100
    // var qty;
    // let total = 0;

    function calTotal(e,item){
      setQty(e.target.value);
       let amount = (e.target.value) * item.sellingPrice;
       setMrp(item.sellingPrice);
        console.log(qty);
         setTotal(amount);

    }
    const postData = async () => {
      // const id;
       var med, cost, quantity;
       var id;

        cartList.map((item) => {
            med = item.name;
            cost = item.sellingPrice;
            quantity = item.quantity;
            
        })
      console.log(cartList)
      console.log(med)
      console.log(cost)
    db.collection("orders").add({
      id: Math.floor((Math.random() * 1000) + 1),
      name: username,
      medicine: med,
      total: total,
      date: date,
      quantity: qty
  })
  .then((docRef) => {
      alert("Data Successfully Submitted");
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
}

// useEffect(() => {
//     postData();
// }, []);


    function handleBuy(){
        setBuy(true);
    postData();

     }


  return (
    <div>
             <p className="text-4xl font-medium text-gray-900 text-center mb-10 mt-5">Cart</p>

       <div className='flex flex-row justify-evenly'>
       <div className="flex flex-col">
            <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-15">
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
                        {/* <th
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
                        </th> */}
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
                          Quantity
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
                        cartList.map(
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
                              {/* <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                  {item.quantity}
                                </div>
                              </td> */}
                              {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                ₹{item.costPrice}
                              </td> */}
                              <td className="px-6 py-4 whitespace-nowrap text-md font-bold text-gray-500">
                                ₹{item.sellingPrice}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap  text-sm capitalize text-gray-500">
                                {item.category}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap  text-m capitalize text-gray-700">
                                <input type="number" value={qty}  className="p-2 border rounded-md outline-none text-m transition duration-150 ease-in-out"  onChange={(e) => {calTotal(e,item)}}/>
                              </td>
                              
                            </tr>
                          )
                        )}
                        
                      </tbody>
                    
                    </table>
                </div>
              </div>
              </div>
              <div class="flex flex-row justify-between mt-3">
                        <div className="py-5">
                          {/* <Link to="/Medicines" class="w-full"> */}
                            <button
                                onClick={() => {setCart(false)}}

                              className={`w-full cursor-pointer py-2 px-12 text-sm text-indigo-700 rounded-lg border border-indigo-700 focus:outline-none focus:`}
                            >
                              Cancel
                            </button>
                          {/* </Link> */}
                        </div>
                        
                          <div className="py-5">
                            <button
                              type="submit"
                              onClick={handleBuy}
                              className=" border bg-indigo-600  hover:bg-indigo-500 text-white transition-all py-2 px-8 text-m  cursor-pointer  rounded-lg"
                            >
                              Buy
                            </button>
                          </div>
                        
                      </div>
                    {buy ?
                      <div className='flex flex-row p-4 bg-red-500 w-64 justify-center items-center m-auto text-white'>
                        
                        <h3 className='text-lg mr-5 font-bold'>Order Successfull</h3>
                        <BsCheckCircleFill className='text-3xl' />
                      </div>
                      :
                      <div>
                        </div>
                    }   
          </div>
        <div className='flex flex-col justify-evenly bg-gray-400 w-80 m-4'>
            <div className='p-5 bg-gray-700 '><p className='text-lg text-white font-bold uppercase'>Order Summary</p></div>
            <div className='flex flex-row justify-between p-5 align-middle  m-2 bo'><p>Subtotal</p> <p>${mrp}</p></div>
            <div className='flex flex-row justify-between p-5 align-middle  m-2 bo'><p>Quantity</p> <p>{qty}</p></div>
            <div className='flex flex-row justify-between p-5 align-middle  m-2 border-b-2'><p>Shipping</p> <p>Free</p></div>
            <div className='flex flex-row justify-between p-5 align-middle  m-2 '><p className='text-lg font-bold'>Total</p> <p>${total}</p></div>
            </div>
          </div> 
    </div>
  )
}

export default Cart