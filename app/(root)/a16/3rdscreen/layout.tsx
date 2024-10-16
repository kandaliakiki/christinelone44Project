export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex  font-lato  flex-col overflow-auto h-screen bg-[#1C1C1C] pt-10 `} // adjust bg image size and position here
    >
      <div className=" h-full ">{children}</div>
    </main>
  );
}
