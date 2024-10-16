import {
  House,
  Music2,
  UsersRound,
  CalendarCheck,
  Settings,
} from "lucide-react";
import React from "react";

const BottomLayout = () => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
      <div className="bg-white w-full p-1 pr-5 rounded-full flex gap-8 items-center">
        <div className="flex items-center  gap-1 rounded-full p-3 bg-[#CAE5FF]">
          <House color="black" fill="black" size={18}></House>
          <p className="text-sm">Home</p>
        </div>
        <Music2 size={18} color="black" opacity={0.3}></Music2>
        <UsersRound size={18} color="black" opacity={0.3}></UsersRound>
        <CalendarCheck size={18} color="black" opacity={0.3}></CalendarCheck>
        <Settings size={18} color="black" opacity={0.3}></Settings>
      </div>
    </div>
  );
};

export default BottomLayout;
