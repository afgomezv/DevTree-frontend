import { NavbarContent, NavbarItem } from "@nextui-org/react";
import { AuthButtons } from "../AuthButtons";

export { Link } from "react-router-dom";

export default function HomeNavigation() {
  return (
    <>
      <NavbarContent justify="end">
        <NavbarItem>
          <AuthButtons />
        </NavbarItem>
      </NavbarContent>
    </>
  );
}
