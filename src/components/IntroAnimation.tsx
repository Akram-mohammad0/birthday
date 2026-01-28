import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { GiStarsStack, GiFallingStar, GiHearts } from "react-icons/gi";
import { HiSparkles } from "react-icons/hi2";
import type { Variants } from "framer-motion";

const slamEntry = (delay: number): Variants => ({
    initial: {
        y: 40,
        opacity: 0,
        scale: 0.7,
        rotateX: -45
    },
    animate: (i: number) => ({
        y: 0,
        opacity: 1,
        scale: 1,
        rotateX: 0,
        transition: {
            type: "spring" as const,
            stiffness: 260,
            damping: 20,
            delay: delay + i * 0.04,
        },
    }),
});


interface Props {
    isPersistent?: boolean;
}

export default function IntroAnimation({ isPersistent = false }: Props) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (isPersistent) return;
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 9500);
        return () => clearTimeout(timer);
    }, [isPersistent]);

    const line1 = "URSTRULY AKRAM".split("");
    const line2 = "WISHES YOU".split("");
    const happy = "HAPPY".split("");
    const birthday = "BIRTHDAY".split("");
    const junior = "SADIYA".split("");

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020617] overflow-hidden perspective-[1200px]"
                >
                    {/* 🌌 AMBIENT ATMOSPHERE */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(200,167,94,0.1)_0%,_transparent_80%)]" />

                    <div className="relative z-10 text-center flex flex-col items-center px-4 w-full h-full justify-center">

                        {/* 🏷️ STAGE 1: THE TWO-LINE GOLD GREETING */}
                        <div className="flex flex-col items-center gap-1 mb-6 md:mb-10 w-full overflow-hidden">
                            {/* Line 1: URSTRULY AKRAM */}
                            <div className="flex flex-wrap justify-center">
                                {line1.map((char, i) => (
                                    <motion.span
                                        key={`l1-${i}`}
                                        custom={i}
                                        variants={slamEntry(0.5)}
                                        initial="initial"
                                        animate="animate"
                                        className="font-sans font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF5] to-[#C8A75E] tracking-[0.2em] uppercase mr-1"
                                        style={{ filter: "drop-shadow(0 0 10px rgba(200, 167, 94, 0.3))" }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </div>

                            {/* Line 2: WISHES YOU A */}
                            <div className="flex flex-wrap justify-center">
                                {line2.map((char, i) => (
                                    <motion.span
                                        key={`l2-${i}`}
                                        custom={i}
                                        variants={slamEntry(0.9)}
                                        initial="initial"
                                        animate="animate"
                                        className="font-sans font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF5] to-[#C8A75E] tracking-[0.2em] uppercase mr-1"
                                        style={{ filter: "drop-shadow(0 0 10px rgba(200, 167, 94, 0.3))" }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        {/* 🏆 COMPACT ICON REVEAL */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 2.2, type: "spring", stiffness: 150 }}
                            className="mb-4 md:mb-8 text-secondary"
                        >
                            <GiStarsStack className="text-4xl md:text-6xl drop-shadow-[0_0_15px_#C8A75E]" />
                        </motion.div>

                        {/* 👑 STAGE 2: THE CELEBRATION (COMPACTED FOR LAPTOPS) */}
                        <div className="flex flex-col items-center gap-0 select-none w-full max-h-[60vh] md:max-h-none">

                            {/* HAPPY */}
                            <div className="flex flex-wrap justify-center overflow-hidden h-auto py-1">
                                {happy.map((char, i) => (
                                    <motion.span
                                        key={i}
                                        custom={i}
                                        variants={slamEntry(3.2)}
                                        initial="initial"
                                        animate="animate"
                                        className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF5] via-[#E6D29F] to-[#C8A75E] drop-shadow-2xl px-0.5 leading-none"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </div>

                            {/* BIRTHDAY */}
                            <div className="flex flex-wrap justify-center overflow-hidden h-auto py-1">
                                {birthday.map((char, i) => (
                                    <motion.span
                                        key={i}
                                        custom={i + 5}
                                        variants={slamEntry(3.7)}
                                        initial="initial"
                                        animate="animate"
                                        className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF5] via-[#E6D29F] to-[#C8A75E] drop-shadow-2xl px-0.5 leading-none"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </div>

                            {/* JUNIOR */}
                            <div className="flex flex-wrap justify-center overflow-hidden h-auto py-1">
                                {junior.map((char, i) => (
                                    <motion.span
                                        key={i}
                                        custom={i + 13}
                                        variants={slamEntry(4.2)}
                                        initial="initial"
                                        animate="animate"
                                        className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF5] via-[#E6D29F] to-[#C8A75E] drop-shadow-2xl px-0.5 leading-none"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 🌟 CELESTIAL CORNER ACCENTS */}
                    <div className="absolute inset-0 pointer-events-none opacity-20 flex justify-between items-start p-6 md:p-12">
                        <motion.div
                            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="text-secondary"
                        >
                            <GiFallingStar className="text-[60px] md:text-[140px] rotate-[-15deg] hidden sm:block" />
                        </motion.div>
                        <motion.div
                            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="text-secondary mt-auto"
                        >
                            <GiHearts className="text-[50px] md:text-[120px] rotate-[15deg] hidden sm:block" />
                        </motion.div>
                    </div>

                    {/* GOLD DUST MIST */}
                    {[...Array(25)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: "10vh" }}
                            animate={{ opacity: [0, 0.6, 0], y: "-40vh" }}
                            transition={{ duration: 5, repeat: Infinity, delay: Math.random() * 8, ease: "linear" }}
                            className="absolute text-secondary/30"
                            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
                        >
                            <HiSparkles size={Math.random() * 10 + 2} />
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
