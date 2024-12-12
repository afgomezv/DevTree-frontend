import { Button } from "@nextui-org/react";
import { TbUserX, TbHome } from "react-icons/tb";
export default function NotFoundView() {
  return (
    <div>
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <TbUserX className="w-24 h-24 text-red-500" strokeWidth={1.5} />
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Usuario no encontrado
        </h1>

        <p className="text-gray-600 mb-8">
          Lo sentimos, no pudimos encontrar el usuario que estás buscando. Por
          favor, verifica la información e intenta nuevamente.
        </p>

        <div className="space-y-4">
          <Button
            size="lg"
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2"
            startContent={<TbHome className="w-5 h-5" />}
          >
            Volver al inicio
          </Button>
        </div>
      </div>
    </div>
  );
}
