import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import LogoIcon from "../assets/icon.svg";

// interface RouteProps {
//   href: string;
//   label: string;
// }

// Only keep live sections in the route list
// const routeList: RouteProps[] = [
//   {
//     href: "#features",
//     label: "Features",
//   },
// ];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between items-center">
          {/* Logo */}
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex items-center gap-2"
            >
              <img src={LogoIcon} alt="Logo" className="size-12" /> 
              JobCrate
            </a>
          </NavigationMenuItem>

          {/* Mobile: Dashboard + ModeToggle */}
          <div className="flex md:hidden gap-2">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="px-2" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">JobCrate</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-5 mt-4">
                  <a
                    href="https://dashboard.jobcrate.net"
                    className={buttonVariants({ variant: "secondary", className: "border" })}
                  >
                    Go to Dashboard
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop: GitHub + ModeToggle */}
          <div className="hidden md:flex gap-2">
              <a href="https://dashboard.jobcrate.net" className={`border ${buttonVariants({ variant: "secondary" })}`}>Go to Dashboard</a>
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
