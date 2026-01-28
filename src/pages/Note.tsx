import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations/variants";
import { FiAward } from "react-icons/fi";

export default function Note() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen flex items-center justify-center px-6 bg-background overflow-hidden py-24"
    >
      {/* Decorative background */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 blur-[120px] rounded-full" />

      <motion.div
        variants={fadeUp}
        className="relative z-10 max-w-2xl w-full"
      >
        <div className="glass p-12 md:p-16 rounded-[2.5rem] border border-secondary/10 shadow-2xl relative overflow-hidden bg-primary/40">
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-secondary via-secondary-light to-secondary-dark" />

          <motion.div
            variants={fadeUp}
            className="flex justify-center mb-8"
          >
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shadow-inner border border-secondary/20">
              <FiAward className="text-3xl" />
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl font-bold text-secondary-light text-center mb-8"
          >
            <span className="text-secondary italic">Note From My Heart</span>
          </motion.h1>

          <div className="space-y-6 text-lg md:text-xl text-text-light leading-relaxed font-sans">
            <motion.p variants={fadeUp}>
              Junior,I hope this surprise makes you happy and feel special
            </motion.p>

            <motion.p variants={fadeUp}>
              I'm so grateful to have you in my life. You're an amazing person too as well.
              I made this wishes website to show my appreciation for you and to let you know how much you mean to me.
            </motion.p>

            <motion.p variants={fadeUp}>
              I know we dont many more moments that we celebrated together but the bond we shared is still special to me and I'll always cherish it.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            className="mt-12 text-center"
          >
            <div className="h-px w-24 bg-secondary/20 mx-auto mb-6" />
            <p className="font-serif text-2xl text-secondary font-bold tracking-widest uppercase">Best Wishes,</p>
            <p className="font-sans text-sm text-text-light/60 uppercase tracking-widest mt-1">Reflections</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
