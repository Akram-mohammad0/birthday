import { motion } from "framer-motion";

type Props = {
  candleLit: boolean;
  cut: boolean;
};

export default function CakeScene({ candleLit, cut }: Props) {
  return (
    <svg
      width="420"
      height="320"
      viewBox="0 0 420 320"
      xmlns="http://www.w3.org/2000/svg"
      className="select-none"
    >
      <defs>
        {/* Sponge */}
        <linearGradient id="sponge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f7d89c" />
          <stop offset="70%" stopColor="#e5ae55" />
          <stop offset="100%" stopColor="#c88a2e" />
        </linearGradient>

        {/* Cream */}
        <linearGradient id="cream" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fffdf8" />
          <stop offset="100%" stopColor="#e9dcc0" />
        </linearGradient>

        {/* Top frosting */}
        <linearGradient id="frosting" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f3e6c9" />
        </linearGradient>

        {/* Flame */}
        <radialGradient id="flame">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#ffd166" />
          <stop offset="100%" stopColor="#f59e0b" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse
        cx="210"
        cy="265"
        rx="150"
        ry="22"
        fill="rgba(0,0,0,0.35)"
      />

      {/* LEFT HALF */}
      <motion.g
        animate={cut ? { x: -60, y: 10 } : { x: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 18 }}
      >
        {/* Sponge */}
        <rect
          x="40"
          y="170"
          width="170"
          height="60"
          rx="30"
          fill="url(#sponge)"
        />

        {/* Cream */}
        <rect
          x="40"
          y="145"
          width="170"
          height="30"
          rx="15"
          fill="url(#cream)"
        />

        {/* Frosting */}
        <path
          d="
            M40 145
            Q60 125 80 145
            Q100 125 120 145
            Q140 125 160 145
            Q180 125 210 145
            Z
          "
          fill="url(#frosting)"
        />
      </motion.g>

      {/* RIGHT HALF */}
      <motion.g
        animate={cut ? { x: 60, y: 10 } : { x: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 18 }}
      >
        <rect
          x="210"
          y="170"
          width="170"
          height="60"
          rx="30"
          fill="url(#sponge)"
        />

        <rect
          x="210"
          y="145"
          width="170"
          height="30"
          rx="15"
          fill="url(#cream)"
        />

        <path
          d="
            M210 145
            Q230 125 250 145
            Q270 125 290 145
            Q310 125 330 145
            Q350 125 380 145
            Z
          "
          fill="url(#frosting)"
        />
      </motion.g>

      {/* Candle */}
      {!cut && (
        <>
          <rect
            x="206"
            y="90"
            width="8"
            height="55"
            rx="4"
            fill="#f8fafc"
          />

          {candleLit && (
            <>
              {/* Flame */}
              <motion.ellipse
                cx="210"
                cy="78"
                rx="7"
                ry="14"
                fill="url(#flame)"
                animate={{
                  scaleY: [1, 1.25, 1],
                  scaleX: [1, 0.85, 1],
                }}
                transition={{ duration: 0.55, repeat: Infinity }}
              />

              {/* Glow */}
              <motion.ellipse
                cx="210"
                cy="82"
                rx="26"
                ry="32"
                fill="rgba(255,200,120,0.25)"
                animate={{ opacity: [0.35, 0.6, 0.35] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </>
          )}
        </>
      )}
    </svg>
  );
}
