import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AddMedicineForm = ({medicineDetail,setMedicineDetail, setForm,setMedicineList,lastId, medicineList}) => {
    let name;
    let value;
    const clearData = {
        name: "", 
        quantity: 0,
        lowStock: 0,
        costPrice: 0,
        sellingPrice: 0,
        category: "",
        additionalNotes: "",
    }
    const handleForm = (e) => {
        name = e.target.name;
        value = e.target.value;
        setMedicineDetail({
           ...medicineDetail, [name]: value
        }
        );
        // console.log(medicineDetail)
    }

    function formDataPublish() {
        const medicineInfo = {
          id: lastId + 1,
          name: medicineDetail.name,
            sellingPrice: medicineDetail.sellingPrice,
            quantity: medicineDetail.quantity,
            lowStock: medicineDetail.lowStock,
            costPrice: medicineDetail.sellingPrice,
            category: medicineDetail.category,
            additionalNotes: medicineDetail.additionalNotes
        }
        setMedicineList(medicineDetail);
        console.log(medicineList);
        console.log(medicineDetail);

        setMedicineDetail(clearData);
        setForm(false);
        // setToggleForm(!toggleForm)
      }
  return (
    
    <div className=" mt-auto w-full lg:p-10 p-4 bg-gray-50 ml-auto">
              <div className="mt-12">
                <div className="flex flex-row justify-center">
                  <div className="w-1/3">
                    <div class="flex flex-col mt-3">
                      <div className="flex">
                        <div className="">
                          <img
                            src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1130&q=80"
                            alt=""
                            class="rounded w-2/3  object-scale-down"
                          />
                        </div>
                      </div>
                      <div className="">
                        <div className="py-3">
                          {/* <Link to="/login" class="w-full"> */}
                          <button
                            className="w-2/3 border bg-indigo-500  hover:bg-indigo-400 text-white transition-all py-2 px-8 text-sm  cursor-pointer  rounded-lg"
                          >
                            Browse Photos
                          </button>
                          {/* </Link> */}
                        </div>
                      </div>
                      <div className="">
                        <div className="">
                          {/* <Link to="/login" class="w-full"> */}
                          <button
                            className="w-2/3 border bg-red-500  hover:bg-red-400 text-white transition-all py-2 px-8 text-sm  cursor-pointer  rounded-lg"
                          >
                            Remove Photo
                          </button>
                          {/* </Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 px-10">
                    <form>
                      <div>
                        <label htmlFor="name" className="text-m font-medium">
                          Name
                        </label>
                        <input
                          value={medicineDetail.name}
                          name="name"
                          onChange={(e) => handleForm(e)}
                          type="text"
                          className={`w-full p-4 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                          id="name"
                          placeholder="Remdesivir"
                        />
                      </div>
                      <div>
                        <label htmlFor="qty" className="text-m font-medium">
                          Quantity in stock
                        </label>
                        <input
                          value={medicineDetail.quantity}
                          name="quantity"
                          onChange={(e) => handleForm(e)}
                          type="number"
                          className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 `}
                          id="qty"
                          placeholder="220"
                        />
                      </div>
                      <div>
                        <label htmlFor="lqty" className="text-m font-medium">
                          Low stock warning
                        </label>
                        <input
                          value={medicineDetail.lowStock}
                          name="lowStock"
                          onChange={(e) => handleForm(e)}
                          type="number"
                          className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                          id="lqty"
                          placeholder="15"
                        />
                      </div>
                      <div class="flex lg:flex-row flex-col justify-evenly w-full">
                        <div>
                          <label htmlFor="cp" className="text-m font-medium">
                            Cost Price (1 item)
                          </label>
                          <input
                            value={medicineDetail.costPrice}
                            name="costPrice"
                            onChange={(e) => handleForm(e)}
                            type="number"
                            className={`w-3/7 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id="cp"
                            placeholder="	₹ 150"
                          />
                        </div>
                        <div>
                          <label htmlFor="sp" className="text-m font-medium">
                            Selling Price (1 item)
                          </label>
                          <input
                            name="sellingPrice"
                            value={medicineDetail.sellingPrice}
                            onChange={(e) => handleForm(e)}
                            type="number"
                            className={`w-3/7 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id="sp"
                            placeholder="₹ 170"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="vendor" className="text-m font-medium">
                          Category
                        </label>
                        <input
                            type="text"
                          name="category"
                          id="category"
                          className="rounded-lg p-3"
                          value={medicineDetail.category}
                          onChange={(e) => handleForm(e)}

                        >
                          {/* {this.getVendorData().map(({ name }) => (
                            <option value={name}>{name}</option>
                          ))} */}
                          
                        </input>
                      </div>
                      <div>
                        <label htmlFor="vendor" className="text-m font-medium">
                          Additional Notes
                        </label>
                        <textarea
                          value={medicineDetail.additionalNotes}
                          onChange={(e) => handleForm(e)}
                          type="text"
                          name="additionalNotes"
                          rows="3"
                          className={`w-full p-2 text-primary form-textarea border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-2`}
                          id="vendor"
                          placeholder="Enter some small description"
                        />
                      </div>
                      <div class="flex flex-row justify-between mt-3">
                        <div className="py-5">
                          {/* <Link to="/Medicines" class="w-full"> */}
                            <button
                                onClick={() => {setForm(false)}}

                              className={`w-full cursor-pointer py-2 px-12 text-sm text-indigo-700 rounded-lg border border-indigo-700 focus:outline-none focus:`}
                            >
                              Cancel
                            </button>
                          {/* </Link> */}
                        </div>
                        
                          <div className="py-5">
                            <button
                              type="submit"
                              onClick={formDataPublish}
                              className=" border bg-indigo-600  hover:bg-indigo-500 text-white transition-all py-2 px-8 text-m  cursor-pointer  rounded-lg"
                            >
                              Add Product
                            </button>
                          </div>
                        
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          );
  
}

export default AddMedicineForm