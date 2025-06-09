export default function PlantCard({ nombre, precio }) {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold">{nombre}</h2>
      <p className="text-green-700">${precio}</p>
    </div>
  );
}