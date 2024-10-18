import React from "react";

const CustomCircleContainer = () => {
  return (
    <div className="flex ">
      <div className=" w-16 h-16 relative  flex justify-center items-center gap-2 overflow-hidden">
        <div className="w-16 h-16 rounded-full border-2 bg-transparent absolute  left-1 flex justify-center items-center">
          <div
            className=" w-[48px] h-[48px] rounded-full overflow-hidden   bg-profile-face bg-[center] bg-no-repeat
                 bg-[length:48px_48px]"
          ></div>
        </div>
      </div>
      <div className=" w-14 h-16 relative  flex justify-center items-center gap-2 overflow-hidden ">
        <div className="w-16 h-16 rounded-full border-2 bg-transparent absolute   flex justify-center items-center">
          <div className="w-12 h-12 rounded-full bg-red-400 "></div>
        </div>
      </div>
      <div className=" w-14 h-16 relative  flex justify-center items-center gap-2 overflow-hidden ">
        <div className="w-16 h-16 rounded-full border-2 bg-transparent absolute   flex justify-center items-center">
          <div className="w-12 h-12 rounded-full bg-red-400 "></div>
        </div>
      </div>
      <div className=" w-14 h-16 relative  flex justify-center items-center gap-2 overflow-hidden ">
        <div className="w-16 h-16 rounded-full border-2 bg-transparent absolute   flex justify-center items-center">
          <div className="w-12 h-12 rounded-full bg-red-400 "></div>
        </div>
      </div>
      <div className=" w-16 h-16 relative  flex justify-center items-center gap-2 overflow-hidden">
        <div className="w-16 h-16 rounded-full border-2 bg-transparent absolute  right-1 flex justify-center items-center">
          <div className="w-12 h-12 rounded-full bg-red-400 "></div>
        </div>
      </div>
    </div>
  );
};

export default CustomCircleContainer;
