import TopLayout from "@/components/a17_1/TopLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex  font-mulish  flex-col overflow-auto h-screen bg-[#CBC4C4] pt-10  `} // adjust bg image size and position here
    >
      <TopLayout></TopLayout>
      <div className=" h-full ">{children}</div>
    </main>
  );
}
