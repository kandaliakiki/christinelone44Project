import Image from "next/image";
import React from "react";

const SocialMediaSection = () => {
  return (
    <div className=" custom-shape">
      <div className="social-media-shape">
        <div className="content-custom-shape mt-1">
          <div className="flex w-full justify-center gap-3 mb-1 ">
            <div
              className="h-11 w-11 rounded-lg flex justify-center items-center
             bg-white drop-shadow-[0_4px_2px_rgba(168,162,158,0.5)] cursor-pointer"
            >
              <Image
                alt="x logo"
                src="/assets/X.svg"
                width={24}
                height={24}
              ></Image>
            </div>
            <div
              className="h-11 w-11 rounded-lg flex justify-center items-center
             bg-white drop-shadow-[0_4px_2px_rgba(168,162,158,0.5)] cursor-pointer"
            >
              <Image
                alt="x logo"
                src="/assets/instagram.svg"
                width={24}
                height={24}
              ></Image>
            </div>
          </div>
          <p className="text-right mr-2 leading-none text-sm mt-1">
            We are on <br></br> Social Media
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaSection;
