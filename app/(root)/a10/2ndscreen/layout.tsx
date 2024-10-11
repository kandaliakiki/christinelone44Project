import TopLayout from "@/components/A10_1/TopLayout";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex  font-neueMachina  flex-col overflow-auto h-screen bg-girl2-background-dateapp bg-[length:850px_850px] bg-[left_-9rem_top_0px] px-5 py-14 `} // adjust bg image size and position here
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent from-55% to-[#13231D] to-99%"></div>
      <div className="z-20">
        <div className=" w-12 h-12 rounded-2xl flex justify-center items-center bg-black/40 backdrop-blur-md backdrop-brightness-125">
          <ChevronLeft size={35} color="white"></ChevronLeft>
        </div>
      </div>
      <div className=" ">{children}</div>
    </main>
  );
}
