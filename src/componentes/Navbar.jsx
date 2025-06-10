import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        🌿 Plantitas
      </Link>
      <ul className="flex gap-4">
        <li>
          <Link to="/" className="hover:text-green-300">Inicio</Link>
        </li>
        <li>
          <Link to="/catalogo" className="hover:text-green-300">Catálogo</Link>
        </li>
        <li>
          <Link to="/contacto" className="hover:text-green-300">Contacto</Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-green-300">Login</Link>
        </li>
          <li>
          <Link to="/perfil" className="hover:text-green-300">perfil</Link>
        </li>
      </ul>
    </nav>
  );
}