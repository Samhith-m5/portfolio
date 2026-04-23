import React, { useRef, useEffect, useCallback } from 'react';
import './Grid3D.css';

function Grid3D() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0.5, y: 0.5, cx: 0.5, cy: 0.5 });
  const scroll = useRef({ target: 0, current: 0 });
  const raf = useRef(null);

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const W = canvas.width;
    const H = canvas.height;

    // Smooth interpolation
    mouse.current.cx += (mouse.current.x - mouse.current.cx) * 0.04;
    mouse.current.cy += (mouse.current.y - mouse.current.cy) * 0.04;
    scroll.current.current += (scroll.current.target - scroll.current.current) * 0.04;

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#edf0f5';
    ctx.fillRect(0, 0, W, H);

    // Mouse parallax
    const mx = (mouse.current.cx - 0.5) * 0.04;
    const my = (mouse.current.cy - 0.5) * 0.04;
    ctx.save();
    ctx.translate(mx * W, my * H);

    const col = '110, 165, 205';
    const wallLines = 18;
    const depthRects = 18;

    // ============================
    // 1. SUBTLE GEOMETRY MOVEMENT (Walls scale)
    // ============================
    const baseMargin = 0.18;
    // Slightly faster but still subtle scaling: max margin grows to 0.25 over scroll
    const margin = Math.min(baseMargin + (scroll.current.current * 0.00003), 0.25);

    const bwL = W * margin;
    const bwR = W * (1 - margin);
    const bwT = H * margin;
    const bwB = H * (1 - margin);
    const bwW = bwR - bwL;
    const bwH = bwB - bwT;

    const line = (x1, y1, x2, y2, a, lw) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(${col}, ${a})`;
      ctx.lineWidth = (lw || 1) * dpr;
      ctx.stroke();
    };

    // ============================
    // 2. SUBTLE SLIDING MOVEMENT (Grid lines flow)
    // ============================
    // Negative phase so it flows AWAY from viewer, slightly faster for immersion
    let phase = (-scroll.current.current * 0.00018) % 1;
    if (phase < 0) phase += 1;

    // ============================
    // BACK WALL
    // ============================
    ctx.fillStyle = '#e5e8ef';
    ctx.fillRect(bwL, bwT, bwW, bwH);

    // Back wall grid perfectly aligns with the side wall converging lines
    const cellW = bwW / wallLines;
    const cellH = bwH / wallLines;

    ctx.save();
    ctx.beginPath();
    ctx.rect(bwL, bwT, bwW, bwH);
    ctx.clip();

    for (let i = 0; i <= wallLines; i++) {
      const x = bwL + i * cellW;
      const y = bwT + i * cellH;
      line(x, bwT, x, bwB, 0.19); // vertical back wall (0.22 * 0.89 = 0.19)
      line(bwL, y, bwR, y, 0.19); // horizontal back wall
    }
    ctx.restore();

    // Back wall border
    ctx.strokeStyle = `rgba(${col}, 0.45)`;
    ctx.lineWidth = 1.5 * dpr;
    ctx.strokeRect(bwL, bwT, bwW, bwH);

    // ============================
    // CONVERGING WALL LINES (Structure)
    // ============================
    const lineA = 0.31; // 0.35 * 0.89 = 0.31

    for (let i = 0; i <= wallLines; i++) {
      const t = i / wallLines;
      line(t * W, H, bwL + t * bwW, bwB, lineA); // floor
      line(t * W, 0, bwL + t * bwW, bwT, lineA); // ceiling
    }
    for (let i = 0; i <= wallLines; i++) {
      const t = i / wallLines;
      line(0, t * H, bwL, bwT + t * bwH, lineA); // left
      line(W, t * H, bwR, bwT + t * bwH, lineA); // right
    }

    // ============================
    // DEPTH CROSS-LINES
    // Using linear (d=t) so they perfectly sync with the back wall grid shift
    // ============================
    for (let i = 0; i < depthRects; i++) {
      const t = ((i / depthRects) + phase) % 1;
      const d = t; // linear progression

      if (d > 0.98) continue;

      const alpha = 0.31 * (1 - d * 0.6); // 0.35 * 0.89 = 0.31
      const lw = Math.max(0.4, (1 - d) * 1.0);

      // Floor
      const fY = H + (bwB - H) * d;
      const fXL = 0 + (bwL - 0) * d;
      const fXR = W + (bwR - W) * d;

      // Ceiling
      const cY = 0 + (bwT - 0) * d;

      // Left
      const lX = 0 + (bwL - 0) * d;
      const lYT = 0 + (bwT - 0) * d;
      const lYB = H + (bwB - H) * d;

      // Right
      const rX = W + (bwR - W) * d;

      line(fXL, fY, fXR, fY, alpha, lw);
      line(fXL, cY, fXR, cY, alpha, lw);
      line(lX, lYT, lX, lYB, alpha, lw);
      line(rX, lYT, rX, lYB, alpha, lw);
    }

    // ============================
    // CORNER EDGES
    // ============================
    line(0, 0, bwL, bwT, 0.5, 1.5);
    line(W, 0, bwR, bwT, 0.5, 1.5);
    line(0, H, bwL, bwB, 0.5, 1.5);
    line(W, H, bwR, bwB, 0.5, 1.5);

    ctx.restore();
    raf.current = requestAnimationFrame(render);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
    };

    const onMouse = (e) => {
      mouse.current.x = e.clientX / window.innerWidth;
      mouse.current.y = e.clientY / window.innerHeight;
    };
    const onScroll = () => { scroll.current.target = window.scrollY; };
    const onTouch = (e) => {
      if (e.touches[0]) {
        mouse.current.x = e.touches[0].clientX / window.innerWidth;
        mouse.current.y = e.touches[0].clientY / window.innerHeight;
      }
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouse);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });
    raf.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('touchmove', onTouch);
      cancelAnimationFrame(raf.current);
    };
  }, [render]);

  return (
    <div className="grid3d">
      <canvas ref={canvasRef} className="grid3d__canvas" />
      <div className="grid3d__vignette" />
    </div>
  );
}

export default Grid3D;
