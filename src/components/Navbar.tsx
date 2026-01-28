import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FiHome,
  FiStar,
  FiBookOpen,
  FiMoon,
  FiZap,
  FiGift
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

export const links = [
  { label: "Home", to: "/", icon: FiHome },
  { label: "Wishes", to: "/wishes", icon: FiStar },
  { label: "Note", to: "/note", icon: FiBookOpen },
  { label: "For You", to: "/about", icon: FiMoon },
  { label: "Final", to: "/final", icon: FiZap },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center
        ${scrolled
          ? "h-16 bg-primary/80 backdrop-blur-xl border-b border-secondary/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "h-20 bg-transparent"}
      `}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* LEFT: ICON + PREMIUM TYPOGRAPHY */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 15 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-tr from-secondary to-secondary-dark flex items-center justify-center text-primary shadow-[0_0_15px_rgba(200,167,94,0.3)]"
          >
            <FiGift className="text-2xl" />
          </motion.div>
          <span className="font-serif text-2xl font-bold tracking-tight text-secondary-light group-hover:text-secondary transition-colors">
            Birthday<span className="text-secondary ml-1 group-hover:text-secondary-light transition-colors">Wishes</span>
          </span>
        </NavLink>

        {/* RIGHT PART: SECTIONS + DROPDOWN */}
        <div className="flex items-center gap-10">
          {/* DESKTOP SECTIONS WITH ICONS */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map(({ label, to, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `
                    relative flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-300
                    ${isActive ? "text-secondary" : "text-white/40 hover:text-white"}
                  `
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon className={`text-base ${isActive ? "opacity-100" : "opacity-40"}`} />
                    <span>{label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-glow-line"
                        className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-secondary shadow-[0_0_10px_rgba(200,167,94,0.5)] rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* TWO LINES TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="relative w-10 h-10 flex flex-col items-center justify-center gap-[7px] group focus:outline-none"
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 4.5 : 0, width: open ? "28px" : "24px" }}
              className="h-[2px] bg-secondary rounded-full origin-center group-hover:bg-secondary-light transition-colors shadow-sm"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -4.5 : 0, width: open ? "28px" : "24px" }}
              className="h-[2px] bg-secondary rounded-full origin-center group-hover:bg-secondary-light transition-colors shadow-sm"
            />
          </button>
        </div>

        {/* RIGHT-SIDE DROPDOWN BOX */}
        <AnimatePresence>
          {open && <MobileMenu onClose={() => setOpen(false)} />}
        </AnimatePresence>
      </div>
    </header>
  );
}
