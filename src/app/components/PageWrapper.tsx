"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type PageWrapperProps = {
  children: ReactNode;
};

function lerp(start: number, end: number, amt: number) {
  return (1 - amt) * start + amt * end;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 20;
      target.current.y = (e.clientY / window.innerHeight - 0.5) * 20;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;

    const animate = () => {
      // interpolate current towards target for smoothness
      current.current.x = lerp(current.current.x, target.current.x, 0.1);
      current.current.y = lerp(current.current.y, target.current.y, 0.1);

      setOffset({ x: current.current.x, y: current.current.y });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-grid-pattern"
      style={{
        backgroundPosition: `${40 + offset.x}px ${40 + offset.y}px`,
      }}
    >
      {children}
    </div>
  );
}
