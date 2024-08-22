import { UserButton } from "@clerk/nextjs";
import Search from "../Search.tsx";
import MobileSidebar from "../Sidebar/MobileSidebar";
import Image from "next/image.js";

const Header = () => {
  return (
    <header className="shadow-sm ">
      <div className="px-4 h-16 flex items-center justify-between">
        <div className="hidden lg:block">
          <Search />
        </div>

        <MobileSidebar />

        <div className="lg:hidden flex items-center justify-center gap-2">
          <Image
            src={"/logo.svg"}
            alt=""
            width={24}
            height={24}
            loading="lazy"
          />
          <span className="text-xl font-bold text-primary">Text Genius</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:block bg-primary px-2 py-1 rounded-full text-sm text-white">
            🔥 Join Membership just for $9.99/Month
          </div>

          <UserButton />
        </div>
      </div>
    </header>
  );
};
export default Header;
