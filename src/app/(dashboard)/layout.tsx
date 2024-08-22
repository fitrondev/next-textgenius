import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex size-full">
      <div className="w-[20%] h-screen">
        <Sidebar />
      </div>
      <div className="w-[80%]">
        <Header />
        {children}
      </div>
    </div>
  );
}
