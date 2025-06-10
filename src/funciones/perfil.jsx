import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"; 

export default function Perfil() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); 
  }, []);

  if (!user) {
    return <p>Cargando perfil...</p>; // no logre hacer que aparesca los datos del usuario 
  }

  return (
    <div>
      <h2>Perfil</h2>
      <p>Nombre: {user.displayName}</p>
      <p>Email: {user.email}</p>
      <img src={user.photoURL} alt="Foto de perfil" width="100" />
    </div>
  );
}