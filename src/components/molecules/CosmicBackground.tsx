import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  speed: number;
  color: string;
}

export const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createStars();
    };

    window.addEventListener('resize', handleResize);

    // Paleta de cores das estrelas
    const starColors = ['#ffffff', '#00f0ff', '#a855f7', '#38bdf8', '#e0e7ff'];
    let stars: Star[] = [];

    const createStars = () => {
      // Densidade adaptativa de estrelas
      const starCount = Math.floor((width * height) / 9000);
      stars = [];

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.4 + 0.3,
          alpha: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.015 + 0.005,
          color: starColors[Math.floor(Math.random() * starColors.length)],
        });
      }
    };

    createStars();

    let isTabActive = true;
    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
      if (isTabActive) {
        render();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let time = 0;
    const render = () => {
      if (!isTabActive) return;
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Renderizar estrelas com brilho
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        // Efeito de oscilação senoidal suave
        const currentAlpha = Math.max(
          0.1,
          Math.min(1, star.alpha + Math.sin(time + i) * 0.3)
        );

        ctx.save();
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = currentAlpha;
        ctx.shadowBlur = star.radius > 1.2 ? 6 : 0;
        ctx.shadowColor = star.color;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-cosmic-950">
      {/* Dynamic Starfield Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />

      {/* Cosmic Nebula Ambient Spheres */}
      {/* Cyan Nebula Top-Right */}
      <div className="absolute -top-[15%] -right-[10%] w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] rounded-full bg-gradient-to-br from-cyan-500/15 via-sky-600/10 to-transparent blur-[140px] animate-nebula-slow pointer-events-none" />

      {/* Violet Nebula Center-Left */}
      <div className="absolute top-[35%] -left-[15%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-tr from-purple-600/15 via-fuchsia-600/10 to-transparent blur-[150px] animate-nebula-pulse pointer-events-none" />

      {/* Indigo Nebula Bottom-Right */}
      <div className="absolute -bottom-[10%] right-[15%] w-[55vw] h-[55vw] max-w-[750px] max-h-[750px] rounded-full bg-gradient-to-t from-indigo-700/15 via-cyan-700/10 to-transparent blur-[130px] animate-nebula-slow pointer-events-none" />

      {/* Subtle Space Grid Texture / Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,7,18,0.7)_100%)] pointer-events-none" />
    </div>
  );
};
