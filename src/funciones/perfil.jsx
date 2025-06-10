export default function Perfil({ user }) {
  return (
    <div>
      <h2>Perfil</h2>
      <p>Nombre: {user.displayName}</p>
      <p>Email: {user.email}</p>
      <img src={user.photoURL} alt="Foto de perfil" width="100" />
    </div>
  );
}