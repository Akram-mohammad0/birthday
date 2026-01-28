import { motion } from "framer-motion";

type Props = {
  lit: boolean;
  cut: boolean;
};

export default function Cake3D({ lit, cut }: Props) {
  return (
    <div className="relative w-[320px] md:w-[380px]">
      {/* LEFT HALF */}
      <motion.div
        animate={cut ? { x: -60, rotate: -2 } : { x: 0, rotate: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 18 }}
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to right, black 0%, black 50%, transparent 52%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, black 50%, transparent 52%)",
        }}
      >
        <img src="/cake-3d.png" alt="Cake" />
      </motion.div>

      {/* RIGHT HALF */}
      <motion.div
        animate={cut ? { x: 60, rotate: 2 } : { x: 0, rotate: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 18 }}
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to left, black 0%, black 50%, transparent 52%)",
          WebkitMaskImage:
            "linear-gradient(to left, black 0%, black 50%, transparent 52%)",
        }}
      >
        <img src="/cake-3d.png" alt="Cake" />
      </motion.div>

      {/* CANDLE FLAME */}
      {lit && !cut && (
        <motion.div
          className="absolute top-[18%] left-1/2 -translate-x-1/2"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        >
          <div className="w-3 h-6 rounded-full bg-gradient-to-b from-white via-yellow-400 to-orange-500 blur-[1px]" />
          <div className="absolute inset-0 blur-xl bg-yellow-400/40" />
        </motion.div>
      )}
    </div>
  );
}
