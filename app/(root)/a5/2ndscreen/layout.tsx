import BottomLayout from "@/components/A5_1/BottomLayout";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex  font-outfit flex-col overflow-x-hidden min-h-screen bg-cookie-background-a5
        bg-[right_-15rem_top_0px] bg-[length:1000px_850px] px-5 py-10  `} // adjust bg image size and position here
    >
      <div className="absolute top-10 right-10 ">
        <div className="w-[3.9rem] h-16  relative bg-white  rounded-xl flex flex-col items-center justify-center">
          <div className="absolute top-0 -translate-y-1/2 w-9 h-9 bg-black rounded-full flex justify-center items-center">
            <Image
              alt="bag-icon"
              src="/assets/bag-icon.svg"
              width={20}
              height={20}
            ></Image>
            <div className="w-2 h-2 rounded-full top-[2px] right-0 bg-[#E38035] absolute"></div>
          </div>
          <p className="font-bold text-xl mt-2">6</p>
          <p className="text-xs font-semibold -mt-1">Products</p>
        </div>
      </div>

      <div className=" z-20">{children}</div>
      <div className="absolute bottom-20 right-10 ">
        <div className="w-16 h-full   bg-white py-2   gap-2 rounded-xl flex flex-col items-center justify-center">
          <div className=" top-0 w-9 h-9 bg-black rounded-full flex justify-center items-center">
            <Image
              alt="box-icon"
              src="/assets/box.svg"
              width={20}
              height={20}
            ></Image>
          </div>
          <div className="w-2 h-2 rounded-full  bg-[#E38035] "></div>
          <p className="font-bold text-center leading-none text-sm  ">
            Add to Order
          </p>
        </div>
      </div>
    </main>
  );
}
