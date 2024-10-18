import { UserRoundPlus } from "lucide-react";
import React from "react";

const NearbyFriendsSection = () => {
  return (
    <div className="w-full overflow-x-scroll scrollbar-hide mt-3 ">
      <div className="w-max flex pl-5 gap-2">
        <div className="h-16 w-16 rounded-full bg-[#BF193E] flex items-center justify-center pl-1">
          <UserRoundPlus size={24} color="white"></UserRoundPlus>
        </div>
        <div className="flex ">
          <div className=" w-16 h-16 relative  flex justify-center items-center gap-2 overflow-hidden">
            <div className="w-16 h-16 rounded-full  bg-white absolute  left-1 flex justify-center items-center">
              <div className="w-[50px] h-[50px] rounded-full bg-[#CEC7C7] flex justify-center items-center ">
                <div
                  className=" w-[50px] h-[50px]  rounded-full overflow-hidden   bg-profile-face-nobg bg-[center] bg-no-repeat
                 bg-[length:50px_50px]"
                ></div>
              </div>
            </div>
          </div>
          <div className=" w-14 h-16 relative  flex justify-center items-center gap-2 overflow-hidden ">
            <div className="w-16 h-16 rounded-full  bg-white absolute   flex justify-center items-center">
              <div className="w-[50px] h-[50px] rounded-full bg-[#74CDD6] flex justify-center items-center ">
                <div
                  className=" w-[50px] h-[50px]  rounded-full overflow-hidden   bg-profile-face-nobg bg-[center] bg-no-repeat
                 bg-[length:50px_50px]"
                ></div>
              </div>
            </div>
          </div>
          <div className=" w-14 h-16 relative  flex justify-center items-center gap-2 overflow-hidden ">
            <div className="w-16 h-16 rounded-full  bg-white absolute   flex justify-center items-center">
              <div className="w-[50px] h-[50px] rounded-full bg-[#6F4628] flex justify-center items-center ">
                <div
                  className=" w-[50px] h-[50px]  rounded-full overflow-hidden   bg-profile-face-nobg bg-[center] bg-no-repeat
                 bg-[length:50px_50px]"
                ></div>
              </div>
            </div>
          </div>
          <div className=" w-14 h-16 relative  flex justify-center items-center gap-2 overflow-hidden ">
            <div className="w-16 h-16 rounded-full  bg-white absolute   flex justify-center items-center">
              <div className="w-[50px] h-[50px] rounded-full bg-[#D9516B] flex justify-center items-center ">
                <div
                  className=" w-[50px] h-[50px]  rounded-full overflow-hidden   bg-profile-face-nobg bg-[center] bg-no-repeat
                 bg-[length:50px_50px]"
                ></div>
              </div>
            </div>
          </div>
          <div className=" w-14 h-16 relative  flex justify-center items-center gap-2 overflow-hidden ">
            <div className="w-16 h-16 rounded-full  bg-white absolute   flex justify-center items-center">
              <div className="w-[50px] h-[50px] rounded-full bg-[#94CFE2] flex justify-center items-center ">
                <div
                  className=" w-[50px] h-[50px]  rounded-full overflow-hidden   bg-profile-face-nobg bg-[center] bg-no-repeat
                 bg-[length:50px_50px]"
                ></div>
              </div>
            </div>
          </div>
          <div className=" w-16 h-16 relative  flex justify-center items-center gap-2 overflow-hidden">
            <div className="w-16 h-16 rounded-full  bg-white absolute  right-1 flex justify-center items-center">
              <div className="w-[50px] h-[50px] rounded-full bg-[#CEC7C7] flex justify-center items-center ">
                <div
                  className=" w-[50px] h-[50px]  rounded-full overflow-hidden   bg-profile-face-nobg bg-[center] bg-no-repeat
                 bg-[length:50px_50px]"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NearbyFriendsSection;
