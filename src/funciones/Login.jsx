import { auth, provider, signInWithPopup } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/"); // redirige al home
    } catch (error) {
      console.error("Error en login:", error);
    }
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl mb-4">Inicia sesión</h1>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleLogin}
      >
        Iniciar con Google
      </button>
    </div>
  );
}