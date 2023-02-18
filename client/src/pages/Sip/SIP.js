import React, { useState } from 'react'
import sip from "../../assets/Sip.png"

const SIP = () => {

    const [input, setInput] = useState({
        amount: "",
        years: "",
        roi: ""

    });

    const InputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInput({
            ...input,
            [name]: value,
        });
    };

    return (
        <div>
            <div className='grid grid-cols-3'>
                <div className="col-span-2">
                    <img className='w-screen h-screen' src={sip} alt="" />

                </div>
                <div className='col-span-1 mx-5'>
                    <h1 className='font-extrabold text-3xl my-10'>SIP CALCULATOR</h1>

                    <div className='row'>
                        <form className="w-full max-w-lg ">
                            <div className="flex flex-wrap -mx-auto mb-6">
                                <div className="w-full  px-3 mb-6 md:mb-0">
                                    <div className="row">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                            I want to invest per month
                                        </label>
                                        <input name="amount"
                                            value={input.amount}
                                            onChange={InputHandler}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="500" />
                                    </div>
                                    <div className="row">
                                        <div className="">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                                No. of Years
                                            </label>
                                            <input name="years"
                                                value={input.years}
                                                onChange={InputHandler} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="1 year" />
                                        </div>

                                    </div>

                                    <div className="row my-5">
                                        <div className="">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                                Expected Rate of return
                                            </label>
                                            <input name="roi"
                                                value={input.roi}
                                                onChange={InputHandler} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="8%" />
                                        </div>

                                    </div>

                                    <div className="row my-5">
                                        <div className="">
                                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                Calculate
                                            </button>
                                        </div>

                                    </div>


                                </div>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default SIP
