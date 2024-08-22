import Image from "next/image";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  return (
    <aside className="size-full lg:p-4 lg:border-r">
      <div className="hidden lg:flex items-center justify-center gap-2">
        <Image src={"/logo.svg"} alt="" width={30} height={30} loading="lazy" />
        <span className="text-2xl font-bold text-primary">Text Genius</span>
      </div>

      <SidebarMenu />
    </aside>
  );
};
export default Sidebar;
