import React from "react";

const page = () => {
  return (
    <div className="text-white h-screen f px-14 font-roboto  ">
      <div className="flex flex-col justify-center items-start h-full w-full translate-y-36">
        <p className="uppercase text-xl font-medium tracking-wider">
          Zavo all-in-one Platform
        </p>
        <div className="flex w-full justify-between items-center">
          <div>
            <p className="text-8xl mt-2">
              Earn, save<br></br>& spend.
            </p>
            <p className="text-2xl mt-5">
              Financial flow: payments, management, <br></br>global payouts,
              cards.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-44 h-44 outline-white outline  rounded-full">
            <p className="text-2xl leading-none">&#x2197;</p>
            <p className="text-center text-lg">View all</p>
          </div>
        </div>
        <div className="uppercase flex  gap-40 mt-32">
          <p>canzavopay.com</p>
          <p>canzavo</p>
        </div>
      </div>
    </div>
  );
};

export default page;
