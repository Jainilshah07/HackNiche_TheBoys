import React from "react";
import { useNavigate } from "react-router-dom";

const BudgetCard = (props) => {
    const navigate = useNavigate();
    const handleSubmit =()=>{
        navigate(`/`)
    }
  return (
    <div className="mx-4 md:mx-8 h-full bg-gradient-to-r from-[#34BDF3] to-[#34BDF3] p-1">
        <div className="bg-black rounded border-2 p-2">
            <div className="row text-white">
                <p className="text-lg font-semibold">Popular - Viewed over 40K times in the last month</p>
            </div>
            <div className="row text-white">
                <div className="grid grid-cols-4">
                    <div className="col-span-1">
                        <img src="" alt="" />
                    </div>
                    <div className="col-span-3">
                        <p>{props.title}</p>
                        <p>Texttttttttt</p>
                        <button onClick={handleSubmit} className="p-2 border rounded bg-zinc-400 border-black"> {props.risk} </button>
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
  );
};

export default BudgetCard;
