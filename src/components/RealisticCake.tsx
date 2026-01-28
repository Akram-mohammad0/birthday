import { motion, AnimatePresence } from "framer-motion";

interface Props {
    lit: boolean;
    cut: boolean;
    showKnife?: boolean;
}

export default function RealisticCake({ lit, cut, showKnife }: Props) {
    // Ultra-realistic cream palette
    const white = "#FFFFFF";
    const cream = "#FFFDF5";
    const shadow = "#E8E4D9";

    return (
        <div className="relative flex flex-col items-center justify-end h-[420px] w-[300px] perspective-[1000px]">

            {/* 🍽️ LUXURY PLATE */}
            <div className="absolute bottom-0 w-[320px] h-10 bg-gradient-to-b from-white via-gray-200 to-gray-400 rounded-[100%] shadow-2xl border-b-4 border-black/10" />

            {/* 🎂 THREE-TIERED WHITE STEP CAKE */}
            <div className="relative flex flex-col items-center mb-6">

                {/* TOP TIER (Step 3) - CANDLE MUST BE HERE */}
                <div
                    className="relative z-30 w-24 h-16 rounded-t-lg shadow-md border-b border-black/5 flex flex-col items-center"
                    style={{ background: `linear-gradient(135deg, ${white} 0%, ${cream} 50%, ${shadow} 100%)` }}
                >
                    {/* Top Surface */}
                    <div className="absolute top-0 w-full h-4 bg-gradient-to-b from-white/80 to-transparent" />

                    {/* THE INSERTED CANDLE - ANCHORED ON THE THIRD STEP (TOP LAYER) */}
                    <AnimatePresence>
                        {!cut && (
                            <motion.div
                                key="candle"
                                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0, y: -40 }}
                                transition={{ duration: 0.8 }}
                                className="absolute top-[-38px] z-50 flex flex-col items-center pointer-events-none"
                            >
                                {/* 🕯️ FLAME */}
                                <div className="h-10 flex items-end justify-center mb-1">
                                    <AnimatePresence>
                                        {lit && (
                                            <motion.div
                                                key="flame"
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0, opacity: 0 }}
                                            >
                                                <motion.div
                                                    animate={{
                                                        scale: [1, 1.25, 0.9, 1.1, 1],
                                                        rotate: [-2, 2, -1, 1, 0],
                                                        y: [0, -4, 0]
                                                    }}
                                                    transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                                                    className="w-4 h-9 bg-gradient-to-t from-orange-600 via-yellow-400 to-white rounded-full blur-[0.5px] shadow-[0_0_25px_rgba(255,140,0,0.9)]"
                                                />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* 🕯️ CANDLE BODY (Gold) */}
                                <div className="relative w-3 h-12 bg-gradient-to-b from-secondary via-secondary-dark to-secondary rounded-full border border-white/30 shadow-md">
                                    {/* Wick */}
                                    <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 w-[1px] h-3 bg-[#111] rounded-t-full" />
                                    <div className="absolute inset-y-0 left-0.5 w-[0.8px] bg-white/40 blur-[0.3px]" />
                                </div>

                                {/* Grounding shadow on the top tier surface */}
                                <div className="w-4 h-1 bg-black/10 blur-[1px] -mt-0.5 rounded-full" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* MIDDLE TIER (Step 2) */}
                <div
                    className="relative z-20 w-36 h-20 -mt-1 shadow-lg border-b border-black/5"
                    style={{ background: `linear-gradient(135deg, ${cream} 0%, ${shadow} 100%)` }}
                >
                    <div className="absolute top-0 w-full h-4 bg-gradient-to-b from-black/10 to-transparent" />
                </div>

                {/* BOTTOM TIER (Step 1) */}
                <div
                    className="relative z-10 w-48 h-24 -mt-1 rounded-b shadow-xl"
                    style={{ background: `linear-gradient(135deg, ${cream} 0%, ${shadow} 100%)` }}
                >
                    <div className="absolute top-0 w-full h-4 bg-gradient-to-b from-black/15 to-transparent" />
                </div>

                {/* 🔪 THE REALISTIC CUT SLICE (Delayed until knife finishes cutting) */}
                <AnimatePresence>
                    {cut && (
                        <motion.div
                            initial={{ x: 0, opacity: 0 }}
                            animate={{ x: 60, y: 15, rotate: 15, opacity: 1 }}
                            transition={{ delay: 2, duration: 2.5, ease: [0.16, 1, 0.3, 1] }} // Heavy delay
                            className="absolute top-0 right-[-10px] z-40 w-24 h-20 shadow-2xl origin-left rounded-sm"
                            style={{ background: cream, clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}
                        >
                            <div className="absolute inset-y-0 left-0 w-3 bg-[#FFF9E1] flex flex-col">
                                <div className="flex-1 border-b border-secondary/10" />
                                <div className="flex-1 border-b border-secondary/10" />
                                <div className="flex-1" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 🔪 CUSTOM GOLD SERRATED KNIFE (from reference image) */}
                <AnimatePresence>
                    {showKnife && (
                        <motion.div
                            initial={{ opacity: 0, x: 150, y: -40, rotate: 30 }}
                            animate={cut
                                ? {
                                    x: [100, 40, 40, 100],
                                    y: [-40, -10, 50, 60],
                                    rotate: [30, 0, 0, 15],
                                    opacity: [1, 1, 1, 0]
                                }
                                : { opacity: 1, x: 100, y: -40, rotate: 30 }
                            }
                            exit={{ opacity: 0 }}
                            transition={cut
                                ? { duration: 4, times: [0, 0.3, 0.7, 1], ease: "easeInOut" }
                                : { duration: 0.5 }
                            }
                            className="absolute z-[100] pointer-events-none pr-10"
                        >
                            {/* COMPOSITE GOLD KNIFE */}
                            <div className="relative flex items-center h-12">
                                {/* 🏷️ HANDLE (Skeletal Gold Design) */}
                                <div className="relative w-20 h-8 flex items-center justify-start scale-x-[-1]">
                                    <div className="absolute inset-0 border-2 border-secondary rounded-r-full skew-x-[-10deg] flex justify-around items-center px-1">
                                        <div className="w-1 h-3 bg-secondary/40 rounded-full" />
                                        <div className="w-1 h-3 bg-secondary/40 rounded-full" />
                                        <div className="w-1 h-3 bg-secondary/40 rounded-full" />
                                    </div>
                                    {/* Guard */}
                                    <div className="absolute right-[-4px] w-2 h-10 bg-secondary rounded-full border border-secondary/50" />
                                </div>

                                {/* 🔪 BLADE (Gold Serrated) */}
                                <div className="relative w-28 h-6 bg-gradient-to-b from-secondary via-secondary-light to-secondary-dark rounded-r-[40px] shadow-lg flex items-end">
                                    {/* Serrations */}
                                    <div className="absolute bottom-[-4px] w-full flex justify-between px-2 opacity-80 scale-y-[-1]">
                                        {[...Array(15)].map((_, i) => (
                                            <div key={i} className="w-2 h-2 bg-secondary border-t border-secondary-dark" style={{ clipPath: 'polygon(50% 0, 0 100%, 100% 100%)' }} />
                                        ))}
                                    </div>
                                    {/* Blade Shine */}
                                    <div className="absolute top-1 left-2 w-[80%] h-[1px] bg-white/40 blur-[0.5px]" />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>

            {/* AMBIENT GLOW */}
            <div className="absolute inset-0 bg-secondary/5 blur-[100px] rounded-full pointer-events-none -z-10" />
        </div>
    );
}
