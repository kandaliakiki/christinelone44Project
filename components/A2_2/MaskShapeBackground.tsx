import Image from "next/image";
import React from "react";
const MaskShapeBackground: React.FC = () => {
  return (
    <div className="  flex  items-center justify-center z-10 h-full fixed w-full ml-1 mt-10">
      <div
        className={`h-full w-[60%]  ml-2  left-1  `}
        style={{
          maskImage: `url(/assets/mask/A2/shapemask2.svg)`,
          WebkitMaskImage: `url(/assets/mask/A2/shapemask2.svg)`,
          maskSize: "100% ",
          WebkitMaskSize: "100% ",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      >
        <div className={`absolute bottom-0   w-full h-full opacity-40 `}>
          <Image
            alt="shape"
            src="/assets/a2-background_2.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div
        className={`h-full w-[20%]     -ml-3  `}
        style={{
          maskImage: `url(/assets/mask/A2/shapemask4.svg)`,
          WebkitMaskImage: `url(/assets/mask/A2/shapemask4.svg)`,
          maskSize: "87% 87%",
          WebkitMaskSize: "87% 87%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      >
        <div className={`absolute bottom-0 left-5    w-full h-full opacity-70`}>
          <Image
            alt="shape"
            src="/assets/a2-background_2.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div
        className={`h-full w-[20%]   bg-black -ml-7   `}
        style={{
          maskImage: `url(/assets/mask/A2/shapemask4.svg)`,
          WebkitMaskImage: `url(/assets/mask/A2/shapemask4.svg)`,
          maskSize: "87% 87%",
          WebkitMaskSize: "87% 87%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      >
        <div className={`absolute bottom-0 left-5    w-full h-full opacity-70`}>
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
