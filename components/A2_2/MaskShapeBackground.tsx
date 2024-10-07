import Image from "next/image";
import React from "react";

const MaskShapeBackground: React.FC = () => {
  return (
    <div className="flex items-center justify-center z-10 h-full fixed w-full ml-1 mt-10">
      <div
        className="h-full w-[60%] ml-2 left-1"
        style={{
          clipPath:
            "path('M405 1H81C36.8172 1 1 36.8172 1 81V861C1 905.183 36.8172 941 81 941H405C449.183 941 485 905.183 485 861V81C485 36.8172 449.183 1 405 1Z')",
        }}
      >
        <div className="absolute bottom-0 w-full h-full opacity-40">
          <Image
            alt="shape"
            src="/assets/a2-background_2.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div
        className="h-full w-[20%] -ml-3"
        style={{
          clipPath:
            "path('M405 1H81C36.8172 1 1 36.8172 1 81V861C1 905.183 36.8172 941 81 941H405C449.183 941 485 905.183 485 861V81C485 36.8172 449.183 1 405 1Z')",
        }}
      >
        <div className="absolute bottom-0 left-5 w-full h-full opacity-70">
          <Image
            alt="shape"
            src="/assets/a2-background_2.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div
        className="h-full w-[20%] bg-black -ml-7"
        style={{
          clipPath:
            "path('M405 1H81C36.8172 1 1 36.8172 1 81V861C1 905.183 36.8172 941 81 941H405C449.183 941 485 905.183 485 861V81C485 36.8172 449.183 1 405 1Z')",
        }}
      >
        <div className="absolute bottom-0 left-5 w-full h-full opacity-70">
          <Image
            alt="shape"
            src="/assets/a2-background_2.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MaskShapeBackground;
