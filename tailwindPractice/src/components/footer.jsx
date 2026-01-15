import React from "react";
import FootLeft from "./footleft";
import FootRight from "./footright";

const Footer = () => {
  return (
    <div className=" h-50 text-white px-10 w-full flex gap-70">
      <div>
        <FootLeft />
      </div>
      <div>
        <FootRight />
      </div>
    </div>
  );
};

export default Footer;
