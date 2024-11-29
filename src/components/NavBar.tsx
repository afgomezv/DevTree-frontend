import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Logo } from "./Logo";
import { AuthButtons } from "./AuthButtons";

export const Navbar = () => {
  return (
    <NextUINavbar isBordered className="bg-background/70 backdrop-blur-lg">
      <NavbarContent>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <AuthButtons />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
