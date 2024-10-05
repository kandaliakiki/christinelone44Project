import React from "react";

const HealthControlDosage = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2 items-end">
        <div className="flex flex-col items-center justify-center">
          <p className="text-black">15%</p>
          <div className="h-12 w-8 bg-white rounded-t-full rounded-b-full border-4 border-[#ECA4A0] border-opacity-80"></div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-black">10%</p>
          <div className="h-8 w-8 bg-black rounded-t-full rounded-b-full border-4 border-[#ECA4A0] border-opacity-80"></div>
        </div>
      </div>
      <div className="flex gap-2 items-end">
        <div className="flex flex-col items-center justify-center">
          <p className="text-black">15%</p>
          <div className="h-12 w-8 bg-white rounded-t-full rounded-b-full border-4 border-[#ECA4A0] border-opacity-80"></div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-black">30%</p>
          <div className="h-16 w-8 bg-black rounded-t-full rounded-b-full border-4 border-[#ECA4A0] border-opacity-80"></div>
        </div>
      </div>
      <div className="flex gap-2 items-end">
        <div className="flex flex-col items-center justify-center">
          <p className="text-black">70%</p>
          <div className="h-28 w-8 bg-white rounded-t-full rounded-b-full border-4 border-[#ECA4A0] border-opacity-80"></div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-black">60%</p>
          <div className="h-24 w-8 bg-black rounded-t-full rounded-b-full border-4 border-[#ECA4A0] border-opacity-80"></div>
        </div>
      </div>
    </div>
  );
};

export default HealthControlDosage;
