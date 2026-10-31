import { useState } from 'react';

export default function SolicitudForm({ onAgregar }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [solicitante, setSolicitante] = useState('');
  const [prioridad, setPrioridad] = useState('baja');
  const [error, setError] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    
    if (titulo.trim() === '' || descripcion.trim() === '') {
      setError('Error de Sistema: El título y la descripción son datos obligatorios.');
      return;
    }

    setError('');
    
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
    // Contenedor principal con el efecto de cristal transparente
    <div className="jarvis-glass-naked p-6 rounded-lg relative">
      <h2 className="text-xl text-primary border-b border-primary/30 pb-2 mb-4 uppercase tracking-wider font-bold">
        Ingresar Solicitud
      </h2>
      
      {error && (
        <div className="mb-4 p-3 bg-destructive/20 border border-destructive text-destructive text-xs uppercase tracking-widest rounded animate-pulse shadow-[0_0_10px_rgba(255,0,0,0.3)]">
          {error}
        </div>
      )}
      
      <form onSubmit={manejarEnvio} className="space-y-4">
        <div>
          <label className="block text-xs text-primary/70 uppercase mb-1">Título de la anomalía</label>
          <input 
            type="text" 
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            /* AQUÍ ESTÁ EL CAMBIO: bg-black/50, border-primary/50, text-primary */
            className="w-full bg-black/50 border border-primary/50 rounded p-2 text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-primary/30" 
            placeholder="Ej. Acceso denegado..." 
          />
        </div>
        <div>
          <label className="block text-xs text-primary/70 uppercase mb-1">Descripción detallada</label>
          <textarea 
            rows="3" 
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            /* AQUÍ ESTÁ EL CAMBIO */
            className="w-full bg-black/50 border border-primary/50 rounded p-2 text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none placeholder:text-primary/30" 
            placeholder="Detalles técnicos..."
          ></textarea>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-primary/70 uppercase mb-1">Solicitante</label>
            <input 
              type="text" 
              value={solicitante}
              onChange={(e) => setSolicitante(e.target.value)}
              /* AQUÍ ESTÁ EL CAMBIO */
              className="w-full bg-black/50 border border-primary/50 rounded p-2 text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
            />
          </div>
          <div>
            <label className="block text-xs text-primary/70 uppercase mb-1">Prioridad</label>
            <select 
              value={prioridad}
              onChange={(e) => setPrioridad(e.target.value)}
              /* AQUÍ ESTÁ EL CAMBIO. Además se oscurecen las opciones desplegables */
              className="w-full bg-black/50 border border-primary/50 rounded p-2 text-primary focus:border-primary outline-none [&>option]:bg-black [&>option]:text-primary"
            >
              <option value="baja">Baja</option>
              <option value="media">Media</option>
              <option value="alta">Alta</option>
            </select>
          </div>
        </div>
        
        <button 
          type="submit" 
          className="w-full mt-4 bg-primary/20 text-primary border border-primary hover:bg-primary hover:text-black py-2 rounded transition-all uppercase tracking-widest text-sm font-bold shadow-[0_0_15px_rgba(0,255,255,0.3)]"
        >
          Iniciar Protocolo
        </button>
      </form>
    </div>
  );
}