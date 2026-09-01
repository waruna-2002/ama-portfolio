"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  Sparkles, 
  Award, 
  Scissors, 
  CheckCircle2,
  Mail
} from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolioData";
import { SocialIcon } from "@/components/SocialIcons";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const handleDirectEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    // Open Gmail web compose directly in a new tab for 100% reliable email launching
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`,
      "_blank"
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="home" className="min-h-[88vh] flex items-center px-6 max-w-7xl mx-auto py-12 relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10"
      >
        {/* Left Column: Headline, Bio & Primary CTAs */}
        <div className="space-y-6">
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7BBDE8]/15 border border-[#7BBDE8]/30 text-xs font-mono text-[#7BBDE8] shadow-sm"
          >
            <Sparkles className="w-4 h-4 animate-pulse" /> WELCOME TO MY PORTFOLIO
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase leading-tight"
          >
            Hello I'm <span className="block text-[#7BBDE8] mt-1 drop-shadow-[0_0_25px_rgba(123,189,232,0.35)]">{personalInfo.name}</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="text-[#BDD8E9] text-base sm:text-lg font-light leading-relaxed max-w-xl"
          >
            {personalInfo.headline} bridging creative design, technical precision, and modern supply chain optimization.
          </motion.p>

          {/* Primary Action Buttons: Download CV & Direct Email */}
          <motion.div variants={itemVariants} className="space-y-5 pt-2">
            <div className="flex flex-wrap items-center gap-4">
              {/* CV Download CTA */}
              <motion.a
                href={personalInfo.cvDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, boxShadow: "0 0 25px rgba(123, 189, 232, 0.35)" }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#7BBDE8] text-[#001D39] font-extrabold hover:bg-[#BDD8E9] transition-all shadow-xl shadow-[#7BBDE8]/20 text-sm tracking-wide"
              >
                <FileText className="w-4 h-4" /> Download CV
              </motion.a>

              {/* Direct Email CTA - Opens Gmail web compose directly in new tab */}
              <motion.a
                href={`mailto:${personalInfo.email}`}
                onClick={handleDirectEmail}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0A4174] border border-[#49769F]/50 text-[#BDD8E9] hover:text-white hover:border-[#7BBDE8] transition-all text-sm font-semibold shadow-md"
              >
                <Mail className="w-4 h-4 text-[#7BBDE8]" /> Direct Email
              </motion.a>
            </div>

            {/* Social Network Links Row (LinkedIn, Instagram, WhatsApp) */}
            <div className="pt-2">
              <span className="text-[11px] font-mono text-[#6EA2B3] uppercase tracking-wider block mb-2">
                Social Profiles &amp; Direct Chat:
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -2, scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="px-4 py-2 rounded-xl bg-[#0A4174]/70 border border-[#49769F]/40 text-[#BDD8E9] hover:text-white hover:border-[#7BBDE8] transition-all flex items-center gap-2.5 text-xs font-mono shadow-sm group"
                  >
                    <SocialIcon icon={link.icon} className="w-4 h-4 text-[#7BBDE8] group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-[#7BBDE8] transition-colors">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Sleek Modern Portrait Card for Ama's Photo */}
        <motion.div variants={itemVariants} className="flex justify-center relative">
          <div className="relative w-full max-w-sm sm:max-w-md">
            
            {/* Background Soft Glow Aura */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#7BBDE8]/20 via-[#0A4174]/30 to-[#4E8EA2]/20 rounded-[2.5rem] blur-2xl opacity-80 pointer-events-none" />

            {/* Portrait Frame Container */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="relative rounded-[2rem] bg-[#0A4174]/80 border-2 border-[#49769F]/40 p-3 shadow-2xl overflow-hidden group hover:border-[#7BBDE8]/60 transition-colors backdrop-blur-md"
            >
              {/* Photo Area with Portrait Aspect Ratio & Uncropped Backdrop */}
              <div className="relative w-full h-[420px] sm:h-[460px] rounded-[1.5rem] overflow-hidden bg-[#001328] flex items-center justify-center p-2">
                {!imageError ? (
                  <>
                    {/* Soft Blurred Background Ambient Fill */}
                    <img
                      src={personalInfo.profileImage}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110 pointer-events-none"
                    />
                    {/* Crisp Uncropped Main Profile Image */}
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      onError={() => setImageError(true)}
                      className="relative z-10 max-w-full max-h-full object-contain drop-shadow-2xl rounded-xl group-hover:scale-105 transition-transform duration-700"
                    />
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#0A4174] to-[#001328]">
                    <div className="w-20 h-20 rounded-2xl bg-[#7BBDE8]/15 text-[#7BBDE8] flex items-center justify-center mb-3 border border-[#7BBDE8]/30 shadow-lg">
                      <Award className="w-10 h-10" />
                    </div>
                    <p className="font-bold text-white text-lg tracking-wide">{personalInfo.name}</p>
                    <p className="text-xs text-[#7BBDE8] font-mono mt-1">Fashion Merchandise Management</p>
                  </div>
                )}

                {/* Bottom Overlay Gradient & Badge */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#001328] via-[#001328]/60 to-transparent flex items-end justify-center p-4 z-20 pointer-events-none">
                  <div className="bg-[#001328]/90 border border-[#7BBDE8]/40 px-3.5 py-1.5 rounded-full backdrop-blur-md text-xs font-mono text-[#7BBDE8] flex items-center gap-1.5 shadow-lg">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7BBDE8]" /> SLTC Research University
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Fashion Merchandising */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 -left-3 bg-[#001328]/95 border border-[#7BBDE8]/40 px-3.5 py-2 rounded-xl backdrop-blur-md shadow-2xl flex items-center gap-2 z-20"
              >
                <Award className="w-4 h-4 text-[#7BBDE8]" />
                <span className="text-xs font-mono font-semibold text-[#BDD8E9]">Fashion Merchandising</span>
              </motion.div>

              {/* Floating Badge 2: Apparel Engineering */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-16 -right-3 bg-[#001328]/95 border border-[#7BBDE8]/40 px-3.5 py-2 rounded-xl backdrop-blur-md shadow-2xl flex items-center gap-2 z-20"
              >
                <Scissors className="w-4 h-4 text-[#7BBDE8]" />
                <span className="text-xs font-mono font-semibold text-[#BDD8E9]">Apparel Strategist</span>
              </motion.div>

            </motion.div>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}