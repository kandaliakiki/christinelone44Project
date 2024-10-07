import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="h-full flex flex-1 text-white px-14 items-center ">
      <div className="flex flex-col gap-12">
        <div className="text-9xl tracking-tighter flex flex-col -space-y-5">
          <p>Take</p>
          <p className="text-[#DD5049]">control</p>
          <p>of your</p>
          <p>health</p>
        </div>
        <div className=" h-[2px] bg-gradient-to-r from-white to-transparent rounded-full"></div>
        <p className="leading-tight  text-lg font-thin pr-5 ">
          NS arms you with the tools to understand <br></br>what makes your body
          tick and help you <br></br>make changes that work for you.
        </p>
        <div className="relative ">
          <svg
            width="420"
            height="76"
            viewBox="0 0 545 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="90%" stopColor="#000000" />
              </linearGradient>
            </defs>
            <path
              d="M201.866 75.5H37.75C16.9013 75.5 0 58.5987 0 37.75C0 16.9013 16.9012 0 37.75 0H201.2C212.382 0 222.615 6.28055 227.678 16.25L233.801 28.3071C235.108 30.8795 237.748 32.5 240.633 32.5C243.535 32.5 246.188 30.8608 247.486 28.2656L253.497 16.25C258.479 6.29061 268.659 0 279.795 0H507.25C528.099 0 545 16.9013 545 37.75C545 58.5987 528.099 75.5 507.25 75.5H279.128C268.367 75.5 258.495 69.5298 253.497 60L247.567 48.6936C246.215 46.1152 243.544 44.5 240.633 44.5C237.739 44.5 235.081 46.096 233.721 48.6504L227.678 60C222.599 69.5395 212.673 75.5 201.866 75.5Z"
              fill="url(#gradient1)"
            />
          </svg>
          <div className=" flex items-center absolute top-[14px] left-2">
            <div
              className={`w-12 h-12 rounded-full bg-gradient-to-br from-black to-transparent flex justify-center items-center`}
            >
              <div
                className={`w-[44px] h-[44px] bg-white bg-center bg-contain rounded-full  inset-2 flex justify-center items-center`}
              >
                <div className="w-8 h-8 bg-black rounded-full flex justify-center items-center">
                  <Image
                    alt="inject"
                    src="/assets/inject-white.svg"
                    width={20}
                    height={20}
                  ></Image>
                </div>
              </div>
            </div>
            <p className="ml-3 uppercase text-black text-xl font-semibold tracking-tighter">
              Insulin
            </p>
            <p className="ml-14 uppercase text-white text-xl tracking-[-0.05rem]">
              Start with us now
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-1/3 ml-10 h-[75vh]   bg-glucose-measuring bg-contain   bg-[left_-2px_top]  text-white"
        style={{
          clipPath:
            "path('M273 1H61C27.8629 1 1 27.8629 1 61V675C1 708.137 27.8629 735 61 735H273C306.137 735 333 708.137 333 675V61C333 27.8629 306.137 1 273 1Z')",
        }}
      ></div>
      <div
        className="w-1/3 ml-10 h-[75vh]    text-white"
        style={{
          clipPath:
            "path('M273 1H61C27.8629 1 1 27.8629 1 61V675C1 708.137 27.8629 735 61 735H273C306.137 735 333 708.137 333 675V61C333 27.8629 306.137 1 273 1Z')",
        }}
      >
        <div className="absolute left-0 bottom-0 w-full h-full">
          <Image
            alt="shape"
            src="/assets/a4-background-6.png"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
