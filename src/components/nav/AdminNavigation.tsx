import { Button } from "@nextui-org/react";
import { useQueryClient } from "@tanstack/react-query";

function AdminNavigation() {
  const queryClient = useQueryClient();

  const logout = () => {
    localStorage.removeItem("AUTH_TOKEN");
    queryClient.invalidateQueries({ queryKey: ["user"] });
  };

  return (
    <>
      <Button
        className="bg-gradient-to-tr from-custom-yellow to-custom-green text-black font-bold shadow-lg"
        size="lg"
        onClick={logout}
      >
        Cerrar Sessión
      </Button>
    </>
  );
}

export default AdminNavigation;
