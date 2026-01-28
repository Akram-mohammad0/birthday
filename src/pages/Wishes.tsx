import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RealisticCake from "../components/RealisticCake";
import Crackers from "../components/Crackers";
import {
  FiStar,
  FiAward,
  FiPlay,
  FiArrowRight,
  FiZap,
  FiBox,
  FiWind
} from "react-icons/fi";
import { GiKitchenKnives } from "react-icons/gi";
import confetti from "canvas-confetti";

type Step =
  | "entry"
  | "wish"
  | "crackers"
  | "cake"
  | "light"
  | "blow"
  | "hold"
  | "cut"
  | "final";

const CelebrationButton = ({ onClick, children, icon: Icon }: any) => (
  <motion.button
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(200,167,94,0.4)" }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="
      group relative flex items-center gap-3 px-8 py-3.5 
      bg-secondary text-primary font-bold uppercase tracking-[0.15em] text-xs
      rounded-full transition-all duration-300
    "
  >
    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
    <span className="relative z-10">{children}</span>
    {Icon && <Icon className="relative z-10 text-base" />}
  </motion.button>
);

export default function Wishes() {
  const [step, setStep] = useState<Step>("entry");
  const [showContent, setShowContent] = useState(false);

  const freeStars = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      duration: 10 + Math.random() * 20,
    }));
  }, []);

  useEffect(() => {
    if (step === "crackers") {
      const t = setTimeout(() => setStep("cake"), 5000);
      return () => clearTimeout(t);
    }
  }, [step]);

  useEffect(() => {
    setShowContent(false);
    const t = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(t);
  }, [step]);

  const triggerConfetti = () => {
    const duration = 4 * 1000;
    const end = Date.now() + duration;
    (function frame() {
      confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors: ["#C8A75E", "#FFFFFF"] });
      confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors: ["#C8A75E", "#FFFFFF"] });
      if (Date.now() < end) requestAnimationFrame(frame);
    }());
  };

  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex items-center justify-center text-center px-6 pt-20 pb-12">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0F172A_0%,_#020617_100%)] opacity-95" />
        {freeStars.map((star) => (
          <motion.div
            key={star.id}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              x: [`${star.x}vw`, `${star.x + (Math.random() * 10 - 5)}vw`],
              y: [`${star.y}vh`, `${star.y + (Math.random() * 10 - 5)}vh`]
            }}
            transition={{ duration: star.duration, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
            className="absolute rounded-full bg-secondary"
            style={{ width: star.size, height: star.size }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === "entry" && (
          <motion.div key="entry" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, y: -20 }} className="relative z-10 max-w-2xl px-6 flex flex-col items-center">
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }} className="mb-10 text-secondary drop-shadow-[0_0_15px_rgba(200,167,94,0.3)]">
              <FiPlay className="text-7xl" />
            </motion.div>
            <h1 className="font-serif text-5xl md:text-7xl text-secondary-light mb-6 leading-tight">A Moment of <br /> <span className="text-secondary">Celebration.</span></h1>
            {showContent && <CelebrationButton onClick={() => setStep("wish")} icon={FiArrowRight}>Let's Begin</CelebrationButton>}
          </motion.div>
        )}

        {step === "wish" && (
          <motion.div key="wish" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="relative z-10 flex flex-col items-center">
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="mb-10 text-secondary drop-shadow-[0_0_20px_#C8A75E44]"><FiStar className="text-8xl" /></motion.div>
            <h2 className="font-serif text-4xl md:text-6xl text-secondary-light mb-6">Make a Wish</h2>
            {showContent && <div className="mt-12"><CelebrationButton onClick={() => setStep("crackers")} icon={FiZap}>Continue</CelebrationButton></div>}
          </motion.div>
        )}

        {step === "crackers" && (
          <motion.div key="crackers" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10">
            <Crackers />
            <motion.h2 animate={{ scale: [1, 1.05, 1], y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="font-serif text-5xl md:text-8xl text-secondary">CELEBRATE!</motion.h2>
          </motion.div>
        )}

        {step === "cake" && (
          <motion.div key="cake" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative z-10 flex flex-col items-center">
            <RealisticCake lit={false} cut={false} />
            <h2 className="font-serif text-4xl text-secondary-light mt-8 mb-8">The Grand Reveal</h2>
            {showContent && <CelebrationButton onClick={() => setStep("light")} icon={FiBox}>Light the Candle</CelebrationButton>}
          </motion.div>
        )}

        {step === "light" && (
          <motion.div key="light" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10 flex flex-col items-center">
            <RealisticCake lit={true} cut={false} />
            <h2 className="font-serif text-4xl text-secondary-light mt-8 mb-8 animate-pulse">A Shining Moment</h2>
            {showContent && <CelebrationButton onClick={() => { triggerConfetti(); setStep("blow"); }} icon={FiWind}>Blow Out Candle</CelebrationButton>}
          </motion.div>
        )}

        {step === "blow" && (
          <motion.div key="blow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10 flex flex-col items-center">
            <RealisticCake lit={false} cut={false} />
            <h2 className="font-serif text-4xl text-secondary-light mt-8 mb-8">Ready for the next step?</h2>
            {showContent && <CelebrationButton onClick={() => setStep("hold")} icon={GiKitchenKnives}>Hold the Knife</CelebrationButton>}
          </motion.div>
        )}

        {step === "hold" && (
          <motion.div key="hold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10 flex flex-col items-center">
            <RealisticCake lit={false} cut={false} showKnife={true} />
            <h2 className="font-serif text-4xl text-secondary-light mt-8 mb-8">You're ready!</h2>
            {showContent && <CelebrationButton onClick={() => { setStep("cut"); setTimeout(() => setStep("final"), 4000); }} icon={GiKitchenKnives}>Cut the Cake</CelebrationButton>}
          </motion.div>
        )}

        {step === "cut" && (
          <motion.div key="cut" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10 flex flex-col items-center">
            <RealisticCake lit={false} cut={true} showKnife={true} />
            <motion.h2 animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1 }} className="font-serif text-4xl text-secondary mt-12">Perfect!</motion.h2>
          </motion.div>
        )}

        {step === "final" && (
          <motion.div key="final" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 max-w-2xl px-6 flex flex-col items-center">
            <div className="mb-12 text-7xl text-secondary flex justify-center gap-8">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}><FiStar /></motion.div>
              <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}><FiAward /></motion.div>
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}><FiStar /></motion.div>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-secondary-light mb-6 leading-tight">Happy <br /> <span className="text-secondary drop-shadow-[0_0_20px_#C8A75E66]">Birthday!</span></h1>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="p-10 glass rounded-[2.5rem] border border-secondary/20 shadow-2xl">
              <p className="font-serif text-3xl text-secondary-light leading-snug">Here's to a <br /> brilliant year ahead.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
