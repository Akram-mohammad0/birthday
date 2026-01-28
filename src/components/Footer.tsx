import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative py-8 bg-background overflow-hidden border-t border-white/5">
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* THE QUOTE (Compact version) */}
          <p className="font-serif text-lg text-secondary/60 italic leading-snug">
            "May your journey be as bright as the stars."
          </p>

          {/* PERSONAL NOTE */}
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-medium flex items-center gap-2">
            Made with <FiHeart className="text-secondary fill-secondary animate-pulse" /> for a special soul
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
