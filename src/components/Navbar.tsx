"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { navLinks, personalInfo } from "@/data/portfolioData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section scrollspy detection
      const sections = navLinks.map((link) => link.id);
      const scrollPosition = window.scrollY + 200;

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
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#001328]/95 backdrop-blur-xl border-b border-[#49769F]/30 shadow-2xl shadow-[#001328]/50 py-3"
          : "bg-[#001D39]/70 backdrop-blur-md border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="group flex items-center gap-2 text-2xl font-extrabold tracking-tight text-white">
          <motion.span 
            whileHover={{ scale: 1.05 }} 
            className="text-white flex items-center gap-1"
          >
            Ama<span className="text-[#7BBDE8] animate-pulse">.</span>
          </motion.span>
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#6EA2B3] group-hover:text-[#7BBDE8] transition-colors hidden sm:inline-block">
            PORTFOLIO
          </span>
        </a>

        {/* Desktop Navigation with Scrollspy Active State */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0A4174]/60 p-1.5 rounded-full border border-[#49769F]/40 shadow-inner backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors ${
                  isActive ? "text-[#001D39]" : "text-[#BDD8E9] hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="topNavActive"
                    className="absolute inset-0 bg-[#7BBDE8] rounded-full shadow-md shadow-[#7BBDE8]/30 z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Button: Download CV */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.cvDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#7BBDE8]/15 text-[#7BBDE8] border border-[#7BBDE8]/40 text-xs font-mono font-semibold hover:bg-[#7BBDE8] hover:text-[#001D39] transition-all shadow-sm shadow-[#7BBDE8]/10"
          >
            <FileText className="w-3.5 h-3.5" /> Download CV
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#0A4174] border border-[#49769F]/40 text-[#BDD8E9] hover:text-[#7BBDE8]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#001328]/95 border-b border-[#49769F]/30 px-6 py-6 backdrop-blur-xl space-y-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all flex items-center justify-between ${
                      isActive
                        ? "bg-[#7BBDE8] text-[#001D39] font-bold shadow-md shadow-[#7BBDE8]/20"
                        : "text-[#BDD8E9] hover:bg-white/5 hover:text-[#7BBDE8]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-[#001D39]" />
                    ) : (
                      <span className="text-xs font-mono text-[#7BBDE8]/50">&rarr;</span>
                    )}
                  </a>
                );
              })}
            </div>

            <div className="pt-2 border-t border-[#49769F]/30">
              <a
                href={personalInfo.cvDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-xl bg-[#7BBDE8] text-[#001D39] font-bold text-xs text-center flex items-center justify-center gap-1.5 shadow-md"
              >
                <FileText className="w-4 h-4" /> Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}