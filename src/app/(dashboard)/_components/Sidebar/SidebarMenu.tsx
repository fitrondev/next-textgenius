"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { History, LayoutGrid, Settings, WalletMinimal } from "lucide-react";

export const MenuList = [
  {
    name: "Home",
    icon: LayoutGrid,
    path: "/dashboard",
  },
  {
    name: "History",
    icon: History,
    path: "/dashboard/history",
  },
  {
    name: "Billing",
    icon: WalletMinimal,
    path: "/dashboard/billing",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
];

const SidebarMenu = () => {
  const pathname = usePathname();

  return (
    <div className="mt-8 space-y-4">
      {MenuList.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={cn(
            "flex p-2 gap-4 hover:bg-primary hover:text-background rounded-md transition-all duration-300 ease-in-out",
            pathname === item.path ? "bg-primary/60 text-background" : ""
          )}>
          <item.icon />
          <span className="text-lg font-medium">{item.name}</span>
        </Link>
      ))}
    </div>
  );
};
export default SidebarMenu;
