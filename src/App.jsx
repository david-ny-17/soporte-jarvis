import { useState } from 'react';
import SolicitudForm from './components/SolicitudForm';
import ListaSolicitudes from './components/ListaSolicitudes';
import FiltrosSolicitudes from './components/FiltrosSolicitudes';
import HudLateral from './components/HudLateral';
import HudBackground from './components/HudBackground';

function App() {
  
  const [solicitudes, setSolicitudes] = useState([
    { id: 1, titulo: 'Falla en servidor principal', descripcion: 'El núcleo de procesamiento no responde al ping.', solicitante: 'Tony Stark', prioridad: 'alta', estado: 'pendiente' },
    { id: 2, titulo: 'Actualización de software', descripcion: 'Calibrar los propulsores de la armadura Mark V.', solicitante: 'Pepper Potts', prioridad: 'media', estado: 'en proceso' }
  ]);
  const [filtro, setFiltro] = useState('todas');

  
  const agregarSolicitud = (nuevaSolicitud) => {
    const solicitudCompleta = {
      ...nuevaSolicitud,
      id: Date.now(), 
      estado: 'pendiente' 
    };
    
    
    setSolicitudes([...solicitudes, solicitudCompleta]);
  };
  const actualizarEstado = (id, nuevoEstado) => {
    setSolicitudes(solicitudes.map(solicitud => 
      solicitud.id === id ? { ...solicitud, estado: nuevoEstado } : solicitud
    ));
  };
  const eliminarSolicitud = (id) => {
    setSolicitudes(solicitudes.filter(solicitud => solicitud.id !== id));
  };
  const cambiarFiltro = (nuevoFiltro) => setFiltro(nuevoFiltro);

  const solicitudesFiltradas = solicitudes.filter(solicitud => {
    if (filtro === 'todas') return true;
    return solicitud.estado === filtro;
  });

  return (
    <div className="min-h-screen relative overflow-hidden bg-black-void font-mono text-primary flex py-6">
      
      {/* EL FONDO HUD GIGANTE (Z-0) */}
      <HudBackground />

      {/* CONTENIDO FUNCIONAL (Z-10, POR ENCIMA DEL FONDO) */}
      <div className="w-full h-full max-w-[95rem] mx-auto px-4 lg:px-12 z-10 flex flex-col relative pointer-events-none">
        
        {/* Cabecera pequeña (ya no es el centro de atención) */}
        <header className="mb-8 text-center sm:text-left sm:ml-40 lg:ml-60 pointer-events-auto">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-primary uppercase tracking-[0.5em]">
            J.A.R.V.I.S. SYSTEM
          </h1>
        </header>

        {/* Layout modificado para respetar el gran centro vacío */}
        <div className="flex-1 flex flex-col lg:flex-row justify-between items-start gap-8 pointer-events-none">
          
          {/* COLUMNA IZQUIERDA (Formulario y Filtros) */}
          <div className="w-full lg:w-[350px] space-y-6 mt-32 xl:mt-40 pointer-events-auto">
            <SolicitudForm onAgregar={agregarSolicitud} />
            <FiltrosSolicitudes filtroActual={filtro} onCambiarFiltro={cambiarFiltro} />
          </div>
          
          {/* COLUMNA DERECHA (Lista de Solicitudes) */}
          <div className="w-full lg:w-[500px] mt-20 xl:mt-10 pointer-events-auto">
            <ListaSolicitudes
              solicitudes={solicitudesFiltradas}
              onActualizar={actualizarEstado}
              onEliminar={eliminarSolicitud}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;