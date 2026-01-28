import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { links } from "./Navbar";

type Props = {
  onClose: () => void;
};

export default function MobileMenu({ onClose }: Props) {
  const location = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-20 right-6 md:right-12 w-64 bg-primary/98 backdrop-blur-2xl border border-secondary/20 rounded-2xl shadow-2xl z-40 overflow-hidden"
    >
      <div className="flex flex-col p-2 gap-1">
        {links.map(({ label, to, icon: Icon }, i) => {
          const isActive = location.pathname === to;

          return (
            <motion.div
              key={to}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.03 }}
            >
              <Link
                to={to}
                onClick={onClose}
                className={`
                  group flex items-center gap-3.5 px-4 py-2.5 rounded-xl transition-all
                  ${isActive
                    ? 'bg-secondary text-primary'
                    : 'hover:bg-white/5 text-text/70 hover:text-white'}
                `}
              >
                <div className={`
                  w-8 h-8 rounded-lg flex items-center justify-center transition-all
                  ${isActive ? 'bg-primary text-secondary shadow-md' : 'bg-white/5 text-secondary group-hover:bg-secondary/10'}
                `}>
                  <Icon className="text-base" />
                </div>

                <span className={`text-sm font-semibold tracking-wide ${isActive ? 'text-primary' : 'text-text/80 group-hover:text-white'}`}>
                  {label}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="active-tick"
                    className="ml-auto w-1 h-4 rounded-full bg-primary/40"
                  />
                )}
              </Link>
            </motion.div>
          )
        })}
      </div>

      {/* Small Decorative Branding */}
      <div className="bg-secondary/5 px-4 py-2 border-t border-white/5 text-center">
        <span className="text-[8px] uppercase tracking-[0.2em] text-white/20 font-bold">
          Birthday Wishes
        </span>
      </div>
    </motion.div>
  );
}
