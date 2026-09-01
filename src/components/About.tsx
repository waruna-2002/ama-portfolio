"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, CheckCircle2, User, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function About() {
  const photos = personalInfo.galleryPhotos || ["/ama.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slideshow timer (changes photo every 3.0 seconds)
  useEffect(() => {
    if (isPaused || photos.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, photos.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-[#49769F]/20 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Large Interactive Animated Photo Gallery Slideshow */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="bg-[#0A4174]/60 border border-[#49769F]/30 rounded-3xl p-4 sm:p-6 shadow-2xl relative overflow-hidden group hover:border-[#7BBDE8]/50 transition-all flex flex-col justify-between backdrop-blur-md"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#7BBDE8]/10 rounded-full blur-3xl group-hover:bg-[#7BBDE8]/15 transition-all pointer-events-none" />

          {/* Clean Header Badge */}
          <div className="flex items-center justify-between relative z-10 mb-4 px-2">
            <span className="text-xs font-mono text-[#7BBDE8] bg-[#7BBDE8]/15 px-3.5 py-1 rounded-full border border-[#7BBDE8]/30 flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" /> PHOTO GALLERY
            </span>
            <User className="w-5 h-5 text-[#7BBDE8]" />
          </div>

          {/* Large Main Photo Frame with Uncropped Display & Ambient Blur Backdrop */}
          <div className="relative w-full h-[460px] sm:h-[520px] rounded-2xl overflow-hidden bg-[#001328] border border-[#49769F]/30 shadow-inner group flex items-center justify-center">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.04, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.96, filter: "blur(4px)" }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden p-2"
              >
                {/* Soft Blurred Background Ambient Color Fill matching photo */}
                <img
                  src={photos[currentIndex]}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110 pointer-events-none"
                />

                {/* Crisp Main Uncropped Photo (shows 100% of person & face) */}
                <img
                  src={photos[currentIndex]}
                  alt={personalInfo.name}
                  className="relative z-10 max-w-full max-h-full object-contain drop-shadow-2xl rounded-xl"
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient Overlay & Clean Caption */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#001328] via-[#001328]/70 to-transparent flex items-end justify-between p-4 z-20 pointer-events-none">
              <div className="space-y-0.5">
                <p className="text-sm font-bold text-white tracking-wide">{personalInfo.name}</p>
                <p className="text-xs font-mono text-[#7BBDE8]">{personalInfo.degree}</p>
              </div>
            </div>

            {/* Previous Photo Arrow Button */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#001328]/80 text-white border border-[#49769F]/40 hover:bg-[#7BBDE8] hover:text-[#001D39] transition-all opacity-80 hover:opacity-100 z-30 shadow-lg"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Photo Arrow Button */}
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#001328]/80 text-white border border-[#49769F]/40 hover:bg-[#7BBDE8] hover:text-[#001D39] transition-all opacity-80 hover:opacity-100 z-30 shadow-lg"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Active Photo Progress Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-30 bg-[#001328]/80 px-3 py-1.5 rounded-full backdrop-blur-md border border-[#49769F]/30">
              {photos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? "w-6 bg-[#7BBDE8] shadow-sm shadow-[#7BBDE8]"
                      : "w-2 bg-[#49769F] hover:bg-[#6EA2B3]"
                  }`}
                  aria-label={`Go to photo ${idx + 1}`}
                />
              ))}
            </div>

          </div>

          {/* Bottom Academic Highlights */}
          <div className="grid grid-cols-2 gap-4 border-t border-[#49769F]/30 pt-4 mt-4 relative z-10">
            <div className="text-center border-r border-[#49769F]/30 pr-2">
              <span className="text-base font-bold font-mono text-[#7BBDE8]">SLTC</span>
              <span className="block text-[10px] font-mono text-[#6EA2B3]">RESEARCH UNIVERSITY</span>
            </div>
            <div className="text-center pl-2">
              <span className="text-base font-bold font-mono text-[#7BBDE8]">FASHION</span>
              <span className="block text-[10px] font-mono text-[#6EA2B3]">MERCHANDISING</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Detailed Bio & Education */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase text-[#7BBDE8]">
              About Me
            </h2>
            <p className="text-xs font-mono text-[#6EA2B3] uppercase tracking-widest">
              Passionate &amp; Results-Driven Apparel Merchandise Specialist
            </p>
          </div>

          <p className="text-[#BDD8E9] leading-relaxed font-light text-sm sm:text-base">
            {personalInfo.bioParagraph1}
          </p>

          <p className="text-[#6EA2B3] text-sm leading-relaxed">
            {personalInfo.bioParagraph2}
          </p>

          {/* Education Box */}
          <div className="pt-2 space-y-4">
            <h3 className="text-xs font-mono text-[#7BBDE8] uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4" /> HIGHER EDUCATION
            </h3>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-[#0A4174]/70 border border-[#49769F]/40 p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg hover:border-[#7BBDE8]/50 transition-colors"
            >
              <div className="space-y-1">
                <p className="text-base font-semibold text-white">{personalInfo.degree}</p>
                <p className="text-xs text-[#BDD8E9] font-mono flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7BBDE8]" /> {personalInfo.university}
                </p>
              </div>
              <span className="text-xs font-mono text-[#7BBDE8] bg-[#7BBDE8]/15 px-3 py-1 rounded-full border border-[#7BBDE8]/30">
                {personalInfo.status}
              </span>
            </motion.div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}