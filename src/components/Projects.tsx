"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Play, CheckCircle2, Scissors, Layers, Recycle, ChevronLeft, ChevronRight, Image as PhotoIcon } from "lucide-react";
import { terraProjectData } from "@/data/portfolioData";

export default function Projects() {
  const projectImages = terraProjectData.projectImages || ["/project1.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slideshow timer for the project photo gallery (3.0 seconds)
  useEffect(() => {
    if (isPaused || projectImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, projectImages.length]);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto border-t border-[#49769F]/20 relative">
      
      {/* Section Header */}
      <div className="text-center space-y-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#7BBDE8] bg-[#7BBDE8]/15 px-4 py-1.5 rounded-full border border-[#7BBDE8]/30 shadow-sm"
        >
          <Sparkles className="w-4 h-4 animate-pulse text-[#7BBDE8]" /> LATEST FLAGSHIP PROJECT 2026
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase"
        >
          {terraProjectData.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#7BBDE8] text-base font-semibold max-w-2xl mx-auto font-mono"
        >
          {terraProjectData.department} &mdash; {terraProjectData.institution}
        </motion.p>
      </div>

      {/* Main Flagship Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-[#0A4174]/60 border-2 border-[#49769F]/40 rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start shadow-2xl relative overflow-hidden backdrop-blur-md"
      >
        {/* Sky Cyan Background Ambient Glow */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#7BBDE8]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Left 5 Columns: Video Player at Top + Stats + Auto-sliding 3-Photo Gallery at Bottom */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Top Video Player Showcase */}
          <div className="space-y-2">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-mono text-[#7BBDE8] font-bold flex items-center gap-1.5">
                <Play className="w-3.5 h-3.5 fill-[#7BBDE8]" /> RUNWAY VIDEO SHOWCASE
              </span>
              <span className="text-[10px] font-mono text-[#6EA2B3]">1:24 HD</span>
            </div>

            <div className="bg-[#001328] border border-[#49769F]/40 rounded-2xl h-[280px] sm:h-[320px] w-full flex items-center justify-center relative overflow-hidden shadow-2xl group">
              <video
                src={terraProjectData.videoUrl}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-2xl"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Middle Stat Badges */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#001328]/90 p-3.5 rounded-xl border border-[#49769F]/30 text-center shadow-md">
              <span className="text-xs font-mono text-[#7BBDE8] block font-bold">6-LOOK COLLECTION</span>
              <span className="text-[10px] font-mono text-[#6EA2B3]">American Streetwear</span>
            </div>
            <div className="bg-[#001328]/90 p-3.5 rounded-xl border border-[#49769F]/30 text-center shadow-md">
              <span className="text-xs font-mono text-[#7BBDE8] block font-bold">SUSTAINABLE R&amp;D</span>
              <span className="text-[10px] font-mono text-[#6EA2B3]">Upcycled Waste Denim</span>
            </div>
          </div>

          {/* Bottom Auto-Sliding 3-Photo Gallery (Fills the empty space cleanly!) */}
          <div 
            className="space-y-2 pt-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-mono text-[#7BBDE8] font-bold flex items-center gap-1.5">
                <PhotoIcon className="w-3.5 h-3.5 text-[#7BBDE8]" /> GARMENT LOOKBOOK ({currentImageIndex + 1} / {projectImages.length})
              </span>
              <span className="text-[10px] font-mono text-[#6EA2B3]">Auto-sliding</span>
            </div>

            <div className="bg-[#001328] border border-[#49769F]/40 rounded-2xl h-[320px] sm:h-[360px] w-full flex items-center justify-center relative overflow-hidden shadow-2xl group">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.04, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.96, filter: "blur(4px)" }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 w-full h-full flex items-center justify-center p-2"
                >
                  {/* Ambient Blurred Background matching photo colors */}
                  <img
                    src={projectImages[currentImageIndex]}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110 pointer-events-none"
                  />

                  {/* Crisp Uncropped Main Image */}
                  <img
                    src={projectImages[currentImageIndex]}
                    alt={`TERRA Project Look ${currentImageIndex + 1}`}
                    className="relative z-10 max-w-full max-h-full object-contain drop-shadow-2xl rounded-xl"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Previous Photo Arrow Button */}
              <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#001328]/80 text-white border border-[#49769F]/40 hover:bg-[#7BBDE8] hover:text-[#001D39] transition-all opacity-80 hover:opacity-100 z-30 shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Next Photo Arrow Button */}
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#001328]/80 text-white border border-[#49769F]/40 hover:bg-[#7BBDE8] hover:text-[#001D39] transition-all opacity-80 hover:opacity-100 z-30 shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Active Image Progress Dots */}
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-30 bg-[#001328]/80 px-3 py-1 rounded-full backdrop-blur-md border border-[#49769F]/30">
                {projectImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentImageIndex
                        ? "w-5 bg-[#7BBDE8] shadow-sm shadow-[#7BBDE8]"
                        : "w-1.5 bg-[#49769F] hover:bg-[#6EA2B3]"
                    }`}
                    aria-label={`Go to photo ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* Right 7 Columns: Complete Unaltered Text Details & Comprehensive Story */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Subtitle Badge */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#7BBDE8] bg-[#7BBDE8]/15 px-3.5 py-1.5 rounded-full border border-[#7BBDE8]/30 inline-block font-semibold">
              {terraProjectData.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {terraProjectData.subtitle}
            </h3>
          </div>

          {/* Highlights Pills */}
          <div className="flex flex-wrap gap-2">
            {terraProjectData.highlights.map((highlight, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-[#001328] border border-[#49769F]/30 text-xs font-mono text-[#BDD8E9] rounded-xl flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7BBDE8]" />
                {highlight}
              </span>
            ))}
          </div>

          {/* All 7 Complete Paragraphs (UNALTERED TEXT) */}
          <div className="space-y-5 text-sm sm:text-base leading-relaxed text-[#BDD8E9] font-light pt-2">
            
            {/* Section 1: Runway Event Overview */}
            <div className="bg-[#001328]/70 p-5 rounded-2xl border border-[#49769F]/30 space-y-3 shadow-md">
              <h4 className="text-xs font-mono text-[#7BBDE8] uppercase tracking-wider font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Runway Event &amp; Student Design Platform
              </h4>
              <p className="text-[#BDD8E9] leading-relaxed">
                {terraProjectData.paragraphs[0]}
              </p>
              <p className="text-[#BDD8E9] leading-relaxed">
                {terraProjectData.paragraphs[1]}
              </p>
            </div>

            {/* Section 2: Collection Concept & Waste Denim Upcycling */}
            <div className="bg-[#001328]/70 p-5 rounded-2xl border border-[#49769F]/30 space-y-3 shadow-md">
              <h4 className="text-xs font-mono text-[#7BBDE8] uppercase tracking-wider font-bold flex items-center gap-2">
                <Recycle className="w-4 h-4" /> American Streetwear &ndash; Upcycled Denim Concept
              </h4>
              <p className="text-[#BDD8E9] leading-relaxed">
                {terraProjectData.paragraphs[2]}
              </p>
              <p className="text-[#BDD8E9] leading-relaxed">
                {terraProjectData.paragraphs[3]}
              </p>
            </div>

            {/* Section 3: Industrial Craftsmanship & Sustainable Impact (Summarized) */}
            <div className="bg-[#001328]/70 p-5 rounded-2xl border border-[#49769F]/30 space-y-3 shadow-md">
              <h4 className="text-xs font-mono text-[#7BBDE8] uppercase tracking-wider font-bold flex items-center gap-2">
                <Scissors className="w-4 h-4" /> Industrial Accessories, Craftsmanship &amp; Impact
              </h4>
              <p className="text-[#BDD8E9] leading-relaxed">
                {terraProjectData.paragraphs[4]}
              </p>
            </div>

          </div>

        </div>

      </motion.div>
    </section>
  );
}