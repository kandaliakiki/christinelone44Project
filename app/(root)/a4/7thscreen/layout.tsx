import TopLayout from "@/components/A4_7/TopLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex flex-col font-montserrat overflow-auto min-h-screen bg-a4-background-1  bg-center  bg-gray-theme-a1  
        `} // adjust bg image size and position here
    >
      <div className="fixed    inset-0 z-10 bg-opacity-65 bg-black backdrop-blur-sm"></div>
      <div className="z-20">
        <TopLayout></TopLayout>
      </div>
      <div className=" z-20 flex-1  flex flex-col">{children}</div>
    </main>
  );
}
