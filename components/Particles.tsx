"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  size: number;
  left: string;
  duration: string;
  delay: string;
}

export default function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const items: Particle[] = [];
    for (let i = 0; i < 25; i++) {
      items.push({
        id: i,
        size: Math.random() * 14 + 4,
        left: Math.random() * 100 + "vw",
        duration: Math.random() * 10 + 8 + "s",
        delay: Math.random() * 10 + "s",
      });
    }
    setParticles(items);
  }, []);

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </>
  );
}
