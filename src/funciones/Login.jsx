import { useState } from "react";
import { auth } from "../firebase";
import {
  signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();

  const handleEmailLogin = async () => {
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto text-center">
      <h1 className="text-2xl mb-4">Inicia sesión</h1>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mb-2 w-full rounded"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mb-4 w-full rounded"
      />
      <button
        onClick={handleEmailLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full mb-4 hover:bg-blue-700 transition"
      >
        Iniciar con Email
      </button>

      <hr className="my-4" />

      <button
        onClick={handleGoogleLogin}
        className="bg-red-600 text-white px-4 py-2 rounded w-full hover:bg-red-700 transition"
      >
        Iniciar con Google
      </button>
    </div>
  );
}