import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <NextUINavbar isBordered className="bg-background/70 backdrop-blur-lg py-4">
      <NavbarContent>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>
    </NextUINavbar>
  );
};
