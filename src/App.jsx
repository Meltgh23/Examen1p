import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./firebase"; 
import { onAuthStateChanged } from "firebase/auth";

import Navbar from "./componentes/Navbar";
import Home from "./funciones/Home";
import Catalogo from "./funciones/Catalogo";
import Contacto from "./funciones/Contacto";
import Login from "./funciones/Login";
import Perfil from "./funciones/perfil";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); 
    });

    
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <BrowserRouter>
      {user && <Navbar />}
      <Routes>
        
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />

 
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/catalogo"
          element={user ? <Catalogo /> : <Navigate to="/login" />}
        />
        <Route
          path="/contacto"
          element={user ? <Contacto /> : <Navigate to="/login" />}
        />
        <Route
          path="/perfil"
          element={user ? <Perfil /> : <Navigate to="/login" />}
        />

   
        <Route
          path="*"
          element={<Navigate to={user ? "/" : "/login"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;