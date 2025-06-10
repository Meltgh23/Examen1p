import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Home from "./funciones/Home";
import Catalogo from "./funciones/Catalogo";
import Contacto from "./funciones/Contacto";
import Login from "./funciones/Login";
import perfil from "./funciones/perfil";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<perfil />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;