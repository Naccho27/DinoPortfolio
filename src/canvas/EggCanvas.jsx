import { useEffect, useRef } from "react";

/**
 * EggCanvas
 * - Dibuja un huevo animado con partículas y brillo.
 * - Props:
 *   - color: color del cuerpo del huevo (string CSS).
 *   - cracks: array (no usado en esta versión, reservado para futuras grietas).
 */
export default function EggCanvas({ color = "#4ecf20", cracks = [] }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const partsRef = useRef(null);
  const tRef = useRef(0);

  // Constantes de tamaño (puedes adaptarlas o hacer responsive)
  const W = 700;
  const H = 860;
  const PARTICLE_COUNT = 80;

  // Inicializa las partículas una sola vez
  function initParticles() {
    const parts = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2 + 0.3,
      vy: -(Math.random() * 0.5 + 0.1),
      vx: (Math.random() - 0.5) * 0.3,
      op: Math.random() * 0.5 + 0.1,
      tw: Math.random() * Math.PI * 2,
    }));
    partsRef.current = parts;
  }

  // Función auxiliar de pulso
  function pulse(t, f, p = 0) {
    return 0.5 + 0.5 * Math.sin(t * f + p);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Asignar tamaño del canvas (resolución)
    canvas.width = W;
    canvas.height = H;

    // Inicializar partículas si no existen
    if (!partsRef.current) initParticles();

    // Animación
    function draw() {
      const t = tRef.current;
      // Fondo radial
      ctx.clearRect(0, 0, W, H);
      const bgG = ctx.createRadialGradient(W / 2, H * 0.6, 0, W / 2, H * 0.6, H * 0.8);
      bgG.addColorStop(0, "#011a08");
      bgG.addColorStop(1, "#000502");
      ctx.fillStyle = bgG;
      ctx.fillRect(0, 0, W, H);

      const cx = W / 2;
      const bp = pulse(t, 0.04);
      const float = Math.sin(t * 0.02) * 6;

      // Partículas
      const parts = partsRef.current;
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        p.tw += 0.02;
        p.y += p.vy;
        p.x += p.vx;
        if (p.y < -5) {
          p.y = H + 5;
          p.x = Math.random() * W;
        }
        ctx.fillStyle = `rgba(0,255,100,${p.op})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Efecto de brillo alrededor del huevo
      const eggCX = cx;
      const eggCY = H * 0.6 + float;
      const eggGlow = ctx.createRadialGradient(eggCX, eggCY, 0, eggCX, eggCY, 140);
      eggGlow.addColorStop(0, `rgba(120,255,100,${0.5 + 0.3 * bp})`);
      eggGlow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = eggGlow;
      ctx.fillRect(eggCX - 200, eggCY - 200, 400, 400);

      // Cuerpo del huevo
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.ellipse(eggCX, eggCY, 70, 90, 0, 0, Math.PI * 2);
      ctx.fill();

      // Aquí podrías dibujar 'cracks' si se pasan por props
      // ejemplo: drawCracks(ctx, cracks, eggCX, eggCY);

      // Avanzar tiempo y siguiente frame
      tRef.current += 1;
      animationRef.current = requestAnimationFrame(draw);
    }

    // Iniciar animación
    animationRef.current = requestAnimationFrame(draw);

    // Cleanup
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
    // Dependencias: si cambian color o cracks, redibujamos (las partículas se mantienen)
  }, [color, cracks]);

  return <canvas ref={canvasRef} className="w-full h-full max-w-[400px]" />;
}
