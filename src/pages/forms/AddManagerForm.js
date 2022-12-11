import React from 'react'
import db from '../../firebase';

const AddManagerForm = ({manager, 
    setManager, setForm,setMedicineList,lastId, medicineList}) => {


    
    let name,value;
    const handleForm= (event) => {
      name =event.target.name;
       value=event.target.value;

       setManager({...manager, [name]: value});
    }

    // function formDataPublish() {
    const formDataPublish = async (event) => {
      event.preventDefault();

      const {name, 
        dept,
        skills,
        age,
        salary,
      } = manager;
    //   setName(name);
       db.collection("managers").add({
        id: lastId +1,
        name: name,
        dept: dept,
        skills: skills,
        age: age,
        salary: salary
    })
    .then((docRef) => {
        alert("Data Successfully Submitted");
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

    setForm(false);
    }

  return (
    
    <div className=" mt-auto w-full lg:p-10 p-4 bg-gray-50 ml-auto">
              <div className="mt-12">
                <div className="flex flex-row justify-center">
                  <div className="w-1/3">
                    
                  </div>
                  <div className="w-1/2 px-10">
                    <form>
                      <div>
                        <label htmlFor="name" className="text-m font-medium">
                          Name
                        </label>
                        <input
                          value={manager.name}
                          name="name"
                          onChange={(e) => handleForm(e)}
                          type="text"
                          className={`w-full p-4 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                          id="name"
                          placeholder="Sarthak"
                        />
                      </div>
                      <div>
                        <label htmlFor="qty" className="text-m font-medium">
                          Department
                        </label>
                        <input
                          value={manager.dept}
                          name="dept"
                          onChange={(e) => handleForm(e)}
                          type="text"
                          className={`w-full p-4 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 `}
                          id="qty"
                          placeholder="Marketing"
                        />
                      </div>
                      <div>
                        <label htmlFor="lqty" className="text-m font-medium">
                          Skills
                        </label>
                        <input
                          value={manager.skills}
                          name="skills"
                          onChange={(e) => handleForm(e)}
                          type="text"
                          className={`w-full p-4 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                          id="lqty"
                          placeholder="skills"
                        />
                      </div>
                      <div class="flex lg:flex-row flex-col justify-evenly w-full">
                        <div>
                          <label htmlFor="cp" className="text-m font-medium">
                            Age
                          </label>
                          <input
                            value={manager.age}
                            name="age"
                            onChange={(e) => handleForm(e)}
                            type="text"
                            className={`w-3/7 p-4 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id="cp"
                            placeholder="30"
                          />
                        </div>
                        <div>
                          <label htmlFor="sp" className="text-m font-medium">
                            Salary
                          </label>
                          <input
                            name="salary"
                            value={manager.salary}
                            onChange={(e) => handleForm(e)}
                            type="text"
                            className={`w-3/7 p-4 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id="sp"
                            placeholder="₹ 10000"
                          />
                        </div>
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
                              Add Manager
                            </button>
                          </div>
                        
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default AddManagerForm