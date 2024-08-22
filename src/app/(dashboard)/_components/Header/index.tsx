import { UserButton } from "@clerk/nextjs";
import Search from "../Search.tsx";

const Header = () => {
  return (
    <header className="shadow-sm">
      <div className="px-4 h-16 flex items-center justify-between">
        <Search />
        <div className="flex items-center gap-4">
          <div className="bg-primary px-2 py-1 rounded-full text-sm text-white">
            🔥 Join Membership just for $9.99/Month
          </div>

          <UserButton />
        </div>
      </div>
    </header>
  );
};
export default Header;
