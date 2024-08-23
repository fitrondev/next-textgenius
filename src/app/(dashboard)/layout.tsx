import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex size-full">
      <div className="hidden lg:block lg:w-80 h-screen fixed left-0 top-0">
        <Sidebar />
      </div>
      <div className="w-full lg:ml-80">
        <Header />
        {children}
      </div>
    </div>
  );
}
