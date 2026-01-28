import { motion } from "framer-motion";
import { useMemo } from "react";

export default function ParticleBackground() {
  const particles = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 5 + Math.random() * 10,
      delay: Math.random() * 5,
      opacity: 0.1 + Math.random() * 0.3,
      moveX: Math.random() * 100 - 50,
      moveY: Math.random() * 100 - 50,
    }));
  }, []);

  const orbs = useMemo(() => {
    return Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      size: 200 + Math.random() * 300,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 5,
      color: i % 2 === 0 ? "rgba(200, 167, 94, 0.03)" : "rgba(125, 211, 252, 0.03)",
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#020617]">
      {/* 🌌 DEPTH ORBS */}
      {orbs.map((orb) => (
        <motion.div
          key={`orb-${orb.id}`}
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute rounded-full blur-[100px]"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            backgroundColor: orb.color,
          }}
        />
      ))}

      {/* ✨ TWINKLING & DRIFTING PARTICLES */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [p.opacity, p.opacity * 2, p.opacity],
            x: [0, p.moveX, 0],
            y: [0, p.moveY, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-secondary/40"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            boxShadow: `0 0 8px rgba(200, 167, 94, 0.4)`,
          }}
        />
      ))}

      {/* 🌠 RARE SHOOTING STAR EFFECT */}
      <motion.div
        animate={{
          x: [-100, 1000],
          y: [-100, 800],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 8,
          ease: "easeIn",
        }}
        className="absolute w-1 h-1 bg-white rotate-[35deg] shadow-[0_0_20px_white]"
        style={{ top: "10%", left: "0%" }}
      />
    </div>
  );
}
