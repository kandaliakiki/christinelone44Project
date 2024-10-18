import React from "react";

const SplitBillsUsers = () => {
  return (
    <div className="flex mt-2 ">
      <div className=" w-10 h-10 relative  flex justify-center items-center gap-2 overflow-hidden">
        <div className="w-10 h-10 rounded-full border bg-transparent absolute  left-1 flex justify-center items-center">
          <div className="w-[24px] h-[24px] rounded-full bg-[#F04F4D] flex justify-center items-center ">
            <div
              className=" w-[24px] h-[24px]  rounded-full overflow-hidden   bg-profile-face-nobg bg-[center] bg-no-repeat
                 bg-[length:24px_24px]"
            ></div>
          </div>
        </div>
      </div>
      <div className=" w-8 h-10 relative  flex justify-center items-center gap-2 overflow-hidden ">
        <div className="w-10 h-10 rounded-full border bg-transparent absolute   flex justify-center items-center">
          <div className="w-[24px] h-[24px] rounded-full bg-[#F9C147] flex justify-center items-center ">
            <div
              className=" w-[24px] h-[24px]  rounded-full overflow-hidden   bg-profile-face-nobg bg-[center] bg-no-repeat
                 bg-[length:24px_24px]"
            ></div>
          </div>
        </div>
      </div>
      <div className=" w-8 h-10 relative  flex justify-center items-center gap-2 overflow-hidden ">
        <div className="w-10 h-10 rounded-full border bg-transparent absolute   flex justify-center items-center">
          <div className="w-[24px] h-[24px] rounded-full bg-[#3587AF] flex justify-center items-center ">
            <div
              className=" w-[24px] h-[24px]  rounded-full overflow-hidden   bg-profile-face-nobg bg-[center] bg-no-repeat
                 bg-[length:24px_24px]"
            ></div>
          </div>
        </div>
      </div>
      <div className=" w-10 h-10 relative  flex justify-center items-center gap-2 overflow-hidden">
        <div className="w-10 h-10 rounded-full border bg-transparent absolute  right-1 flex justify-center items-center">
          <div className="w-[24px] h-[24px] rounded-full bg-[#EDA0A8] flex justify-center items-center ">
            <div
              className=" w-[24px] h-[24px]  rounded-full overflow-hidden   bg-profile-face-nobg bg-[center] bg-no-repeat
                 bg-[length:24px_24px]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitBillsUsers;
