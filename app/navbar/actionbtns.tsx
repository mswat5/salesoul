import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

const ActionButtons = () => {
  return (
    <div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify className="text-2xl" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                  <Link href="/" className="hover:text-blue-500">
                    Sign in
                  </Link>
                  <Link href="/" className="hover:text-blue-500">
                    Get Started
                  </Link>
                  <Link href="/" className="hover:text-blue-500">
                    Pricing
                  </Link>
                  <Link href="/" className="hover:text-blue-500">
                    Contact
                  </Link>
                  <Link href="/" className="hover:text-blue-500">
                    About
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:space-x-4">
        <Button className="text-md" variant="ghost">
          <Link href="/">Sign in</Link>
        </Button>
        <Button className="text-md bg-blue-500 text-white">
          <Link href="/">Get Started</Link>
        </Button>
      </div>
    </div>
  );
};

export default ActionButtons;
