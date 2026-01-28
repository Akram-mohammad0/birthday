import { motion } from "framer-motion";
import { useMemo } from "react";

export default function LuxuryParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }).map(() => ({
        size: Math.random() * 14 + 18,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: 20 + Math.random() * 20,
        delay: Math.random() * 4,
        opacity: Math.random() * 0.25 + 0.15,
      })),
    []
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background:
              i % 3 === 0
                ? "rgba(200,167,94,0.6)"
                : "rgba(255,255,255,0.35)",
            filter: "blur(22px)",
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, i % 2 ? 14 : -14, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
