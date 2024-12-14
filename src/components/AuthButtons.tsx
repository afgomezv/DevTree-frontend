import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

export const AuthButtons = () => {
  return (
    <div className="flex gap-4">
      <Link to="/auth/login">
        <Button
          className="bg-gradient-to-tr from-custom-yellow to-custom-green text-black font-bold shadow-lg"
          size="lg"
        >
          Iniciar Sesión
        </Button>
      </Link>
      <Link to="/auth/register">
        <Button
          className="bg-gradient-to-tr from-custom-yellow to-custom-green text-black font-bold shadow-lg"
          size="lg"
        >
          Registrarme
        </Button>
      </Link>
    </div>
  );
};
