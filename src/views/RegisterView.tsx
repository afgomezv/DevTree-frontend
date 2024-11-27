import { Link } from "react-router-dom";

export default function RegisterView() {
  return (
    <>
      <div>Register View</div>
      <nav>
        <Link to="/auth/login">¿Ya tienes cuenta? Iniciar sesión</Link>
      </nav>
    </>
  );
}
