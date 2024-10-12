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
      className={`relative flex  font-graphie  flex-col overflow-auto h-screen bg-black px-2 py-14 `} // adjust bg image size and position here
    >
      <div className="z-20">
        <p className="text-white text-3xl text-center">Online chat</p>
      </div>
      <div className=" ">{children}</div>
    </main>
  );
}
