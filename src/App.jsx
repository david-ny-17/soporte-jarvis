import { useState } from 'react';
import SolicitudForm from './components/SolicitudForm';
import ListaSolicitudes from './components/ListaSolicitudes';
import FiltrosSolicitudes from './components/FiltrosSolicitudes';

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
  const actualizarEstado = (id, nuevoEstado) => console.log('Actualizar:', id, nuevoEstado);
  const eliminarSolicitud = (id) => console.log('Eliminar:', id);
  const cambiarFiltro = (nuevoFiltro) => setFiltro(nuevoFiltro);

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
      {/* Cabecera J.A.R.V.I.S */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-primary jarvis-glow uppercase tracking-widest">
          J.A.R.V.I.S. Protocol
        </h1>
        <p className="text-muted-foreground mt-2 tracking-widest text-sm md:text-base">
          SISTEMA DE GESTIÓN DE SOPORTE TÉCNICO
        </p>
      </header>

      {/* Grid de componentes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-8">
          {/* Le pasamos la función agregarSolicitud como prop */}
          <SolicitudForm onAgregar={agregarSolicitud} />
          
          {/* Le pasamos el estado del filtro y la función para cambiarlo */}
          <FiltrosSolicitudes filtroActual={filtro} onCambiarFiltro={cambiarFiltro} />
        </div>
        
        <div className="lg:col-span-2">
          {/* Le pasamos la lista de datos y las funciones de acción */}
          <ListaSolicitudes
            solicitudes={solicitudes}
            onActualizar={actualizarEstado}
            onEliminar={eliminarSolicitud}
          />
        </div>
      </div>
    </div>
  );
}

export default App;