import TopLayout from "@/components/A14_1/TopLayout";
import { EllipsisIcon, X } from "lucide-react";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex  font-nunitoSans  flex-col overflow-auto h-screen bg-girl2-background-dateapp bg-[length:850px_850px] bg-[left_-9rem_top_0px]  py-5   `} // adjust bg image size and position here
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent from-45% to-[#0a0803] to-[110%]"></div>
      <div className="w-full  flex justify-end px-5">
        <div className=" w-10 h-10 rounded-full flex justify-center items-center bg-black/15 backdrop-blur-lg ">
          <X size={20} color="white"></X>
        </div>
      </div>
      <div className=" ">{children}</div>
    </main>
  );
}
