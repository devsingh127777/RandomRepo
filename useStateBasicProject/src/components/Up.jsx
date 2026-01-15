import React, { useState } from "react";
import { RefreshCw } from "lucide-react";

const Up = () => {
  const [num, setNum] = useState(0);
  const [jNum, setJNum] = useState(0);
  function handleChange(event) {
    setJNum(parseInt(event.target.value));
  }
  function handleJump() {
    setNum(jNum + num);
  }

  function increaseNum() {
    setNum(num + 1);
  }
  function decreaseNum() {
    setNum(num - 1);
  }
  return (
    <div className="flex flex-col gap-3 items-center  w-full">
      <div className="flex justify-between  px-20 ml-40">
        <h1 className="text-xl font-courier text-[#8332AC]  underline ">
          counterProject
        </h1>
        <button
          onClick={() => setNum(0)}
          className="bg-[#BAD1CD] text-[#8332AC] max-w-fit font-courier px-5 py-3 ml-20 mt-2 rounded-4xl text-bold text-3xl hover:bg-[#C0D7D3] cursor-pointer active:scale-95 active:bg-[#8CADA7]"
        >
          <RefreshCw />
        </button>
      </div>
      <div className="flex flex-col gap-15 items-center">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center items-center">
            <h1
              id="num"
              className="text-[7rem] text-bold font-courier underline text-[#8332AC] "
            >
              {num}
            </h1>
          </div>
          <div className="flex flex-row gap-30 justify-center items-center ">
            <button
              onClick={increaseNum}
              className="bg-[#BAD1CD] font-courier text-[#8332AC] px-10 py-5 text-bold text-3xl rounded-4xl  hover:bg-[#C0D7D3] cursor-pointer active:scale-95 active:bg-[#8CADA7]"
            >
              INCREASE +1
            </button>
            <button
              onClick={decreaseNum}
              className="bg-[#BAD1CD] text-[#8332AC] font-courier px-10 py-5 rounded-4xl text-bold text-3xl hover:bg-[#C0D7D3] cursor-pointer active:scale-95 active:bg-[#8CADA7]"
            >
              DECREASE -1
            </button>
          </div>
        </div>
        <div className=" flex justify-center items-center w-full h-[35%]">
          <div className="flex flex-row h-full w-full items-center bg-[#E086D3] p-10 justify-around gap-20 rounded-4xl">
            <div>
              <button
                onClick={handleJump}
                className="bg-[#BAD1CD] text-[#8332AC] font-courier px-5 py-3 rounded-4xl text-bold text-3xl hover:bg-[#C0D7D3] cursor-pointer active:scale-95 active:bg-[#8CADA7]"
              >
                Jump by any number you like:
                <span className="bg-amber-50 p-2 rounded-full">{jNum}</span>
              </button>
            </div>
            <div>
              <input
                type="number"
                onChange={function name(params) {
                  handleChange(params);
                }}
                placeholder="Write number..."
                className="p-3 text-bold text-xl outline-none rounded-2xl border-2 border-[#BAD1CD]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Up;
