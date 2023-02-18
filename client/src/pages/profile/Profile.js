import React, { useState } from 'react'
import axios from 'axios';

const Profile = () => {
    const [input, setInput] = useState({
        name: "",
        occupation: "",
        gender: "",
        age: "",
        source:"",
        amount:""
    });

    // const [ records, setRecords ] = useState([])

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
        const member = { name: input.name, occupation: input.occupation, age: input.age, gender: input.gender }
        // const newRecord = { ...input, id: new Date().getTime().toString() }
        // console.log(records)
        // setRecords({ ...records, newRecord })
        try {
            if (member) {
                const res = await axios.post("http://localhost:8000/api/Fam/postFamDetails", member);
                console.log(res.data);
                // localStorage.setItem("signature",res.data.signature)
            }
        } catch (error) {
            console.log("error form content", error)
        }
        
        setInput({
            name: "", occupation: "", gender: "", age: ""
        });
    };
    const SubmitHandler2 = async (e) => {
        e.preventDefault();
        const user = { source: input.source, amount: input.amount }
        const newRecord = { ...input, id: new Date().getTime().toString() }
        console.log(records)
        setRecords({ ...records, newRecord })
        
        setInput({
            source: "", amount: ""

        });
    };



  return (
    <div className='mx-0 md:mx-0 h-screen bg-gradient-to-r from-[#34BDF3] to-[#34BDF3] p-1'>
        <div className="bg-blue-400 h-screen">
      <div className="row">
      <div className="grid grid-cols-5">
        <div className="col-span-2">
        <p className='text-2xl font-semibold text-white my-4 mx-auto'>Enter User Details</p>
            <div className="row">
            <div className="grid grid-cols-2">
            <div className="col-span-1">
                <p className='text-xl text-white font-medium'>Name: </p>
            </div>
            <div className="col-span-1">
                <input className='border my-2 border-black mx-4 rounded' type="text" value={input.name} onChange={InputHandler} name="name" />
            </div>
            <div className="col-span-1">
                <p className='text-xl text-white font-medium'>Age: </p>
            </div>
            <div className="col-span-1">
                <input className='border my-2 border-black mx-4 rounded' type="text" value={input.age} onChange={InputHandler} name="age" />
            </div>
            <div className="col-span-1">
                <p className='text-xl text-white font-medium'>Gender: </p>
            </div>
            <div className="col-span-1">
                <input className='border my-2 border-black mx-4 rounded' type="text" value={input.gender} onChange={InputHandler} name="gender" />
            </div>
            <div className="col-span-1">
                <p className='text-xl text-white font-medium'>Occupation: </p>
            </div>
            <div className="col-span-1">
                <input className='border my-2 border-black mx-4 rounded' type="text" value={input.occupation} onChange={InputHandler} name="occupation" />
            </div>
            </div>
            <div className="row">
                <button className='border-2 bg-slate-100 my-2 p-1' onClick={SubmitHandler}>Submit</button>
            </div>
            {/* <div className="row">
                <button  className='border-2 bg-slate-100 p-1' onClick={clearInput}>Add Member</button>
            </div> */}

            <div className='font-medium text-white text-xl'>Total Family Income:</div>
                <input className='border my-2 border-black mx-4 rounded' type="number" name="totalfamincome" />

            </div>
            <div className="row text-white">
            <table className="table-auto mx-auto my-14 ">
            <thead>
              <tr className="border-2 border-black">
                <th className="px-5 border-2 border-black">Serial No</th>
                <th className="px-5 border-2 border-black">Name</th>
                <th className="px-5 border-2 border-black">Occupation</th>
                <th className="px-5 border-2 border-black">Gender</th>
                <th className="px-5 border-2 border-black">Age</th>
              </tr>
            </thead>
            <tbody>
              {/* {records.map((data, index) => ( */}
                {/* <tr className="text-white" role="row" key={data.id}>
                  <td className="mx-5 border-2 border-black" scope="row">
                    {index + 1}
                  </td>
                  <td className="border-2 border-black">{data.name}</td>
                  <td className="border-2 border-black">{data.occupation}</td>
                  <td className="border-2 border-black">{data.gender}</td>
                  <td className="border-2 border-black">{data.age}</td>
                </tr> */}
              {/* ))} */}
            </tbody>
          </table>
                
            </div>

            <div>
                <table>
                    <tr>
                        <th></th>
                    </tr>
                </table>
            </div>
            <div className="row"><button onClick={SubmitHandler} className='border p-1 border-black rounded '> Submit </button></div>
            
            
        </div>
        <div className="col-span-1"></div>

        <div className="col-span-2">
            <div className="row">
            <p className='text-2xl font-semibold text-white my-4 mx-auto'>Enter Expense Details</p>
            <div className="row">
            <div className="grid grid-cols-2">
            <div className="col-span-1">
                <p className='text-xl text-white font-medium'>Expense Source: </p>
            </div>
            <div className="col-span-1">
                <input className='border my-2 border-black mx-4 rounded' type="text" value={input.source} onChange={InputHandler} name="source" />
            </div>
            <div className="col-span-1">
                <p className='text-xl text-white font-medium'>Expense Amount: </p>
            </div>
            <div className="col-span-1">
                <input className='border my-2 border-black mx-4 rounded' type="text" value={input.amount} onChange={InputHandler} name="amount" />
            </div>
            </div>
            <div className="row">
                <button className='border-2 bg-slate-100 my-2 p-1' onClick={SubmitHandler2}>Submit</button>
            </div>

            <div className='font-medium text-white text-xl'>Total Family Income:</div>
                <input className='border my-2 border-black mx-4 rounded' type="number" name="totalfamincome" />

            </div>
            </div>
        </div>

      </div>
      </div>
</div>
      
      
    </div>
  )
}

export default Profile
