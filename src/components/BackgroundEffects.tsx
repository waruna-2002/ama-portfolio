"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Radial Top Light Ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-radial from-[#7BBDE8]/15 via-[#4E8EA2]/8 to-transparent blur-3xl opacity-70" />

      {/* Floating Animated Navy/Sky Cyan Orb 1 */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-10 w-96 h-96 bg-[#7BBDE8]/10 rounded-full blur-[130px]"
      />

      {/* Floating Animated Deep Blue Orb 2 */}
      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 60, -50, 0],
          scale: [1, 0.85, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-2/3 right-10 w-[550px] h-[550px] bg-[#0A4174]/30 rounded-full blur-[160px]"
      />

      {/* Floating Light Particle 3 */}
      <motion.div
        animate={{
          y: [0, -100, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#4E8EA2]/10 rounded-full blur-[100px]"
      />

      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(to right, #7BBDE8 1px, transparent 1px), linear-gradient(to bottom, #7BBDE8 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />
    </div>
  );
}
