import { Spinner } from "./Spinner";

interface LoadingOverlayProps {
  message?: string;
}

export default function LoadingOverlay({
  message = "Cargando...",
}: LoadingOverlayProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 flex flex-col items-center gap-4">
        <Spinner size="lg" variant="primary" />
        <p className="text-gray-700 font-medium">{message}</p>
      </div>
    </div>
  );
}
