import React from "react";

const App = () => {
  return (
    <div>
      <div className="bg-black h-screen w-full flex flex-col overflow-hidden text-white p-4 gap-4">
        <div className=" flex justify-center  items-center">
          <h1 className=" text-white text-3xl  underline uppercase font-bold">
            Notes App
          </h1>
        </div>
        <div className=" px-5 flex gap-2 flex-row h-full flex-wrap justify-between">
          <div className="flex flex-row gap-43">
            <form className="flex flex-col w-140 items-start gap-8">
              <h1 className=" text-white text-3xl  underline uppercase font-bold">
                Add Notes
              </h1>
              <input
                type="text"
                placeholder="Enter Notes Heading"
                className="px-5 w-full py-4 border-2 border-red-500 flex items-start
                "
              />

              <textarea
                placeholder="Write Details here"
                className="px-5 w-full h-50 py-4 border-2 border-red-500 flex items-start
                "
              ></textarea>

              <button
                className="px-5 w-full py-4 border-2 border-red-500 flex justify-center bg-green-500 hover:bg-green-700 active:scale-90 text-white font-bold
                "
              >
                Add Note
              </button>
            </form>
            <div className="lg:bg-white h-full w-2"></div>
          </div>
          <div className=" flex flex-col w-170 max-h-160 gap-4">
            <h1 className=" text-white text-3xl  underline uppercase font-bold">
              Recent Notes
            </h1>
            <div className="flex p-2 flex-row flex-wrap h-full overflow-y-auto gap-4">
              <img
                src="https://imgs.search.brave.com/LYL8cApls4Ks5xpa1guBK1hsM_GZ9jq-AGWYXcT57qU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/NTg0LzQyMy9zbWFs/bC93aGl0ZS1zdGlj/a3ktbm90ZS13aXRo/LWdyZWVuLXdhc2hp/LXRhcGUtcG5nLnBu/Zw"
                alt=""
                className="h-60 w-50"
              />
              <div className="bg-red-400 h-60 w-50"></div>
              <div className="bg-red-400 h-60 w-50"></div>
              <div className="bg-red-400 h-60 w-50"></div>
              <div className="bg-red-400 h-60 w-50"></div>
              <div className="bg-red-400 h-60 w-50"></div>
              <div className="bg-red-400 h-60 w-50"></div>
              <div className="bg-red-400 h-60 w-50"></div>
              <div className="bg-red-400 h-60 w-50"></div>
              <div className="bg-red-400 h-60 w-50"></div>
              <div className="bg-red-400 h-60 w-50"></div>
              <div className="bg-red-400 h-60 w-50"></div>
              <div className="bg-red-400 h-60 w-50"></div>
              <div className="bg-red-400 h-60 w-50"></div>
              <div className="bg-red-400 h-60 w-50"></div>
              <div className="bg-red-400 h-60 w-50"></div>
              <div className="bg-red-400 h-60 w-50"></div>
              <div className="bg-red-400 h-60 w-50"></div>
              <div className="bg-red-400 h-60 w-50"></div>
              <div className="bg-red-400 h-60 w-50"></div>
              <div className="bg-red-400 h-60 w-50"></div>
              <div className="bg-red-400 h-60 w-50"></div>
              <div className="bg-red-400 h-60 w-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
