import BottomLayout from "@/components/A16_2/BottomLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex  font-lato  flex-col overflow-auto h-screen bg-[#CAE5FF] pt-10 `} // adjust bg image size and position here
    >
      <div className=" h-full ">{children}</div>
      <BottomLayout></BottomLayout>
    </main>
  );
}
