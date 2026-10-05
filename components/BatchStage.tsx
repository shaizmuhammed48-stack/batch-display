"use client";

import { useEffect, useRef } from "react";
import { batches } from "@/data/batches";
import BatchCard from "./BatchCard";

interface Mover {
  el: HTMLElement | null;
  x: number;
  y: number;
  vx: number;
  vy: number;
  w: number;
  h: number;
}

export default function BatchStage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const moversRef = useRef<Mover[]>([]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const W = stage.clientWidth;
    const H = stage.clientHeight;

    // Initialize movers
    moversRef.current = batches.map((_, i) => {
      const el = document.getElementById(`batch-card-${i}`);
      const w = 240;
      const h = el?.offsetHeight || 200;
      return {
        el,
        x: Math.random() * (W - w),
        y: Math.random() * (H - h),
        vx: (Math.random() * 1.6 + 0.6) * (Math.random() < 0.5 ? -1 : 1),
        vy: (Math.random() * 1.2 + 0.4) * (Math.random() < 0.5 ? -1 : 1),
        w,
        h,
      };
    });

    let animationId: number;

    const animate = () => {
      const w = stage.clientWidth;
      const h = stage.clientHeight;

      moversRef.current.forEach((m) => {
        if (!m.el) return;

        m.x += m.vx;
        m.y += m.vy;

        if (m.x <= 0) { m.x = 0; m.vx *= -1; }
        if (m.x + m.w >= w) { m.x = w - m.w; m.vx *= -1; }
        if (m.y <= 0) { m.y = 0; m.vy *= -1; }
        if (m.y + m.h >= h) { m.y = h - m.h; m.vy *= -1; }

        m.el.style.transform = `translate(${m.x}px, ${m.y}px)`;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div ref={stageRef} className="stage">
      {batches.map((b, i) => (
        <BatchCard key={i} batch={b} index={i} />
      ))}
    </div>
  );
}
