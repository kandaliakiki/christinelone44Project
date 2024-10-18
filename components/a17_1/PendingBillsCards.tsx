import { Clock, Plus } from "lucide-react";
import React from "react";
import MotifAbstractShape from "./MotifAbstractShape";

const PendingBillsCards = () => {
  return (
    <div className="w-full overflow-x-scroll scrollbar-hide ">
      <div className="w-max pl-5 flex overflow-visible  py-6  ">
        <div className="rounded-3xl w-56  relative motif-abstract-container p-4 ">
          <div className="absolute w-max -top-28 -right-28 -rotate-45">
            <MotifAbstractShape color="#6b7280" opacity={0.2} strokeWidth={3} />
          </div>
          <p className="text-white  ">Birthday Party!</p>
          <p className="text-xl text-white font-bold mt-1">$1200.00</p>
          <p className="text-white/50 text-xs mt-4">Split With</p>
          <div className="flex items-center pl-2 justify-between gap-2 rounded-full  bg-white/20 backdrop-blur-sm mt-2">
            <div className="flex -space-x-3">
              <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center">
                <div className="w-[32px] h-[32px] rounded-full bg-[#EA5350] flex justify-center items-center ">
                  <div
                    className=" w-[32px] h-[32px]  rounded-full overflow-hidden   bg-profile-face-nobg bg-[center] bg-no-repeat
                 bg-[length:32px_32px]"
                  ></div>
                </div>
              </div>
              <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center">
                <div className="w-[32px] h-[32px] rounded-full bg-[#DF961F] flex justify-center items-center ">
                  <div
                    className=" w-[32px] h-[32px]  rounded-full overflow-hidden   bg-profile-face-nobg bg-[center] bg-no-repeat
                 bg-[length:32px_32px]"
                  ></div>
                </div>
              </div>
              <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center">
                <div className="w-[32px] h-[32px] rounded-full bg-[#176C94] flex justify-center items-center ">
                  <div
                    className=" w-[32px] h-[32px]  rounded-full overflow-hidden   bg-profile-face-nobg bg-[center] bg-no-repeat
                 bg-[length:32px_32px]"
                  ></div>
                </div>
              </div>
              <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center">
                <div className="w-[32px] h-[32px] rounded-full bg-[#E599A1] flex justify-center items-center ">
                  <div
                    className=" w-[32px] h-[32px]  rounded-full overflow-hidden   bg-profile-face-nobg bg-[center] bg-no-repeat
                 bg-[length:32px_32px]"
                  ></div>
                </div>
              </div>
            </div>

            <div className="w-11 h-11 rounded-full border border-white  flex items-center justify-center">
              <Plus size={24} color="white"></Plus>
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            <div className="bg-white rounded-xl h-10 w-full flex items-center justify-center ">
              <p className=" font-bold">Split Now</p>
            </div>
            <div className="bg-white/20 rounded-xl  px-4 flex items-center justify-center">
              <Clock size={20} color="white" opacity={0.5}></Clock>
            </div>
          </div>
        </div>
        <div className="rounded-3xl w-56 -translate-y-1 relative outline outline-white overflow-hidden bg-[#CBC4C4]  bg p-4 -rotate-6">
          <div className="absolute w-max -top-28 -right-28 -rotate-45">
            <MotifAbstractShape color="#ffffff" opacity={0.1} />
          </div>
          <p className=" font-bold ">Christmas Celebration!</p>
          <p className="text-xl  font-extrabold mt-1">$100.00</p>
          <p className="text-black/80  text-xs mt-4">Split With</p>
          <div className="flex items-center pl-2 justify-between gap-2 rounded-full  bg-white/20 backdrop-blur-sm mt-2">
            <div className="flex -space-x-3">
              <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center">
                <div className="w-[32px] h-[32px] rounded-full bg-[#EA5350] flex justify-center items-center ">
                  <div
                    className=" w-[32px] h-[32px]  rounded-full overflow-hidden   bg-profile-face-nobg bg-[center] bg-no-repeat
                 bg-[length:32px_32px]"
                  ></div>
                </div>
              </div>
              <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center">
                <div className="w-[32px] h-[32px] rounded-full bg-[#DF961F] flex justify-center items-center ">
                  <div
                    className=" w-[32px] h-[32px]  rounded-full overflow-hidden   bg-profile-face-nobg bg-[center] bg-no-repeat
                 bg-[length:32px_32px]"
                  ></div>
                </div>
              </div>
              <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center">
                <div className="w-[32px] h-[32px] rounded-full bg-[#176C94] flex justify-center items-center ">
                  <div
                    className=" w-[32px] h-[32px]  rounded-full overflow-hidden   bg-profile-face-nobg bg-[center] bg-no-repeat
                 bg-[length:32px_32px]"
                  ></div>
                </div>
              </div>
              <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center">
                <div className="w-[32px] h-[32px] rounded-full bg-[#E599A1] flex justify-center items-center ">
                  <div
                    className=" w-[32px] h-[32px]  rounded-full overflow-hidden   bg-profile-face-nobg bg-[center] bg-no-repeat
                 bg-[length:32px_32px]"
                  ></div>
                </div>
              </div>
            </div>

            <div className="w-11 h-11 rounded-full border border-white  flex items-center justify-center">
              <Plus size={24} color="white"></Plus>
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            <div className="bg-white/50 rounded-xl h-10 w-full flex items-center justify-center ">
              <p className=" font-bold">Split Now</p>
            </div>
            <div className="bg-white/20 rounded-xl  px-4 flex items-center justify-center">
              <Clock size={20} color="white" opacity={0.5}></Clock>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingBillsCards;
