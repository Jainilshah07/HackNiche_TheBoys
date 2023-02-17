import React, { useState } from 'react'
import axios from 'axios';

const Profile = () => {
    const [input, setInput] = useState({
        name: "",
        occupation: "",
        gender: "",
        age: "",
    });

    const InputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInput({
            ...input,
            [name]: value,
        });
    };

    const SubmitHandler = async (e) => {
        e.preventDefault();
        const user = { name: input.name, occupation: input.occupation, age: input.age, gender: input.gender }
        // console.log(user);
        try {
            if (user) {
                const res = await axios.post("http://localhost:8000/api/User/register", user);
                console.log(res.data);
                // navigate("/login")
            }
        } catch (error) {
            console.log("error form content", error)
        }
        setInput({
            name: "", occupation: "", occupation: "", gender: "", age: ""
        });
    };
  return (
    <div className='mx-0 md:mx-0 h-screen bg-gradient-to-r from-[#34BDF3] to-[#34BDF3] p-1'>
        <div className="bg-black h-screen">
        <p className='text-2xl font-semibold my-4 mx-auto'>Enter User Details</p>
      <div className="row">
      <div className="grid grid-cols-6">
        <div className="col-span-2">
            <div className="row">
            <div className="grid grid-cols-2">
            <div className="col-span-1">
                <p className='text-xl text-white font-medium'>Name: </p>
            </div>
            <div className="col-span-1">
                <input className='border my-2 border-black mx-4 rounded' type="text" name="name" />
            </div>
            <div className="col-span-1">
                <p className='text-xl text-white font-medium'>Age: </p>
            </div>
            <div className="col-span-1">
                <input className='border my-2 border-black mx-4 rounded' type="text" name="age" />
            </div>
            <div className="col-span-1">
                <p className='text-xl text-white font-medium'>Occupation: </p>
            </div>
            <div className="col-span-1">
                <input className='border my-2 border-black mx-4 rounded' type="text" name="occupation" />
            </div>
            <div className='font-medium text-xl'>Total Family Income:</div>
                <input className='border my-2 border-black mx-4 rounded' type="number" name="totalfamincome" />
            </div>
            </div>
            <div className="row text-white">
                
            </div>
            <div className="row"><button onClick={SubmitHandler} className='border p-1 border-black rounded '> Submit </button></div>
            
            
        </div>
        <div className="col-span-2"></div>

      </div>
      </div>

      {/* <div className="row">
        <p>Total Family Income:</p>
        <input className='border my-2 border-black mx-4 rounded' type="number" name="totalfamincome" />
      </div>
      <div className="row"><button onClick={SubmitHandler} className='border p-1 border-black rounded '> Submit </button></div> */}
        </div>
      
      
    </div>
  )
}

export default Profile
