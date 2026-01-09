import React from "react";
import { CircleUserRound } from "lucide-react";
import { Handbag } from "lucide-react";

const Navbar = () => {
  return (
    <div className="h-20 w-full flex gap-x-110  px-13 py-7 flex-row text-white uppercase text-lg ">
      <div className="flex flex-row gap-10">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <p>Services</p>
        <p>Blog</p>
      </div>
      <div className="flex flex-row gap-6">
        <CircleUserRound />
        <Handbag />
      </div>
    </div>
  );
};

export default Navbar;
