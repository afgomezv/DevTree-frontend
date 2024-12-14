import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import { Logo } from "./Logo";
import AdminNavigation from "./nav/AdminNavigation";
import { useLocation } from "react-router-dom";
import HomeNavigation from "./nav/HomeNavigation";

export const NavbarAccount = () => {
  const location = useLocation();

  return (
    <NextUINavbar isBordered className="bg-background/70 backdrop-blur-lg py-4">
      <NavbarContent>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        {location.pathname === "/" ? <HomeNavigation /> : <AdminNavigation />}
      </NavbarContent>
    </NextUINavbar>
  );
};
