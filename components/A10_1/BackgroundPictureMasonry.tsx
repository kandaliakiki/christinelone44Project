import { backgroundImageCardNames } from "@/constant";
import { Heart } from "lucide-react";
import React from "react";
import ImageCard from "./ImageCard";

const BackgroundPictureMasonry = () => {
  return (
    <div className="columns-3 h-full  gap-2 p-2 text-white ">
      {backgroundImageCardNames.map((item, index) => (
        <ImageCard
          key={index}
          bgImage={
            index % 2 === 0
              ? "bg-girl2-background-dateapp"
              : "bg-girl1-background-dateapp"
          }
          bgHeight={index % 2 === 0 ? "h-[18rem]" : "h-[14rem]"}
          imgHeight={
            index % 2 === 0
              ? "bg-[length:290px_290px]"
              : "bg-[length:250px_250px]"
          }
          name={item.name}
          age={item.age}
        />
      ))}
    </div>
  );
};

export default BackgroundPictureMasonry;
