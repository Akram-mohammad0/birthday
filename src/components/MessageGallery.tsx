import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiX } from "react-icons/fi";

const MESSAGES = [
    {
        id: 1,
        sender: "Mom & Dad",
        text: "Happy Birthday our beautiful princess! Watching you grow has been our greatest joy. May your day be as sweet as you are.",
        color: "#e6d29f",
    },
    {
        id: 2,
        sender: "Bestie",
        text: "To my partner in crime: Another year older, but definitely not wiser! 😉 Hope you have the best day ever!",
        color: "#c8a75e",
    },
    {
        id: 3,
        sender: "The Gang",
        text: "Happy Birthday!! We can't wait to celebrate with you. Party time soon! 🥳",
        color: "#e6d29f",
    },
    {
        id: 4,
        sender: "Your Secret Admirer",
        text: "Wishing you a day filled with magic and sparkle. You deserve the world.",
        color: "#c8a75e",
    },
];

export default function MessageGallery({ onComplete }: { onComplete: () => void }) {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [readCount, setReadCount] = useState(0);
    const [readIds, setReadIds] = useState<number[]>([]);

    const handleOpen = (id: number) => {
        setSelectedId(id);
        if (!readIds.includes(id)) {
            setReadIds((prev) => [...prev, id]);
            setReadCount((prev) => prev + 1);
        }
    };

    const allRead = readCount === MESSAGES.length;

    return (
        <div className="w-full max-w-4xl mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-10"
            >
                <h2 className="font-display text-3xl md:text-4xl text-secondary mb-3">
                    Wishes from your favorite people
                </h2>
                <p className="text-text/60 text-sm tracking-widest uppercase">
                    Open every envelope
                </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {MESSAGES.map((msg) => (
                    <motion.button
                        key={msg.id}
                        layoutId={`card-${msg.id}`}
                        onClick={() => handleOpen(msg.id)}
                        className="relative group aspect-[4/3] flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            className="text-4xl text-secondary mb-2"
                            animate={readIds.includes(msg.id) ? { scale: 0.8, opacity: 0.5 } : {}}
                        >
                            <FiMail />
                        </motion.div>
                        <div className="text-sm font-medium text-text/80">{msg.sender}</div>

                        {readIds.includes(msg.id) && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full"
                            />
                        )}
                    </motion.button>
                ))}
            </div>

            <AnimatePresence>
                {selectedId && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedId(null)}>
                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className="relative w-full max-w-md bg-[#0f1d36] border border-secondary/30 p-8 rounded-2xl shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-4 right-4 text-text/50 hover:text-white"
                            >
                                <FiX size={24} />
                            </button>

                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center text-secondary mb-6">
                                    <FiMail size={32} />
                                </div>
                                <h3 className="font-display text-2xl text-secondary mb-4">
                                    {MESSAGES.find(m => m.id === selectedId)?.sender}
                                </h3>
                                <p className="text-text/90 leading-relaxed font-body text-lg italic">
                                    "{MESSAGES.find(m => m.id === selectedId)?.text}"
                                </p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <motion.div
                className="mt-12 text-center h-20"
                animate={{ opacity: allRead ? 1 : 0, y: allRead ? 0 : 20 }}
            >
                <button
                    disabled={!allRead}
                    onClick={onComplete}
                    className="
            px-8 py-3 rounded-full bg-secondary text-background font-bold tracking-wide
            shadow-[0_0_20px_rgba(200,167,94,0.4)]
            hover:scale-105 active:scale-95 transition-all
            disabled:opacity-0 disabled:pointer-events-none
          "
                >
                    Make your own wish
                </button>
            </motion.div>
        </div>
    );
}
