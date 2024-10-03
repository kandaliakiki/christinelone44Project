import TopLayout from "@/components/A2_1/TopLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex flex-col overflow-auto min-h-screen bg-[#E2E2E2]  `} // adjust bg image size and position here
    >
      <div
        className="fixed    inset-0 z-10  bg-a2-background-1 bg-no-repeat  opacity-80  
        bg-center  bg-cover"
      ></div>
      <div className="z-10">
        <TopLayout></TopLayout>
      </div>
      <div className=" z-20">{children}</div>
    </main>
  );
}
