import { useState, useEffect } from 'react';

export default function HudBackground() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setHora(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const dia = hora.getDate().toString().padStart(2, '0');
  const mes = hora.toLocaleString('en-US', { month: 'long' }).toLowerCase();
  const timeStr = hora.toLocaleTimeString('en-US', { hour12: false });

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black-void flex items-center justify-center">
      
      {/* 1. EL GRAN REACTOR CENTRAL */}
      <div className="relative w-[800px] h-[800px] opacity-40 mix-blend-screen">
        {/* Círculos exteriores */}
        <div className="ring-base w-full h-full border-[1px] border-primary/20"></div>
        <div className="ring-base w-[95%] h-[95%] border-[4px] border-primary/30 border-dashed spin-slow"></div>
        <div className="ring-base w-[85%] h-[85%] border-[1px] border-primary/50 spin-reverse-slow">
          {/* Pequeños nodos en el anillo */}
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        {/* Anillo segmentado grueso (el brillante de tu foto) */}
        <div className="ring-base w-[60%] h-[60%] segmented-ring spin-reverse-fast opacity-80"></div>
        
        {/* Centro del radar */}
        <div className="ring-base w-[45%] h-[45%] border border-primary/40 border-dotted spin-slower"></div>
        <div className="ring-base w-[20%] h-[20%] border-2 border-primary/50 flex items-center justify-center">
          <span className="text-primary/60 font-bold text-4xl animate-pulse">Z</span>
        </div>
      </div>

      {/* 2. WIDGET CALENDARIO (Arriba Izquierda) */}
      <div className="absolute top-8 left-8 flex flex-col items-center">
        <div className="text-primary/80 font-mono text-sm tracking-widest mb-1">{timeStr}</div>
        <div className="relative w-40 h-40 flex flex-col items-center justify-center border-4 border-primary rounded-full border-t-transparent -rotate-45">
          <div className="rotate-45 text-center">
            <span className="block text-primary text-xl tracking-widest">{mes}</span>
            <span className="block text-primary text-5xl font-bold">{dia}</span>
          </div>
        </div>
        {/* Decoraciones de líneas */}
        <div className="absolute top-1/2 -left-8 w-4 h-[2px] bg-primary"></div>
        <div className="absolute -bottom-12 left-1/2 w-[2px] h-20 bg-primary/50"></div>
      </div>

      {/* 3. WIDGET ENERGÍA (Abajo Izquierda) */}
      <div className="absolute bottom-12 left-12">
        <div className="relative w-24 h-24 border-4 border-primary rounded-full border-b-transparent rotate-45 flex items-center justify-center">
           <div className="-rotate-45 text-primary font-bold text-lg">100%</div>
        </div>
        <div className="text-primary/50 text-[10px] uppercase mt-2 text-center">Power</div>
      </div>

      {/* 4. WIDGET MINI-REACTOR Y LÍNEAS (Arriba Derecha) */}
      <div className="absolute top-12 right-12 flex flex-col items-end">
        <div className="relative w-32 h-32 flex items-center justify-center">
          <div className="absolute inset-0 border-[8px] border-primary/80 rounded-full"></div>
          <div className="absolute inset-4 border-[2px] border-primary rounded-full bg-primary/20"></div>
          <div className="w-8 h-8 bg-white rounded-full shadow-[0_0_20px_#fff,0_0_40px_cyan]"></div>
        </div>
        
        {/* Líneas simulando conexiones de datos */}
        <div className="mt-8 flex flex-col items-end gap-2 pr-8 border-r-2 border-primary/50">
          {['Documents', 'Videos', 'Music', 'Programs'].map((txt, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-primary/70 text-xs uppercase">{txt}</span>
              <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_5px_cyan]"></div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. WIDGET CLIMA (Abajo Derecha) */}
      <div className="absolute bottom-12 right-12 flex items-center gap-4">
        <div className="text-right">
          <div className="text-primary text-xs uppercase">mostly cloudy</div>
          <div className="text-primary/50 text-[10px]">Atmospheric Analysis</div>
        </div>
        <div className="w-20 h-20 border-[3px] border-primary rounded-full flex items-center justify-center border-l-transparent rotate-12">
           <span className="text-primary font-bold text-2xl -rotate-12">30°</span>
        </div>
      </div>

    </div>
  );
}