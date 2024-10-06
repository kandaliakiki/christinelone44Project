import BottomControls from "@/components/A4_4/BottomControls";
import GraphBackground from "@/components/A4_4/GraphBackground";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex flex-col overflow-auto min-h-screen bg-black px-5 font-montserrat `} // adjust bg image size and position here
    >
      <div className="flex justify-between  mt-10 text-white">
        <h1 className="text-5xl ">Today</h1>
        <div className="flex gap-2">
          <div className="w-14 h-14 -mr-4 rounded-full border-white border-2 border-opacity-50 flex items-center justify-center">
            <Image
              alt="more"
              src="/assets/edit.svg"
              width={28}
              height={28}
            ></Image>
          </div>
          <div className="z-10 w-14 h-14 bg-[#3F3F3F] rounded-full flex items-center justify-center">
            <Image
              alt="menu-icon"
              src="/assets/menu-a4.svg"
              width={24}
              height={24}
            ></Image>
          </div>
        </div>
      </div>
      <div className="mt-20 text-white  tracking-tighter">
        <p className="text-4xl  font-light">Most Recent</p>
        <p className="text-7xl font-semibold mt-3">185</p>
        <p className="text-xl text-gray-400 font-light ml-2">mg/dL</p>
      </div>

      <div className=" z-20">{children}</div>
      <BottomControls />
    </main>
  );
}
