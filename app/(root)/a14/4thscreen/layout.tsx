import TopLayout from "@/components/A14_1/TopLayout";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex  font-dmSans  flex-col overflow-auto h-screen bg-girl1-background-dateapp bg-[length:850px_850px] bg-[left_-9rem_top_0px]  py-10 `} // adjust bg image size and position here
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent from-55% to-[#0a0803] to-[120%]"></div>
      <div className="z-20">
        <TopLayout></TopLayout>
      </div>
      <div className=" ">{children}</div>
    </main>
  );
}
