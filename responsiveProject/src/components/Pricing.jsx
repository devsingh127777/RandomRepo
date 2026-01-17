import React from "react";

const Pricing = () => {
  return (
    <div className="flex flex-col gap-y-5 font-[gill]  text-white mt-10">
      <div>
        <span className="text-3xl">Price </span>
        <span className="green text-2xl">₹ 5999</span>
        <span className="gray line-through text-lg">₹ 11999 </span>
        <span className="text-xl">(+ GST)</span>
        <h5 className="green">Scratch Card In The End!</h5>
      </div>
      <div className="grid grid-cols-2 gap-3 max-w-sm">
        <button className="bg-[#24cfa6] text-[1rem] px-4 py-4  rounded font-black font-[gill] ">
          Buy Now
        </button>
        <button className="bg-[#6b7280] text-[1rem] font-semibold px-4 py-3 rounded font-[gill]">
          View Syllabus
        </button>
        <p className="text-sm whitespace-nowrap font-bold font-[hell]">
          Enrollment is almost full -{" "}
          <span className=" text-sm font-bold  green font-[hell]">
            Limited Seats Available!
          </span>
        </p>
      </div>
    </div>
  );
};

export default Pricing;
