import React from "react";
import { Equal } from "lucide-react";
import { Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed w-full h-22 z-1000 backdrop-blur-sm  ">
      <div className="   px-5 gap-3 py-5 w-full text-bold flex justify-between font-[neue] text-white   md:px-17 md:py-7 lg:px-17 lg:py-7 xl:px-20 xl:py-7 2xl:px-20 2xl:py-7 ">
        <div className="flex gap-2 text-sm ">
          <img
            className="h-8 w-8 md:size-13"
            src="https://ik.imagekit.io/sheryians/light-logo_lNzGXRRlQ.png"
            alt=""
          />
          <h1 className=" md:text-xl whitespace-nowrap">
            Sheryians <br /> Coding School
          </h1>
        </div>
        <div className="flex  gap-4 md:hidden  lg:hidden xl:hidden 2xl:hidden ">
          <div className="mt-0.5">
            <Phone size={20} strokeWidth={2} />
          </div>
          <div>
            <Equal size={26} strokeWidth={1} />
          </div>
        </div>
        <div className="hidden gap-10 text-sm  items-center md:text-sm md:p-2 md:flex lg:flex xl:flex 2xl:flex  ">
          <h1>Home</h1>
          <h1>Courses</h1>
          <h1>Bootcamps</h1>
          <h1>Request Callback</h1>
          <button className="bg-[#24cfa6] px-9 py-2 font-[hell] font-bold rounded hover:bg-[#24eabc] whitespace-nowrap">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
