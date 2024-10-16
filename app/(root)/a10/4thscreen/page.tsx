import ProfileCard from "@/components/A10_4/ProfileCard";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="relative  mt-5 overflow-hidden flex justify-center   w-full   space-x-4 ">
        <div className="w-max flex gap-7 top-0 items-end bg-red-400 ">
          <ProfileCard isActive={false} position="left" />
          <ProfileCard isActive={true} />
          <ProfileCard isActive={false} position="right" />
        </div>
      </div>
      <div className="flex  w-full mt-16 px-16 text-sm justify-center items-center text-white font-geometria text-center">
        <p>Every great person should be met with another </p>
      </div>
    </div>
  );
};

export default page;
