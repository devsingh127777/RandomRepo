import React from "react";
import { CirclePlay } from "lucide-react";
import Capsules from "./Capsules";
import Pricing from "./Pricing";
const Middle1 = () => {
  return (
    <div>
      <main className="relative flex flex-col z-50 p-7 sm:hidden md:hidden ">
        <section className="relative  mt-20">
          <img
            className="z-50"
            src="https://ik.imagekit.io/sheryians/cohort-3_ekZjBiRzc.jpeg"
            alt=""
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white hover:scale-110 duration-300 cursor-pointer">
            <CirclePlay size={60} strokeWidth={1} />
          </div>
        </section>
        <section className=" mt-3 py-2 px-2 ">
          <h1 className="font-black  text-white  text-[28px] font-[hell]">
            2.0 Job Ready AI Powered Cohort: Complete Web Development + DSA +
            Gen-AI + Aptitude
          </h1>
        </section>
        <section className="mt-3  grid grid-cols-2 grid-rows-2 gap-2 justify-center text-white font-[gill]">
          <p className="p-2  text-center bg-[#141415] font-bold rounded">
            Language: <span className="green  font-light">Hinglish</span>
          </p>
          <p className="p-2 font-bold text-center bg-[#141415] rounded">
            Certificate: <span className="green font-light ">Yes</span>
          </p>
          <p className="p-2 font-bold text-center bg-[#141415] rounded">
            Schedule: <span className="green font-light ">Mon-Sat</span>
          </p>
          <p className="p-2 font-bold text-center bg-[#141415] rounded">
            Content: <span className="green font-light ">250+hours</span>
          </p>
        </section>
        <section>
          <Capsules />
        </section>
        <section>
          <Pricing />
        </section>
      </main>
      {/* Now for the sm screens and above */}
      <main className="hidden sm:flex sm:flex-col md:hidden p-7  ">
        <article className="flex flex-col p-7 relative ">
          <section className="relative mt-20">
            <img
              className="z-50"
              src="https://ik.imagekit.io/sheryians/cohort-3_ekZjBiRzc.jpeg"
              alt=""
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white hover:scale-110 duration-300 cursor-pointer">
              <CirclePlay size={60} strokeWidth={1} />
            </div>
          </section>
          <section className="  bg-[#1f1e1f] p-6 grid grid-cols-2 grid-rows-2 gap-4 rounded-b-md justify-center text-white font-[gill]">
            <p className="p-2  text-center bg-[#141415] font-bold rounded">
              Language: <span className="green  font-light">Hinglish</span>
            </p>
            <p className="p-2 font-bold text-center bg-[#141415] rounded">
              Certificate: <span className="green font-light ">Yes</span>
            </p>
            <p className="p-2 font-bold text-center bg-[#141415] rounded">
              Schedule: <span className="green font-light ">Mon-Sat</span>
            </p>
            <p className="p-2 font-bold text-center bg-[#141415] rounded">
              Content: <span className="green font-light ">250+hours</span>
            </p>
          </section>
          <section className=" mt-3 py-2 px-2 ">
            <h1 className="font-black  text-white  text-[28px] sm:text-4xl font-[hell]">
              2.0 Job Ready AI Powered Cohort: Complete Web Development + DSA +
              Gen-AI + Aptitude
            </h1>
          </section>
          <section>
            <Capsules />
          </section>
          <section>
            <Pricing />
          </section>
        </article>
      </main>
      {/* Now for the md screens and above */}
      <main className="hidden md:flex md:flex-row md:justify-center md:items-center md:shrink   py-26  ">
        <article className="flex flex-col py-10 px-8 ">
          <section className=" mt-3 py-2 px-2 max-w-350 ">
            <h1 className="font-black  text-white  text-[100%] sm:text-[2.5rem]   md: font-[hell]">
              2.0 Job Ready AI Powered Cohort: Complete Web Development + DSA +
              Gen-AI + Aptitude
            </h1>
          </section>
          <section>
            <Capsules />
          </section>
          <section>
            <Pricing />
          </section>
        </article>
        <article className="flex flex-col p-4 relative ">
          <section className="relative min-w-150 ">
            <img
              className="z-50"
              src="https://ik.imagekit.io/sheryians/cohort-3_ekZjBiRzc.jpeg"
              alt=""
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white hover:scale-110 duration-300 cursor-pointer">
              <CirclePlay size={60} strokeWidth={1} />
            </div>
          </section>
          <section className="  bg-[#1f1e1f] p-6 grid grid-cols-2 grid-rows-2 gap-4 rounded-b-md justify-center text-white font-[gill]">
            <p className="p-2  text-center bg-[#141415] font-bold rounded">
              Language: <span className="green  font-light">Hinglish</span>
            </p>
            <p className="p-2 font-bold text-center bg-[#141415] rounded">
              Certificate: <span className="green font-light ">Yes</span>
            </p>
            <p className="p-2 font-bold text-center bg-[#141415] rounded">
              Schedule: <span className="green font-light ">Mon-Sat</span>
            </p>
            <p className="p-2 font-bold text-center bg-[#141415] rounded">
              Content: <span className="green font-light ">250+hours</span>
            </p>
          </section>
        </article>
      </main>
    </div>
  );
};

export default Middle1;
