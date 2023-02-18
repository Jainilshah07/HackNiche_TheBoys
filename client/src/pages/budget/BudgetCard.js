import React from "react";
import { useNavigate } from "react-router-dom";


const BudgetCard = (props) => {
    let risk = props.risk;
    const navigate = useNavigate();
    const handleSubmit =()=>{
        navigate(`/${risk}`)
    }
  return (
    <div className="row my-4">
    <div className="mx-4 md:mx-8 h-full bg-gradient-to-r from-[#34BDF3] to-[#34BDF3] p-1">
        <div className="bg-black rounded border-2 p-2">
            <div className="row text-white">
                <p className="text-lg font-medium">Popular - Viewed over 40K times in the last month</p>
            </div>
            <div className="row text-white">
                <div className="grid grid-cols-5">
                    <div className="col-span-2">
                        <img className="w-full h-36" src={props.image} alt="" />
                    </div>
                    <div className="col-span-3">
                        <p className="my-3">{props.title}</p>
                        <div className="my-3">
                            <p>Available Schemes: <span> {props.count} </span> </p> 
                        </div>
                        <button onClick={handleSubmit} className="p-2 border my-2 font-medium rounded bg-zinc-400 border-black text-black"> {props.risk} </button>
                    </div>

                </div>
            </div>
        </div>
      {/* <div className="mx-8 md:mx-24 h-full bg-gradient-to-r from-[#34BDF3] to-[#34BDF3] p-1">
        <div className="bg-black h-full p-3 md:p-4">
          <div className="row mb-1 text-right text-transparent font-bold text-base md:text-4xl bg-clip-text bg-gradient-to-r from-[#34BDF3] to-[#34BDF3]">
            {props.number}
          </div>
          <div className="row text-left text-white text-base md:text-2xl">
            {props.content}
          </div>
        </div>
      </div> */}
    </div>
    </div>
  );
};

export default BudgetCard;
