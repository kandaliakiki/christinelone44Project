export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex  font-graphie  flex-col overflow-hidden h-screen bg-gradient-to-b from-[#76eef2] to-[#ACBCD7]  to-80% px-3 py-14 `} // adjust bg image size and position here
    >
      <div className="z-20"></div>
      <div className=" ">{children}</div>
    </main>
  );
}
