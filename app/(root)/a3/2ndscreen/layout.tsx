import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`relative flex flex-col overflow-auto min-h-screen bg-black  `} // adjust bg image size and position here
    >
      {/* <div className="fixed inset-0 flex items-center justify-center pb-16">
        <Image
          src="/assets/a3-background-1.png"
          alt="red-background"
          width={500}
          height={500}
          className="scale-150"
        ></Image>
      </div> */}
      <div className=" z-20">{children}</div>
    </main>
  );
}
