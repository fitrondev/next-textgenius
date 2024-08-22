import Image from "next/image";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  return (
    <aside className="size-full p-4 border-r">
      <div className="flex items-center justify-center gap-2">
        <Image src={"/logo.svg"} alt="" width={30} height={30} loading="lazy" />
        <span className="text-2xl font-bold text-primary">Text Genius</span>
      </div>

      <SidebarMenu />
    </aside>
  );
};
export default Sidebar;
