import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bg from "../../assets/bgfinal.svg";
import logo from "../../assets/Logo.jpg";
import google from "../../assets/google.svg";
import github from "../../assets/github.svg";
import signup from "../../assets/signup.svg";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        EmailIdId: "",
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
        const user = { EmailIdId: input.EmailIdId, Password: input.Password }
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
            EmailIdId: "", Password: "",
        });
    };


    return (
        <>
        <form onSubmit={SubmitHandler}>
        <div className="h-[630px] overflow-y-hidden bg-hero text-gray-900 flex justify-center">
          <div className="max-w-screen-xl m-0 bg-white shadow sm:rounded-lg flex justify-center flex-1">
            <div className="lg:w-1/2 xl:w-5/12 sm:p-4">
              <div>
                <img src={logo} className="w-32 mx-auto" alt="" />
              </div>
              <div className="mt-0 flex flex-col items-center">
                <h1 className="text-2xl font-extrabold text-poppins">
                  Sign In with Finance Friend
                </h1>
                <div class="w-full flex-1 mt-5">
                  <div class="flex flex-col items-center">
                    <button class="w-full max-w-xs font-bold shadow-sm rounded-lg py-2 bg-[#D4D9F6] text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                      <div class="bg-white p-2 rounded-full">
                        <img class="w-4" src={google} alt="" />
                      </div>
                      <span class="ml-4">Sign In with Google</span>
                    </button>

                    <button class="w-full max-w-xs font-bold shadow-sm rounded-lg py-2 bg-[#D4D9F6] text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                      <div class="bg-white p-1 rounded-full">
                        <img class="w-6" src={github} alt="" />
                      </div>
                      <span class="ml-4">Sign In with GitHub</span>
                    </button>
                  </div>

                  <div class="my-2 border-b text-center">
                    <div class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                      Or sign up with e-mail
                    </div>
                  </div>

                  <div class="mx-auto mt-2 max-w-xs">
                    <input
                      name="EmailId"
                      class="w-full px-8 py-2 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="EmailId"
                      placeholder="EmailId"
                      value={input.EmailId}
                      onChange={InputHandler}
                      reaquired
                    />
                    <input
                      name="Password"
                      class="w-full px-8 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="Password"
                      placeholder="Set Password"
                      value={input.Password}
                      onChange={InputHandler}
                      required
                    />
                    <button class="mt-3 tracking-wide font-semibold bg-[#233FF2] text-gray-100 w-full py-3 rounded-lg hover:bg-[#1D33AA] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                      <img className="fill-white w-4 h-4" src={signup} alt="" />
                      <span class="ml-3">Sign In</span>
                    </button>
                    <div className="flex mt-2">
                      <div class=" text-xs text-gray-600">
                        Not Signed In? 
                        <Link
                          to="/register"
                          class="border-b border-gray-500 border-dotted"
                        >
                          Sign Up 
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-1 bg-[#D4D9F6] text-center hidden lg:flex">
              <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat align-middle items-center">
                <img src={bg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </form>
      </>
    );
};
export default Login;
