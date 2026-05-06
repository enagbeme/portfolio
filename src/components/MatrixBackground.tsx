"use client";
import { useEffect, useRef } from "react";

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const fontSize = 14;
      const cols = Math.floor(canvas.width / fontSize);
      const rows = Math.floor(canvas.height / fontSize);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const char = Math.random() > 0.5 ? "1" : "0";
          const x = col * fontSize;
          const y = (row + 1) * fontSize;

          // Vary opacity randomly for depth
          const rand = Math.random();
          if (rand > 0.85) {
            ctx.fillStyle = "rgba(59, 130, 246, 0.12)";
          } else if (rand > 0.7) {
            ctx.fillStyle = "rgba(139, 92, 246, 0.09)";
          } else {
            ctx.fillStyle = "rgba(100, 116, 139, 0.06)";
          }

          ctx.fillText(char, x, y);
        }
      }
    };

    draw();
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
