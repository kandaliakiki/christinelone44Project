import Image from "next/image";
import React from "react";

interface HealthControlCardProps {
  children: React.ReactNode;
  cardImage: string;
  title: string;
  subtitle: string;
  bgColorClass: string;
}

const HealthControlCard: React.FC<HealthControlCardProps> = ({
  children,
  cardImage,
  title,
  subtitle,
  bgColorClass,
}) => {
  return (
    <div className={`${bgColorClass} rounded-[3rem] w-full py-5 px-2`}>
      <div className="flex items-center gap-3">
        <div
          className={`w-20 h-20 rounded-full bg-gradient-to-br ${
            bgColorClass === "bg-white" ? "from-red-500" : "from-white"
          } to-transparent flex justify-center items-center`}
        >
          <div
            className={`w-[76px] h-[76px] ${bgColorClass} bg-center bg-contain rounded-full  inset-2 flex justify-center items-center`}
          >
            <div className="w-14 h-14 bg-white rounded-full flex justify-center items-center">
              <Image
                alt="inject"
                src={cardImage}
                width={30}
                height={30}
              ></Image>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-xl">{title}</p>
          <p className="text-lg font-thin">{subtitle}</p>
        </div>
        <div className="w-16 h-16 rounded-full border-white border-2 border-opacity-50 flex items-center justify-center">
          <Image
            alt="more"
            src="/assets/more.svg"
            width={40}
            height={40}
          ></Image>
        </div>
      </div>
      <div className="px-5">{children}</div>
    </div>
  );
};

export default HealthControlCard;
