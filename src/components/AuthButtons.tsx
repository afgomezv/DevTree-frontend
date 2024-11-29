import { Button } from "@nextui-org/react";

export const AuthButtons = () => {
  return (
    <div className="flex gap-4">
      <Button
        className="bg-gradient-to-tr from-custom-yellow to-custom-green text-black font-bold shadow-lg"
        size="lg"
      >
        Login
      </Button>
      <Button
        className="bg-gradient-to-tr from-custom-yellow to-custom-green text-black font-bold shadow-lg"
        size="lg"
      >
        Sign Up
      </Button>
    </div>
  );
};
