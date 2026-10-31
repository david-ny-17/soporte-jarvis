import { useState } from 'react';

export default function SolicitudForm({ onAgregar }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [solicitante, setSolicitante] = useState('');
  const [prioridad, setPrioridad] = useState('baja');

  const manejarEnvio = (e) => {
    e.preventDefault(); 
    
    const nuevaSolicitud = {
      titulo,
      descripcion,
      solicitante: solicitante.trim() === '' ? 'Usuario Desconocido' : solicitante,
      prioridad
    };

    onAgregar(nuevaSolicitud);

    setTitulo('');
    setDescripcion('');
    setSolicitante('');
    setPrioridad('baja');
  };

  return (
    <div className="jarvis-panel p-6 rounded-lg">
      <h2 className="text-xl text-primary border-b border-primary/30 pb-2 mb-4 uppercase tracking-wider font-bold">
        Ingresar Solicitud
      </h2>
      
      {/* Agregamos el evento onSubmit al formulario */}
      <form onSubmit={manejarEnvio} className="space-y-4">
        <div>
          <label className="block text-xs text-muted-foreground uppercase mb-1">Título de la anomalía</label>
          <input 
            type="text" 
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            className="w-full bg-background border border-border rounded p-2 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
            placeholder="Ej. Acceso denegado..." 
          />
        </div>
        <div>
          <label className="block text-xs text-muted-foreground uppercase mb-1">Descripción detallada</label>
          <textarea 
            rows="3" 
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
            className="w-full bg-background border border-border rounded p-2 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" 
            placeholder="Detalles técnicos..."
          ></textarea>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-muted-foreground uppercase mb-1">Solicitante</label>
            <input 
              type="text" 
              value={solicitante}
              onChange={(e) => setSolicitante(e.target.value)}
              className="w-full bg-background border border-border rounded p-2 text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
            />
          </div>
          <div>
            <label className="block text-xs text-muted-foreground uppercase mb-1">Prioridad</label>
            <select 
              value={prioridad}
              onChange={(e) => setPrioridad(e.target.value)}
              className="w-full bg-background border border-border rounded p-2 text-foreground focus:border-primary outline-none"
            >
              <option value="baja">Baja</option>
              <option value="media">Media</option>
              <option value="alta">Alta</option>
            </select>
          </div>
        </div>
        
        <button 
          type="submit" 
          className="w-full mt-4 bg-primary/10 text-primary border border-primary hover:bg-primary hover:text-primary-foreground py-2 rounded transition-all uppercase tracking-widest text-sm font-bold jarvis-glow"
        >
          Iniciar Protocolo
        </button>
      </form>
    </div>
  );
}