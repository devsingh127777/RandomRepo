import React from "react";

const Card = (props) => {
  return (
    <div className="peer shrink-0  transition-transform duration-300 peer-hover:scale-95">
      <div
        className="relative w-58 h-85  rounded-xl overflow-hidden
                      transition-transform duration-300
                      hover:scale-110 hover:z-10 "
      >
        <img
          src={props.image}
          alt="anime"
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-0 w-full p-3 bg-black/60 text-white">
          <h2 className="font-bold text-xl">{props.fullName}</h2>
          <p className="text-xs opacity-80">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
