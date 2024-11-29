import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  Button,
} from "@nextui-org/react";
import { Logo } from "./Logo";

export const NavbarAccount = () => {
  return (
    <NextUINavbar isBordered className="bg-background/70 backdrop-blur-lg py-4">
      <NavbarContent>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <Button
          className="bg-gradient-to-tr from-custom-yellow to-custom-green text-black font-bold shadow-lg"
          size="lg"
        >
          Cerrar Sessión
        </Button>
      </NavbarContent>
    </NextUINavbar>
  );
};
