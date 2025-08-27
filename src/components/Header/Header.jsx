import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import ContactDialog from "../Modals/ContactModal";
import { useNavigate } from "react-router-dom";

// Reusable NavLink
const NavLink = ({ href, children, onClick }) => {
  return (
    <NavigationMenuLink
      href={href}
      onClick={onClick}
      className={cn(
        "block px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition"
      )}
    >
      {children}
    </NavigationMenuLink>
  );
};

function Header() {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="text-xl font-bold tracking-tight">
          <a href="/" className="hover:opacity-80 transition">
            Vikas Kumar
          </a>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavLink
                href="#home"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink href="#about">About</NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink href="#projects">Projects</NavLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

export default Header;
