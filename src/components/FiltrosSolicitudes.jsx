export default function FiltrosSolicitudes({ filtroActual, onCambiarFiltro }) {
  // Recibe qué filtro está activo (filtroActual) y la función para cambiarlo (onCambiarFiltro)
  
  const opciones = ['todas', 'pendiente', 'en proceso', 'resuelta'];

  return (
    <div className="jarvis-panel p-6 rounded-lg">
      <h2 className="text-xl text-primary border-b border-primary/30 pb-2 mb-4 uppercase tracking-wider font-bold">
        Filtros de Sistema
      </h2>
      <div className="flex flex-col gap-2">
        {opciones.map(opcion => (
          <button
            key={opcion}
            onClick={() => onCambiarFiltro(opcion)}
            className={`text-left px-4 py-2 rounded transition-all uppercase text-xs tracking-wider ${
              filtroActual === opcion 
                ? 'bg-primary/30 text-primary border-l-2 border-primary jarvis-glow font-bold' 
                : 'bg-transparent text-muted-foreground hover:bg-secondary hover:text-foreground'
            }`}
          >
            {opcion}
          </button>
        ))}
      </div>
    </div>
  );
}