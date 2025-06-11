export default function ElementInfo({ element }) {
  if (!element) return null;

  return (
    <div className="mt-8 p-6 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800">{element.nombre}</h2>
      <div className="mt-2 text-xl text-blue-600 font-mono">{element.simbolo}</div>
      
      <div className="mt-4 grid grid-cols-2 gap-4">
        <InfoBox label="Número atómico" value={element.numero_atomico} />
        <InfoBox label="Masa atómica" value={element.masa_atomica} />
        <InfoBox label="Electronegatividad" value={element.electronegatividad} />
        <InfoBox label="Categoría" value={element.categoria} />
      </div>

      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-gray-600">{element.info_adicional}</p>
      </div>
    </div>
  );
}

function InfoBox({ label, value }) {
  return (
    <div className="p-3 bg-gray-100 rounded-lg">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}