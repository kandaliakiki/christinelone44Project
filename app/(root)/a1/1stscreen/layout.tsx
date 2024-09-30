export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`flex flex-col overflow-auto min-h-screen p-5 bg-gray-theme-a1`}
    >
      {children}
    </main>
  );
}
