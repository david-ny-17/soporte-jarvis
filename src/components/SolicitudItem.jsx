export default function SolicitudItem({ solicitud, onActualizar, onEliminar }) {
  // Recibe un objeto 'solicitud' y lo pinta en la interfaz
  
  // Colores dinámicos según la prioridad
  const colorPrioridad = {
    baja: 'text-green-400',
    media: 'text-yellow-400',
    alta: 'text-destructive jarvis-glow'
  };

  return (
    <div className="border border-border bg-background/50 p-4 rounded-lg flex flex-col gap-3 hover:border-primary/50 transition-colors relative overflow-hidden group">
      {/* Efecto de escaneo al pasar el mouse (decorativo J.A.R.V.I.S) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -translate-y-full group-hover:animate-[scan_2s_ease-in-out_infinite]"></div>

      <div className="flex justify-between items-start z-10">
        <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">{solicitud.titulo}</h3>
        <span className="text-xs uppercase px-2 py-1 rounded bg-secondary/80 text-primary border border-primary/30">
          {solicitud.estado}
        </span>
      </div>
      
      <p className="text-sm text-muted-foreground z-10">{solicitud.descripcion}</p>
      
      <div className="flex justify-between items-center mt-2 pt-3 border-t border-border/50 text-xs text-muted-foreground z-10">
        <span className="uppercase">Solicitante: <span className="text-foreground">{solicitud.solicitante}</span></span>
        <span className="uppercase">Prioridad: <span className={`font-bold ${colorPrioridad[solicitud.prioridad]}`}>{solicitud.prioridad}</span></span>
      </div>
    </div>
  );
}