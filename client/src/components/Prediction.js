import React, { useState, useEffect } from "react";
import stocksdata from "../data/stocks.json";
import Graph1 from '../assets/Graph1.png'
import Graph2 from '../assets/Graph2.png'

const Prediction = () => {
    const [stocksData, setStocksData] = useState([]);
  const getApiData = async () => {
    try {
      setStocksData(stocksdata);
    } catch (error) {
      console.log("Error in getting data", error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="col-span-1">
        <div className="row">
            <table className="table-auto mx-auto my-14 ">
              <thead>
                <tr className="border-2 border-black">
                  <th className="px-5 border-2 border-black">Serial No</th>
                  <th className="px-5 border-2 border-black">Symbol</th>
                  <th className="px-5 border-2 border-black">Open</th>
                  <th className="px-5  border-2 border-black">Predicted</th>
                </tr>
              </thead>
              <tbody>
                {stocksData.map((data, index) => {
                  if(index < 30 )
                  return (
                    <>
                    <tr className="" role="row" key={data.id}>
                    <td className="mx-5 border-2 border-black" scope="row">
                      {index + 1}
                    </td>
                    <td className="border-2 border-black">{data.Symbol}</td>
                    <td className="border-2 border-black">{data.Open}</td>
                    <td className="border-2 bg-green-200 border-black">{data.Close}</td>
                  </tr>
                    </>
                  )
                  
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-3">
          <div className="row mt-6">
          <img className="mx-8 my-12 w-[950px] " src={Graph1} alt="" />
          <img className="mx-8 my-6 h-[450px] w-[950px] " src={Graph2} alt="" />
          </div>
            
        </div>
        
      </div>
    </div>
  )
}

export default Prediction
