import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import bonddata from '../../data/bonds.json'
import stocksdata from '../../data/stocks.json'


const DataLowRisk = () => {
  const navigate = useNavigate();
  const [bondData,setBondData] = useState([]);
  const [stockData,setStockData] = useState([]);

  const getApiData = async () => {
    try {
      setBondData(bonddata);
      setStockData(stocksdata);

    } catch (error) {
      console.log("Error in getting data", error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const handleSubmit = () => {
    // console.log(data.id)
    navigate("/portfolio");
  };
  return (
    <div className="pb-10 bg-gradient-to-b font-['Montserrat'] from-[#f7eeee] to-[#b7abb6]">
      <div className="row">
        <div className="row py-2">
          <Link to="/investment"><button className="ml-auto mr-32 rounded p-1 border-2 border-blue-900 bg-blue-700">Back to Investment Options</button></Link> 
        </div>
      <p className="text-xl py-4 font-bold">Government Bonds With Low Risk</p>
      <div className="row">
        <div className="grid grid-cols-3 gap-3">
        {bondData.map((data, index) => {
        if (index < 3) {
          return (
            <div className="border mx-3 border-black">
            <div className="row h-full px-3 bg-gradient-to-r from-[#31ec4d] to-[#f3e634e0] p-1">
            <div className="mx-auto col-span-1 bg-white" key={data.id}>
              <div className="pt-5 w-72 font-['Montserrat]">
                <div className="rounded-lg overflow-hidden shadow-lg max-w-sm h-64">
                  <div className="flex">
                    <img src="logo512.png" alt="" className="w-10 h-10" />
                    <p className="ml-5 mt-3">{data.SYMBOL}</p>
                  </div>

                  <div className="row">
                    <div className="grid grid-cols-2 mt-5">
                      <div>
                        <label
                          for="symbol"
                          className="block text-sm font-semibold text-gray-400  "
                        >
                          {data.SERIES}
                        </label>
                        <p className="block text-sm text-black"></p>
                      </div>
                      <div>
                        <label
                          for="series"
                          className="block text-sm font-semibold text-gray-400  "
                        >
                          Series
                        </label>
                        <p className="block text-sm  text-black ">{data.VALUE} </p>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="grid grid-cols-2 mt-5">
                      <div>
                        <label
                          for="bondtype"
                          className="block text-sm font-semibold text-gray-400  "
                        >
                          Bond Type
                        </label>
                        <p className="block text-sm  text-black  ">Regular</p>
                      </div>
                      <div>
                        <label
                          for="couponrate"
                          className="block text-sm font-semibold text-gray-400  "
                        >
                          LTP
                        </label>
                        <p className="block text-sm  text-black ">{data.LTP}</p>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="grid grid-cols-2 mt-5">
                      <div>
                        <label
                          for="facevalue"
                          className="block text-sm font-semibold text-gray-400 "
                        >
                          Face Value
                        </label>
                        <p className="block text-sm  text-black">10000</p>
                      </div>
                      <button
                        onClick={handleSubmit}
                        type="button"
                        class="bg-gradient-to-r from-green-400 to-blue-300  w-24 rounded-3xl h-10 ml-5"
                      >
                        Show More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
          )
            ;
        }

      })}
        </div>
        <div className="row my-4">
        <Link to="/investment"><button className="ml-auto mr-32 rounded p-1 border-2 border-blue-900 bg-blue-700">View more Government Bonds</button></Link> 
        </div>
      </div>
      </div>

      <div className="row">
        <p className="text-xl py-4 font-bold">Stocks with Low Risk</p>
        <div className="row">
        <div className="grid grid-cols-3 gap-3">
        {stockData.map((data, index) => {
        if (index < 14 && data.Risk =="LOW") {
          return (
            <div className="border mx-3 border-black">
            <div className="row h-full px-3 bg-gradient-to-r from-[#31ec4d] to-[#f3e634e0] p-1">
            <div className="mx-auto col-span-1 bg-white " key={data.id}>
              <div className="pt-5 w-72 font-['Montserrat]">
                <div className="rounded-lg overflow-hidden shadow-lg max-w-sm h-64">
                  <div className="flex">
                    <img src="logo512.png" alt="" className="w-10 h-10" />
                    <p className="ml-5 mt-3">{data.Symbol}</p>
                  </div>

                  <div className="row">
                    <div className="grid grid-cols-2 mt-5">
                      <div>
                        <label
                          for="symbol"
                          className="block text-sm font-semibold text-gray-400  "
                        >
                          {data.SERIES}
                        </label>
                        <p className="block text-sm text-black"></p>
                      </div>
                      <div>
                        <label
                          for="series"
                          className="block text-sm font-semibold text-gray-400  "
                        >
                          Open
                        </label>
                        <p className="block text-sm  text-black ">{data.Open} </p>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="grid grid-cols-2 mt-5">
                      <div>
                        <label
                          for="bondtype"
                          className="block text-sm font-semibold text-gray-400  "
                        >
                          Volume
                        </label>
                        <p className="block text-sm text-black"> {data.Volume} </p>
                      </div>
                      <div>
                        <label
                          for="couponrate"
                          className="block text-sm font-semibold text-gray-400  "
                        >
                          Close
                        </label>
                        <p className="block text-sm  text-black ">{data.Close}</p>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="grid grid-cols-2 mt-5">
                      <div>
                        <label
                          for="facevalue"
                          className="block text-sm font-semibold text-gray-400 "
                        >
                          Face Value
                        </label>
                        <p className="block text-sm  text-black">10000</p>
                      </div>
                      <button
                        onClick={handleSubmit}
                        type="button"
                        class="bg-gradient-to-r from-green-400 to-blue-300  w-24 rounded-3xl h-10 ml-5"
                      >
                        Show More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
          )
            ;
        }

      })}
        </div>
      </div>
      </div>
      
      
    </div>
  )
}

export default DataLowRisk
