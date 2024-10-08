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
        <div className="w-full h-full relative  flex flex-col justify-end items-center">
          <div className="mb-32 relative">
            <svg
              width="271"
              height="240"
              viewBox="0 0 271 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="gradient2"
                  x1="0%"
                  y1="100%"
                  x2="100%"
                  y2="20%"
                >
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="20%" stopColor="#ffffff" />
                  <stop offset="90%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
              <path
                d="M270.377 60.5048C246.641 28.5789 211.195 7.38946 171.837 1.59801C132.478 -4.19344 92.4308 5.88748 60.5048 29.6231C28.5789 53.3587 7.38944 88.8047 1.59798 128.163C-4.19347 167.522 5.88745 207.569 29.623 239.495L33.8848 236.327C10.9895 205.531 1.26545 166.902 6.85187 128.936C12.4383 90.9712 32.8775 56.7801 63.6732 33.8848C94.4689 10.9895 133.098 1.26548 171.064 6.85189C209.029 12.4383 243.22 32.8776 266.115 63.6732L270.377 60.5048Z"
                fill="url(#gradient2)"
              />
            </svg>
            <div className="absolute -top-4 right-20 w-10 h-10 rounded-full bg-transparent border-2 border-white flex justify-center items-center">
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
            <div className="absolute top-[9px] right-14  w-3 h-3 ml-3 rounded-full bg-white"></div>
          </div>
          <p className="text-white text-5xl ">368 k</p>
          <p className="text-white mt-2 ">Satisfied users</p>
          <div className="flex items-center place-self-start mb-10 ml-10 mt-5">
            <div className="w-10 h-10 rounded-full bg-transparent border-2 border-white flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
            <div className="w-2 h-2 ml-3 rounded-full bg-white"></div>
            <div className="w-2 h-2 ml-6 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
