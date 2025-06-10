import PlantCard from "../componentes/PlantCard";

const plantas = [
  { id: 1, nombre: "planta1", precio: 150 },
  { id: 2, nombre: "panta2", precio: 50 },
  { id: 3, nombre: "platnas3", precio: 200 },
];

export default function Catalogo() {
  return (
    <div className="grid gap-4 grid-cols-2 p-4">
      {plantas.map((planta) => (
        <PlantCard key={planta.id} nombre={planta.nombre} precio={planta.precio} />
      ))}
    </div>
  );
}