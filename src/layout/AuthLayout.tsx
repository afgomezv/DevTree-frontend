import { Outlet } from "react-router-dom";
import { Navbar } from "../components/NavBar";
import { Toaster } from "sonner";

export default function AuthLayout() {
  return (
    <>
      <Navbar />
      <div className="bg-slate-800 min-h-screen">
        <div className="max-w-lg mx-auto pt-10 px-5">
          <div className="py-10">
            <Outlet />
            <Toaster className="mt-20" richColors position="top-right" />
          </div>
        </div>
      </div>
    </>
  );
}
