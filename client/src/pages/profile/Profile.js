import React, { useState, useEffect } from 'react'
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

    const InputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInput({
            ...input,
            [name]: value,
        });
    };
    const [userData, setUserData] = useState([]);
    const [userExpData, setUserExpData] = useState([]);
  const getApiData = async () => {
    try {
            const res = await axios.get("http://localhost:8000/api/Fam/getFamDetails");
            setUserData(res.data)  

    } catch (error) {
        console.log("error form content", error)
    }
  };
//   const getApiData2 = async () => {
//     try {
//         const resp = await axios.get("http://localhost:8000/api/Exp/getExpense");
//         setUserData(resp.data)

//     } catch (error) {
//         console.log("error form content", error)
//     }
//   };

  useEffect(() => {
    getApiData();
    // getApiData2();
  }, []);

    const SubmitHandler = async (e) => {
        e.preventDefault();
        const member = { name: input.name, occupation: input.occupation, age: input.age, gender: input.gender }
        console.log(member)
        try {
            if (member) {
                const res = await axios.post("http://localhost:8000/api/Fam/postFamDetails", member);
                console.log(res.data);
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
        try {
            if (user) {
                const res = await axios.post("http://localhost:8000/api/Exp/postExpense", user);
                console.log(res.data);
            }
        } catch (error) {
            console.log("error form content", error)
        }
        
        setInput({
            source: "", amount: ""

        });
    };



  return (
    <div className='mx-0 md:mx-0 h-screen text-black p-1'>
        <div className="h-screen">
      <div className="row ">
      <div className="grid grid-cols-5">
        <div className="col-span-2">
        <p className='text-2xl font-semibold text-black my-4 mx-auto'>Enter User Details</p>
            <div className="row">
            <div className="grid grid-cols-2">
            <div className="col-span-1">
                <p className='text-xl text-black font-medium'>Name: </p>
            </div>
            <div className="col-span-1">
                <input className='border my-2 border-black mx-4 rounded' type="text" value={input.name} onChange={InputHandler} name="name" />
            </div>
            <div className="col-span-1">
                <p className='text-xl text-black font-medium'>Age: </p>
            </div>
            <div className="col-span-1">
                <input className='border my-2 border-black mx-4 rounded' type="text" value={input.age} onChange={InputHandler} name="age" />
            </div>
            <div className="col-span-1">
                <p className='text-xl text-black font-medium'>Gender: </p>
            </div>
            <div className="col-span-1">
                <input className='border my-2 border-black mx-4 rounded' type="text" value={input.gender} onChange={InputHandler} name="gender" />
            </div>
            <div className="col-span-1">
                <p className='text-xl text-black font-medium'>Occupation: </p>
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

            <div className='font-medium text-black text-xl'>Total Family Income:</div>
                <input className='border my-2 border-black mx-4 rounded' type="number" name="totalfamincome" />

            </div>
            <div className="row text-black">
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
              {userData.map((data, index) => (
                <tr className="text-black" role="row" key={data.id}>
                  <td className="mx-5 border-2 border-black" scope="row">
                    {index + 1}
                  </td>
                  <td className="border-2 border-black">{data.name}</td>
                  <td className="border-2 border-black">{data.occupation}</td>
                  <td className="border-2 border-black">{data.gender}</td>
                  <td className="border-2 border-black">{data.age}</td>
                </tr>
              ))}
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
            <p className='text-2xl font-semibold text-black my-4 mx-auto'>Enter Expense Details</p>
            <div className="row">
            <div className="grid grid-cols-2">
            <div className="col-span-1">
                <p className='text-xl text-black font-medium'>Expense Source: </p>
            </div>
            <div className="col-span-1">
                <input className='border my-2 border-black mx-4 rounded' type="text" value={input.source} onChange={InputHandler} name="source" />
            </div>
            <div className="col-span-1">
                <p className='text-xl text-black font-medium'>Expense Amount: </p>
            </div>
            <div className="col-span-1">
                <input className='border my-2 border-black mx-4 rounded' type="text" value={input.amount} onChange={InputHandler} name="amount" />
            </div>
            </div>
            <div className="row">
                <button className='border-2 bg-slate-100 my-2 p-1' onClick={SubmitHandler2}>Submit</button>
            </div>

            <div className='font-medium text-black text-xl'>Total Family Income:</div>
                <input className='border my-2 border-black mx-4 rounded' type="number" name="totalfamincome" />
             
                <div className="row text-black">
            <table className="table-auto mx-auto my-14 ">
            <thead>
              <tr className="border-2 border-black">
                <th className="px-5 border-2 border-black">Serial No</th>
                <th className="px-5 border-2 border-black">Source</th>
                <th className="px-5 border-2 border-black">Amount</th>
              </tr>
            </thead>
            <tbody>
              {userExpData.map((data, index) => (
                <tr className="text-black" role="row" key={data.id}>
                  <td className="mx-5 border-2 border-black" scope="row">
                    {index + 1}
                  </td>
                  <td className="border-2 border-black">{data.source}</td>
                  <td className="border-2 border-black">{data.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
                
            </div>

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
