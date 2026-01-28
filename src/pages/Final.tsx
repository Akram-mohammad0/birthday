import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations/variants";
import { FiStar, FiAward } from "react-icons/fi";

export default function Finale() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-background py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(200,167,94,0.05),_transparent_70%)]" />

      <motion.div variants={fadeUp} className="mb-8 text-secondary">
        <FiAward className="text-6xl animate-pulse mx-auto" />
      </motion.div>

      <motion.h2
        variants={fadeUp}
        className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-secondary-light mb-4"
      >
        A Grand <br />
        <span className="text-gradient">Celebration.</span>
      </motion.h2>

      <motion.div
        variants={fadeUp}
        className="h-1.5 w-24 bg-gradient-to-r from-secondary to-secondary-dark rounded-full mb-10 mx-auto"
      />

      <motion.div
        variants={fadeUp}
        className="max-w-xl mx-auto space-y-6"
      >
        <p className="text-xl md:text-2xl text-text-light font-light leading-relaxed">
          May this year be filled with joy and
          unwavering progress.I hope this small digital tribute adds
          a touch of brilliance to your special day.
        </p>

        <p className="text-lg text-secondary font-medium tracking-widest uppercase">
          Excellence Awaits.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="mt-20 flex flex-col items-center"
      >
        <p className="text-sm text-text-light/40 uppercase tracking-[0.3em] mb-4">
          The Celebration Continues
        </p>
        <div className="flex gap-4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            >
              <FiStar className="text-secondary/20 text-2xl" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
