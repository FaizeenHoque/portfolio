
"use client";

import { ReactNode, useEffect, useRef } from "react";

type PageWrapperProps = {
  children: ReactNode;
};

function lerp(start: number, end: number, amt: number) {
  return (1 - amt) * start + amt * end;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
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
      current.current.x = lerp(current.current.x, target.current.x, 0.1);
      current.current.y = lerp(current.current.y, target.current.y, 0.1);

      if (wrapperRef.current) {
        // Important: don't interfere with layout by only changing background position
        wrapperRef.current.style.backgroundPosition = `${40 + current.current.x}px ${40 + current.current.y}px`;
      }

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
      ref={wrapperRef}
      className="min-h-screen bg-grid-pattern"
      style={{
        // Only set background position, no fixed heights or overflows here
        backgroundPosition: `40px 40px`,
      }}
    >
      {children}
    </div>
  );
}
