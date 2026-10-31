import SolicitudItem from './SolicitudItem';

export default function ListaSolicitudes({ solicitudes, onActualizar, onEliminar }) {
  // Recibe el array de 'solicitudes' por props y lo recorre con .map()
  
  return (
    <div className="jarvis-panel p-6 rounded-lg h-full min-h-[500px]">
      <h2 className="text-xl text-primary border-b border-primary/30 pb-2 mb-4 uppercase tracking-wider font-bold">
        Monitor de Solicitudes ({solicitudes.length})
      </h2>
      
      <div className="space-y-4">
        {solicitudes.length === 0 ? (
          <p className="text-muted-foreground text-center py-10 uppercase tracking-widest text-sm">No hay anomalías detectadas.</p>
        ) : (
          solicitudes.map(solicitud => (
            <SolicitudItem
              key={solicitud.id}
              solicitud={solicitud}
              onActualizar={onActualizar}
              onEliminar={onEliminar}
            />
          ))
        )}
      </div>
    </div>
  );
}