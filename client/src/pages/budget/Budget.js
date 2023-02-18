import React, { useState, useEffect } from "react";
import BudgetCard from './BudgetCard'
import Stock1 from '../../assets/Stock1.webp'
import Stock2 from '../../assets/Stock2.jpeg'
import Stock3 from '../../assets/Stock3.webp'
import StockLogo from '../../assets/StockLogo.jpg'
import MF_logo from '../../assets/MF_logo.jpg'
import Bank_logo from '../../assets/Bank_logo.jpg'
import GovtBond_logo from '../../assets/GovtBond_logo.jpg'
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
    <div className="bg-gradient-to-b font-['Montserrat'] from-[#edf5fe] to-[#cee3fc]">
      <div className="row py-3 mx-20">
        <p className="text-xl my-4 font-bold">Let's Manage Your Money Based on Our Recommendor that recomends based on Risk Factor</p>
        <div className="grid grid-cols-1 my-4 md:grid-cols-3">
            <BudgetCard image={Stock2} title="Government Bonds, FD's" count="07" risk="Low-Risk" />
            <BudgetCard image={Stock1} title="Stocks, Mutual Funds" count="04" risk="Moderate-Risk" />
            <BudgetCard image={Stock3} title="Stocks" count="12" risk="High-Risk" />
        </div>
        <p className="text-xl my-4 font-bold"> Here's the Data for different Investment Categories </p>
        <div className="grid grid-cols-1 my-4 md:grid-cols-3">
            <BudgetCard image={StockLogo} title="NSE Nifty 50" count="68" risk="stocks-data" />
            <BudgetCard image={MF_logo} title="Mutual Funds" count="49" risk="mutual-funds-data" />
            <BudgetCard image={Bank_logo} title="Bank Fixed Deposits" count="29" risk="Bank-FD-data" />
            <BudgetCard image={GovtBond_logo} title="Govt Bonds Deposits" count="29" risk="bonds-FD-data" />
        </div>
      </div>
    </div>
  )
}

export default Budget
