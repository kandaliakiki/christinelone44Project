import DetailLayout from "@/components/A1_3/DetailLayout";
import LeftLayout from "@/components/A1_3/LeftLayout";
import RightLayout from "@/components/A1_3/RightLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex flex-col overflow-auto min-h-screen bg-[#E2E2E2]  `} // adjust bg image size and position here
    >
      <div className="absolute w-full h-screen z-10 flex flex-col justify-start items-center ">
        <div className="w-full h-1/2 "></div>
        <div className="w-full h-1/2 ml-12 flex justify-start items-center">
          <DetailLayout></DetailLayout>
        </div>
      </div>
      <div
        className="fixed    inset-0 z-20  bg-hero-a1-background-3 bg-no-repeat    
        bg-[right_-14rem_top_2rem]  bg-[length:840px_840px] "
      ></div>
      <div className="fixed left-[-6%] top-20 transform z-30  drop-shadow-[0_3px_2px_rgba(0,0,0,0.5)]">
        <LeftLayout></LeftLayout>
      </div>

      <div className="fixed  -right-2 bottom-0 transform z-30  drop-shadow-[0_3px_2px_rgba(0,0,0,0.5)]">
        <RightLayout></RightLayout>
      </div>
      <div className=" z-50">{children}</div>
    </main>
  );
}
