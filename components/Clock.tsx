"use client";

import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState({ hh: "00", mm: "00", ss: "00" });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const end = new Date(now);
      end.setHours(12, 0, 0, 0);
      let diff = Math.max(0, Math.floor((end.getTime() - now.getTime()) / 1000));
      const hh = Math.floor(diff / 3600);
      const mm = Math.floor((diff % 3600) / 60);
      const ss = diff % 60;
      setTime({
        hh: String(hh),
        mm: String(mm),
        ss: String(ss),
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock-container">
      <div className="clock-box">
        <div className="value">{time.hh}hr {time.mm} min {time.ss} sec left</div>
      </div>
    </div>
  );
}
