export default function SolicitudForm({ onAgregar }) {
  // Este componente recibe la función 'onAgregar' por props desde App.jsx
  
  return (
    <div className="jarvis-panel p-6 rounded-lg">
      <h2 className="text-xl text-primary border-b border-primary/30 pb-2 mb-4 uppercase tracking-wider font-bold">
        Ingresar Solicitud
      </h2>
      <form className="space-y-4">
        <div>
          <label className="block text-xs text-muted-foreground uppercase mb-1">Título de la anomalía</label>
          <input type="text" className="w-full bg-background border border-border rounded p-2 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Ej. Acceso denegado..." />
        </div>
        <div>
          <label className="block text-xs text-muted-foreground uppercase mb-1">Descripción detallada</label>
          <textarea rows="3" className="w-full bg-background border border-border rounded p-2 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" placeholder="Detalles técnicos..."></textarea>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-muted-foreground uppercase mb-1">Solicitante</label>
            <input type="text" className="w-full bg-background border border-border rounded p-2 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
          </div>
          <div>
            <label className="block text-xs text-muted-foreground uppercase mb-1">Prioridad</label>
            <select className="w-full bg-background border border-border rounded p-2 text-foreground focus:border-primary outline-none">
              <option value="baja">Baja</option>
              <option value="media">Media</option>
              <option value="alta">Alta</option>
            </select>
          </div>
        </div>
        
        {/* Al hacer click, ejecutará la función que vino por props */}
        <button 
          type="button" 
          onClick={() => onAgregar({})}
          className="w-full mt-4 bg-primary/10 text-primary border border-primary hover:bg-primary hover:text-primary-foreground py-2 rounded transition-all uppercase tracking-widest text-sm font-bold jarvis-glow"
        >
          Iniciar Protocolo
        </button>
      </form>
    </div>
  );
}