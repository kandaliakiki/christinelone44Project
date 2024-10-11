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
      className={`relative flex  font-neueMachina  flex-col overflow-hidden h-screen bg-[#0E0D0D] px-5 py-14 `} // adjust bg image size and position here
    >
      <div className="z-20">
        <TopLayout />
      </div>
      <div className=" ">{children}</div>
    </main>
  );
}
