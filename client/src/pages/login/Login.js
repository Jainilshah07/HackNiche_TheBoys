import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import axios from "../../axios";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        EmailId: "",
        Password: ""

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
        const user = { EmailId: input.EmailId, Password: input.Password }
        console.log(user);
        try {
            if (user) {
                const res = await axios.post("http://localhost:8000/api/User/login", user);
                console.log(res.data);
                localStorage.setItem("signature",res.data.signature)
                navigate("/")
            }
        } catch (error) {
            console.log("error form content", error)
        }
        setInput({
            EmailId: "", Password: "",
        });
    };


    return (
        <div className="relative bg-gradient-to-tr from-pink-200 to-blue-200 flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="m-2 md:w-[27rem] p-6 md:m-auto bg-sky-900 rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-black md:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-gray-400 ">
                    Login
                </h1>
                <form className="mt-6">
                    <div className="mb-2"></div>
                    <div className="mb-2">
                        <label
                            for="Email"
                            className="block text-sm font-semibold text-gray-400 text-left ml-10">
                            Email
                        </label>
                        <input
                            type="email" name="EmailId" value={input.EmailId} onChange={InputHandler}
                            className="block w-48 md:w-72 ml-9 px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-3xl focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mb-2">
                        <label
                            for="aadhar"
                            className="block text-sm font-semibold text-gray-400 text-left ml-10"
                        >
                            Password
                        </label>
                        <input
                            type="password" name="Password" value={input.Password} onChange={InputHandler}
                            className="block w-48 md:w-72 ml-9 px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-3xl focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mt-6">
                        <button onClick={SubmitHandler} type="button" class="bg-gradient-to-r from-green-400 to-blue-300  w-36 rounded-3xl h-10">Login</button>

                    </div>
                    <div className='mt-3'>
                        <Link className='text-gray-400 ' to="#">Forgot Password?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Login;
