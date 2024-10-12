import { ArrowUpRight } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="absolute left-0 bottom-0 w-screen  p-3 px-4">
        <div className="w-full flex flex-col">
          <h1 className="text-5xl flex items-center  text-[#ff4b97]">
            Dating&nbsp;
            <span className="rounded-full h-8 bg-[#ff4b97] font-normal text-3xl text-white px-3 pt-1 flex justify-center items-center">
              18+
            </span>
          </h1>
          <h2 className="text-5xl text-white">
            for Frivolous <br></br>Relationships
          </h2>
          <p className="text-white/35 leading-none mt-2">
            Social network created exclusively for finding meetings for adult
          </p>
          <div className="w-full bg-white rounded-full flex items-center justify-between text-black p-3 px-5 mt-5">
            <p className="font-medium ">Get started</p>
            <ArrowUpRight size={25} color="black"></ArrowUpRight>
          </div>
          <div className="w-full flex justify-center mt-4 ">
            <p className="text-white/35 leading-none ">
              Already have an account?{" "}
              <span className="text-[#ff4b97] ">Sign in</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
