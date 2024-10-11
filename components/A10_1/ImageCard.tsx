import { Heart } from "lucide-react";
import React from "react";

interface ImageCardProps {
  name: string;
  age: number;
  bgImage: string;
  bgHeight: string;
  imgHeight: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  name,
  age,
  bgImage,
  bgHeight,
  imgHeight,
}) => {
  return (
    <div
      className={`${bgImage} ${bgHeight} ${imgHeight} w-full inline-block  bg-black bg-[left_-3rem_top_0px]   rounded-[2rem] `}
    >
      <div className="flex flex-col w-full h-full relative ">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent from-55% to-[#0E0D0D] to-99%"></div>
        <div className="flex justify-end w-full">
          <div className="w-8 h-8 mt-3 backdrop-blur-sm mr-2 rounded-xl flex justify-center items-center bg-black/10">
            <Heart color="rgba(255, 255, 255, 0.5)" size={20}></Heart>
          </div>
        </div>
        <div className="absolute left-0 bottom-0 ml-2 mb-4 ">
          <p className="font-geometria">{age}</p>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
