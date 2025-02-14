import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cpu } from "lucide-react";

import { Menu } from "lucide-react";
import {
  Sheet,

  SheetContent,
  
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Cpu className="w-8 h-8 text-blue-500" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            EduGenius AI
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-gray-300 hover:text-white transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#benefits"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Benefits
          </Link>
          <Link
            href="#pricing"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Pricing
          </Link>
        </div>

        <Button className="bg-blue-600  md:block  hidden hover:bg-blue-700">
          Start Learning
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden  bg-inherit hover:bg-inherit">
              <Menu size={30} />
            </Button>
          </SheetTrigger>
          <SheetContent  className="text-white">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <div className="flex flex-col space-y-4   justify-center items-center  font-medium">
              <Link
            href="#features"
            className="text-gray-300   mt-24 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-gray-300 hover:text-white transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#benefits"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Benefits
          </Link>
          <Link
            href="#pricing"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Pricing
          </Link>
                <Button className="bg-gradient-to-r    from-blue-600  to-purple-700 transition-all duration-200 hover:shadow-md w-full py-3 rounded-full hover:bg-blue-700">
                  Start Learning
                </Button>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
