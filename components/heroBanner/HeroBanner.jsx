import React from "react";

const HeroBanner = () => {
  return (
    <div className="h-screen w-full flex items-center relative">
      <div className="w-full h-full absolute top-0 left-0">
        <img
          src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute w-full h-full top-0 left-0 backdrop-blur-sm"></div>
      <div className="absolute z-10 w-full h-full bg-gradient-to-t from-white from-10%"></div>

      <div className="absolute z-20 px-4 md:px-8 w-full h-screen pt-[80px]">
        <div className="rounded h-[calc(100vh-120px)] relative">
          <img
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
            alt=""
            className="rounded-[16px] h-full w-full object-cover object-center"
          />
          <div className="absolute bg-black/30 top-0 left-0 h-full w-full rounded-[16px]"></div>
          <div className="absolute flex justify-end top-0 left-0 h-full w-full p-4 md:p-10 flex-col flex-1">
            <div className="rounded-xl h-12 md:h-[64px] w-12 md:w-[64px]">
              <img
                src="https://images.unsplash.com/photo-1671549845835-224455af2e41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                className="rounded-lg h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col text-white font-bold">
              <div className="mt-6 items-start flex flex-1 flex-col">
                <h1 className="block text-[2em]">Mems: Mingle</h1>
                <div className="flex mt-1 items-center text-lg">
                  <span>By memsproject</span>
                  <div></div>
                </div>
                <div className="flex">
                  <span className="flex">Open Edition - 0.01 ETH</span>
                </div>
                <div className="mt-6">
                  <button className="rounded-xl md:rounded-lg bg-white/[0.06] backdrop-blur-[10px] inline-flex items-center px-8 py-4 cursor-pointer tracking-widest font-semibold">
                    Explore
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
