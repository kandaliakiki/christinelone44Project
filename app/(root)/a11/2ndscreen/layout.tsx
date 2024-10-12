import TopLayout from "@/components/A10_1/TopLayout";
import { ChevronLeft, Plus } from "lucide-react";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex font-formaDJRMicro  flex-col overflow-auto h-screen bg-girl2-background-dateapp bg-[length:850px_850px] bg-[left_-9rem_top_0px] px-5 py-14 `} // adjust bg image size and position here
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent from-55% to-[#13231D] to-99%"></div>
      <div className="z-20 w-full flex justify-between items-center">
        <div className="flex">
          <div className="relative w-12 h-12    rounded-full overflow-hidden   bg-profile-face bg-[center] bg-no-repeat bg-[length:50px_50px]"></div>
          <div
            className=" -z-10 -ml-3 w-12 h-12 rounded-full
           flex justify-center items-center bg-white/30 backdrop-blur-lg "
          >
            <Plus size={30} color="white"></Plus>
          </div>
        </div>
        <div
          className=" -z-10 -ml-3 w-12 h-12 rounded-full relative
           flex justify-center items-center bg-white/30 backdrop-blur-lg "
        >
          <Image
            alt="conversation icon"
            src="/assets/conversation.svg"
            width={24}
            height={24}
          ></Image>
          <div className="w-4 h-4 rounded-full -top-1 right-0 bg-[#ff4B97] absolute flex justify-center items-center ">
            <p className="text-white text-xs">3</p>
          </div>
        </div>
      </div>
      <div className="">{children}</div>
    </main>
  );
}
