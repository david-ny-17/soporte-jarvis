export default function SolicitudItem({ solicitud, onActualizar, onEliminar }) {
  const colorPrioridad = {
    baja: 'text-green-400',
    media: 'text-yellow-400',
    alta: 'text-destructive jarvis-glow'
  };

  const colorEstado = {
    'pendiente': 'border-yellow-500/50 text-yellow-500',
    'en proceso': 'border-primary/50 text-primary',
    'resuelta': 'border-green-500/50 text-green-500'
  };

  return (
    <div className="jarvis-glass-naked p-4 flex flex-col gap-2 hover:border-primary transition-all duration-300 relative overflow-hidden group laser-scan">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -translate-y-full group-hover:animate-[scan_2s_ease-in-out_infinite]"></div>

      <div className="flex justify-between items-start z-10">
        <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">{solicitud.titulo}</h3>
        <span className={`text-xs uppercase px-2 py-1 rounded bg-secondary/80 border ${colorEstado[solicitud.estado]}`}>
          {solicitud.estado}
        </span>
      </div>
      
      <p className="text-sm text-muted-foreground z-10">{solicitud.descripcion}</p>
      
      <div className="flex justify-between items-center mt-2 pt-3 border-t border-border/50 text-xs text-muted-foreground z-10">
        <span className="uppercase">Solicitante: <span className="text-foreground">{solicitud.solicitante}</span></span>
        <span className="uppercase">Prioridad: <span className={`font-bold ${colorPrioridad[solicitud.prioridad]}`}>{solicitud.prioridad}</span></span>
      </div>

      {/* Controles de Acción J.A.R.V.I.S. */}
      <div className="flex justify-between items-center mt-3 pt-3 border-t border-border/20 z-10 gap-2">
        <select 
          value={solicitud.estado}
          onChange={(e) => onActualizar(solicitud.id, e.target.value)}
          className="bg-secondary/50 border border-border rounded p-1 text-xs text-foreground focus:border-primary outline-none uppercase tracking-wider cursor-pointer"
        >
          <option value="pendiente">Pendiente</option>
          <option value="en proceso">En Proceso</option>
          <option value="resuelta">Resuelta</option>
        </select>

        <button 
          onClick={() => onEliminar(solicitud.id)}
          className="text-xs uppercase px-3 py-1 bg-destructive/10 text-destructive border border-destructive/50 hover:bg-destructive hover:text-destructive-foreground rounded transition-colors tracking-widest font-bold"
        >
          Purgar
        </button>
      </div>
    </div>
  );
}