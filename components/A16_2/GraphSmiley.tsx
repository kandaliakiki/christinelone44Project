import { Annoyed, Smile, Frown, Meh } from "lucide-react";
import React from "react";

const GraphSmiley = () => {
  return (
    <div>
      <div className="w-7 h-7 rounded-full bg-white absolute bottom-2 left-[18px] flex justify-center items-center">
        <Meh size={18} color="#3b82f6 "></Meh>
      </div>
      <div className="w-7 h-7 rounded-full bg-white absolute bottom-[66px] left-[75px] flex justify-center items-center">
        <Annoyed size={18} color="#3b82f6 "></Annoyed>
      </div>
      <div className="w-7 h-7 rounded-full bg-white absolute -top-8 left-[130px] flex justify-center items-center">
        <Smile size={18} color="#3b82f6 "></Smile>
      </div>
      <div className="w-7 h-7 rounded-full bg-white absolute bottom-10 left-[185px] flex justify-center items-center">
        <Frown size={18} color="#3b82f6 "></Frown>
      </div>
      <div className="w-7 h-7 rounded-full bg-white absolute bottom-2 right-[135px] flex justify-center items-center">
        <Meh size={18} color="#3b82f6 "></Meh>
      </div>
      <div className="w-7 h-7 rounded-full bg-white absolute -top-8 right-[75px]     flex justify-center items-center">
        <Smile size={18} color="#3b82f6 "></Smile>
      </div>
      <div className="w-7 h-7 rounded-full bg-white absolute bottom-10 right-[17px] flex justify-center items-center">
        <Frown size={18} color="#3b82f6 "></Frown>
      </div>
    </div>
  );
};

export default GraphSmiley;
