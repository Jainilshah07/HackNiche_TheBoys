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
            <table class="table-auto">
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Open</th>
                  <th>Close</th>
                  <th>Volume</th>
                  <th>Trades</th>
                  <th>% Change</th>
                  <th>Risk</th>
                </tr>
              </thead>
              <tbody>
                {stocksData.map((data, index) => (
                  <tr className="" role="row" key={data.id}>
                    <td className="mx-5" scope="row">
                      {index + 1}
                    </td>
                    <td>{data.Symbol}</td>
                    <td>{data.Open}</td>
                    <td>{data.Close}</td>
                    <td>{data.Volume}</td>
                    <td>{data.Trades}</td>
                    <td>{data.percentChange}</td>
                    <td>{data.Risk}</td>
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
