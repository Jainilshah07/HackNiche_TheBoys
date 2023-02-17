import React, { useState, useEffect } from "react";
import BudgetCard from './BudgetCard'
import Stock1 from '../../assets/Stock1.webp'
import Stock2 from '../../assets/Stock2.jpeg'
import Stock3 from '../../assets/Stock3.webp'
import bonddata from '../../data/bonds.json'
import { useNavigate } from "react-router-dom";

const Budget = () => {
  const navigate = useNavigate();
  const [bondData,setBondData] = useState([]);
  const getApiData = async () => {
    try {
      setBondData(bonddata);
    } catch (error) {
      console.log("Error in getting data", error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="h-screen bg-gradient-to-b font-['Montserrat'] from-[#edf5fe] to-[#cee3fc]">
      <div className="row py-3 mx-20">
        <div className="grid grid-cols-1 md:grid-cols-3">
            <BudgetCard image={Stock2} title="Government Bonds, FD's" risk="Low-Risk" />
            <BudgetCard image={Stock1} title="Stocks, Mutual Funds" risk="Moderate-Risk" />
            <BudgetCard image={Stock3} title="Stocks" risk="High-Risk" />
        </div>
      </div>
    </div>
  )
}

export default Budget
