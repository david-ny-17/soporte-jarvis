import { useState, useEffect } from 'react';

export default function HudLateral({ lado }) {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setHora(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = hora.toLocaleTimeString('es-ES', { hour12: false });
  const dateString = hora.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase();

  return (
    <div className={`fixed top-1/2 -translate-y-1/2 flex flex-col items-center gap-8 opacity-70 pointer-events-none hidden xl:flex ${lado === 'izquierdo' ? 'left-8' : 'right-8'}`}>
      
      {/* Círculos Giratorios HUD */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Anillo exterior */}
        <div className="absolute inset-0 border-2 border-dashed border-primary/40 rounded-full animate-spin-slow"></div>
        {/* Anillo medio */}
        <div className="absolute inset-2 border-t-2 border-l-2 border-primary/60 rounded-full animate-spin-reverse"></div>
        {/* Anillo interior sólido */}
        <div className="absolute inset-6 border border-primary/30 rounded-full flex items-center justify-center bg-primary/5 backdrop-blur-sm">
          {lado === 'izquierdo' ? (
             <div className="text-center">
               <div className="text-primary text-xs font-bold animate-pulse">{timeString}</div>
             </div>
          ) : (
             <div className="text-center">
               <div className="text-primary text-[10px] uppercase">SYS_OK</div>
             </div>
          )}
        </div>
      </div>

      {/* Datos Decorativos */}
      {lado === 'izquierdo' && (
        <div className="text-center border-l-2 border-primary/50 pl-2">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">FECHA ESTELAR</p>
          <p className="text-primary text-xs font-bold tracking-widest">{dateString}</p>
          <p className="text-[9px] text-primary/50 mt-4 uppercase">Lat: 34.0522° N</p>
          <p className="text-[9px] text-primary/50 uppercase">Lng: 118.2437° W</p>
        </div>
      )}

      {/* Barras de Sistema animadas (solo lado derecho) */}
      {lado === 'derecho' && (
        <div className="flex items-end gap-1 h-16 mt-4">
          {[40, 70, 30, 90, 50, 80].map((height, i) => (
            <div key={i} className="w-2 bg-primary/20 rounded-t overflow-hidden relative">
              <div 
                className="absolute bottom-0 w-full bg-primary/70 animate-pulse-fast" 
                style={{ height: `${height}%`, animationDelay: `${i * 0.2}s` }}
              ></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}