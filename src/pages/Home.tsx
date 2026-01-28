import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground";
import IntroAnimation from "../components/IntroAnimation";

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <IntroAnimation />
      {/* 🌌 REFINED BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
        {/* Subtle Ambient Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        {/* Overlay for legibility */}
        <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* REFINED EYEBROW */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 mb-8 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-[11px] font-bold uppercase tracking-[0.4em]"
        >
          A Grand Celebration
        </motion.div>

        {/* STABLE TYPOGRAPHY HERO */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] tracking-tight"
          >
            The Day is <br />
            <span className="text-gradient">Finally Here.</span>
          </motion.h1>
        </div>

        {/* BALANCED SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl mx-auto text-base md:text-lg text-text-light font-normal leading-relaxed mb-12 opacity-80"
        >
          Welcome to a curated digital experience crafted to celebrate
          another remarkable year. Every moment here is dedicated
          to making your day unforgettable.
        </motion.p>

        {/* CLEAN CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <NavLink
            to="/wishes"
            className="group inline-flex items-center gap-4 px-10 py-4 bg-secondary text-primary rounded-full font-bold text-base transition-all duration-300 hover:bg-secondary-light hover:shadow-2xl hover:-translate-y-0.5"
          >
            Tap Here
            <FiZap className="group-hover:scale-125 transition-transform" />
          </NavLink>
        </motion.div>
      </div>

      {/* AMBIENT FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
