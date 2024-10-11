import BackgroundPictureMasonry from "@/components/A10_1/BackgroundPictureMasonry";
import BackgroundText from "@/components/A10_4/BackgroundText";
import TopLayout from "@/components/A10_4/TopLayout";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex  font-neueMachina  flex-col overflow-hidden h-screen bg-[#0E0D0D]  py-14 
        bg-gradient-to-bl from-[#23120C] from-1% via-black/75 via-50%   to-[#23120C] to-95%`} // adjust bg image size and position here
    >
      <div className="z-20">
        <TopLayout />
      </div>
      <div>
        <div className="absolute -top-0 left-0 overflow-y-hidden  h-screen w-screen  z-10">
          <BackgroundText />
        </div>
      </div>
      <div className="z-30 ">{children}</div>
    </main>
  );
}
