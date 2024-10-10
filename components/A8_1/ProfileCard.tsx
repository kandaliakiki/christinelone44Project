import Image from "next/image";
import React from "react";

interface ProfileCardProps {
  isActive: boolean;
  position?: "left" | "right";
}

const ProfileCard: React.FC<ProfileCardProps> = ({ isActive, position }) => {
  return (
    <div
      className={`
        ${isActive ? `h-[32rem] w-[17rem]` : `h-[29rem] w-[17rem]`}
        ${
          !isActive
            ? `${position === "left" ? `-rotate-2` : `rotate-2`} opacity-50`
            : ``
        }  bg-white rounded-3xl p-[0.1rem] relative`}
    >
      <div className="h-full w-full bg-black bg-[left_-6rem_top_0px] bg-[length:510px_510px] bg-girl1-background-dateapp rounded-3xl"></div>
      <div className="absolute  left-0  bottom-0 bg-white rounded-3xl w-full px-5 py-3 ">
        <div className="flex  items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-[#FE5145]"></div>
          <p className="text-black text-md font-medium mt-1">Offline</p>
        </div>
        <h1 className="text-3xl font-medium text-black/30">
          <span className=" text-4xl text-black">Batari</span> 19
        </h1>
        <h2 className=" tracking-tighter font-medium text-black/30">
          Pacitan Regency, Indonesia
        </h2>
        <div className="flex gap-1 mt-2">
          <div className="w-11 h-11 rounded-full bg-transparent border-2 border-black/10 flex justify-center items-center">
            <Image
              alt="map icon"
              src="/assets/map_a8.svg"
              width={20}
              height={20}
            ></Image>
          </div>
          <div className="w-11 h-11 rounded-full bg-transparent border-2 border-black/10 flex justify-center items-center">
            <Image
              alt="call icon"
              src="/assets/call.svg"
              width={24}
              height={24}
            ></Image>
          </div>
          <div className=" h-11 rounded-full bg-black border-2 border-black/10 px-4 flex gap-2 justify-center items-center">
            <Image
              alt="chat icon"
              src="/assets/conversation.svg"
              width={20}
              height={20}
            ></Image>
            <p className="text-white ">Chat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
