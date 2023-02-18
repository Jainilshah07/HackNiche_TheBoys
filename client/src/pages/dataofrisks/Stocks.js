import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import stocksdata from "../../data/stocks.json";

const Stocks = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
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
      <div className="text-2xl">
        <div>
          <table className="table-auto mx-auto my-14 ">
            <thead>
              <tr className="border-2 border-black">
                <th className="px-5 border-2 border-black">Serial No</th>
                <th className="px-5 border-2 border-black">Symbol</th>
                <th className="px-5 border-2 border-black">Open</th>
                <th className="px-5 border-2 border-black">Close</th>
                <th className="px-5 border-2 border-black">Volume</th>
                <th className="px-5 border-2 border-black">Trades</th>
                <th className="px-5 border-2 border-black">% Change</th>
                <th className="px-5 border-2 border-black">Risk</th>
              </tr>
            </thead>
            <tbody>
              {stocksData.map((data, index) => (
                <tr className="" role="row" key={data.id}>
                  <td className="mx-5 border-2 border-black" scope="row">
                    {index + 1}
                  </td>
                  <td className="border-2 border-black">{data.Symbol}</td>
                  <td className="border-2 border-black">{data.Open}</td>
                  <td className="border-2 border-black">{data.Close}</td>
                  <td className="border-2 border-black">{data.Volume}</td>
                  <td className="border-2 border-black">{data.Trades}</td>
                  <td className="border-2 border-black">{data.percentChange}</td>
                  <td className="border-2 border-black">{data.Risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Stocks;
