"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  User, 
  Cpu, 
  Sparkles, 
  Building2, 
  Calculator, 
  Mail
} from "lucide-react";
import { navLinks } from "@/data/portfolioData";

const iconMap: Record<string, React.ReactNode> = {
  home: <Home className="w-4 h-4" />,
  about: <User className="w-4 h-4" />,
  skills: <Cpu className="w-4 h-4" />,
  projects: <Sparkles className="w-4 h-4" />,
  exposure: <Building2 className="w-4 h-4" />,
  "costing-calculator": <Calculator className="w-4 h-4" />,
  contact: <Mail className="w-4 h-4" />,
};

export default function FloatingSideNav() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 220);

      const sections = navLinks.map((link) => link.id);
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 50, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-3"
        >
          {/* Main Floating Side Menu Bar */}
          <div className="bg-[#001328]/90 border border-[#49769F]/40 p-2 rounded-2xl backdrop-blur-xl shadow-2xl shadow-[#001328]/80 flex flex-col items-center gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className="relative group p-2.5 rounded-xl transition-all duration-300 flex items-center justify-center"
                  aria-label={link.label}
                >
                  {/* Glowing Active Background */}
                  {isActive && (
                    <motion.div
                      layoutId="sideNavActive"
                      className="absolute inset-0 bg-[#7BBDE8] rounded-xl shadow-lg shadow-[#7BBDE8]/40 z-0"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  {/* Icon */}
                  <span
                    className={`relative z-10 transition-colors ${
                      isActive ? "text-[#001D39] font-bold" : "text-[#6EA2B3] group-hover:text-[#7BBDE8]"
                    }`}
                  >
                    {iconMap[link.id] || <Home className="w-4 h-4" />}
                  </span>

                  {/* Tooltip Hover Label */}
                  <div className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#0A4174] border border-[#49769F]/40 text-[#BDD8E9] text-xs font-medium shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap flex items-center gap-1.5 z-20">
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7BBDE8] animate-ping" />
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
