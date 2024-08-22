import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Sidebar from ".";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <AlignJustify />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader className="hidden">
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
export default MobileSidebar;
