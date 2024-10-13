import { ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex  font-gilroy flex-col overflow-auto min-h-screen bg-gradient-to-tl from-[#0A0803] to-[#D0FB95] to-[700%]  px-7 pt-10 `} // adjust bg image size and position here
    >
      <div className=" ">{children}</div>
    </main>
  );
}
