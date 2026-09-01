"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, FileText, Sparkles, Check, Send } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolioData";
import { SocialIcon } from "@/components/SocialIcons";

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDirectEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    // Open Gmail web compose in a new tab directly for 100% reliable email launching
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto space-y-16 relative">
      
      {/* Contact Section Outer Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-[#0A4174]/70 border border-[#49769F]/40 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-12 relative overflow-hidden backdrop-blur-md"
      >
        {/* Sky Cyan Ambient Glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#7BBDE8]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="text-center space-y-4 relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#7BBDE8] bg-[#7BBDE8]/15 px-4 py-1.5 rounded-full border border-[#7BBDE8]/30 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> GET IN TOUCH &amp; CONNECT
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
            Let's Collaborate
          </h2>
          <p className="text-[#BDD8E9] text-sm sm:text-base font-light leading-relaxed">
            Eager to contribute and grow within professional garment merchandising, apparel engineering, supply chain R&amp;D, and brand operations.
          </p>
        </div>

        {/* Professional Social Profiles Grid (LinkedIn, Instagram, WhatsApp) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 relative z-10 max-w-3xl mx-auto">
          {socialLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3.5 p-4 sm:p-5 rounded-2xl bg-[#001328]/80 border border-[#49769F]/40 hover:border-[#7BBDE8] text-[#BDD8E9] hover:text-[#7BBDE8] transition-all group shadow-xl"
            >
              <div className="w-11 h-11 rounded-xl bg-[#0A4174] border border-[#49769F]/40 flex items-center justify-center text-[#7BBDE8] group-hover:scale-110 transition-all shadow-inner shrink-0">
                <SocialIcon icon={link.icon} className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-white group-hover:text-[#7BBDE8] transition-colors">{link.name}</h3>
                <p className="text-[11px] font-mono text-[#6EA2B3] mt-0.5 truncate">
                  {link.description}
                </p>
              </div>
              <span className="text-xs font-mono text-[#7BBDE8] group-hover:translate-x-1 transition-transform">&rarr;</span>
            </motion.a>
          ))}
        </div>

        {/* Main Direct Action Buttons: Send Direct Email, Download CV, Copy Email */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 relative z-10 border-t border-[#49769F]/30">
          
          {/* Send Direct Email Button - Launches Gmail Web Compose directly */}
          <motion.a
            href={`mailto:${personalInfo.email}`}
            onClick={handleDirectEmail}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#7BBDE8] text-[#001D39] font-extrabold hover:bg-[#BDD8E9] transition-all shadow-xl shadow-[#7BBDE8]/20 text-sm tracking-wide"
          >
            <Send className="w-4 h-4" /> Send Direct Email
          </motion.a>

          {/* Download CV Button */}
          <motion.a
            href={personalInfo.cvDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#001328] border border-[#7BBDE8]/50 text-[#7BBDE8] font-extrabold hover:bg-[#7BBDE8]/15 transition-all shadow-md text-sm tracking-wide"
          >
            <FileText className="w-4 h-4" /> Download CV (PDF)
          </motion.a>

          {/* Copy Email Button */}
          <motion.button
            onClick={handleCopyEmail}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#001328] border border-[#49769F]/40 text-[#BDD8E9] font-medium hover:bg-white/5 transition-all text-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-mono text-xs">Email Copied!</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 text-[#7BBDE8]" />
                <span>Copy Email Address</span>
              </>
            )}
          </motion.button>

        </div>
      </motion.div>

      {/* Footer Copyright & Credits */}
      <div className="pt-8 border-t border-[#49769F]/20 text-center flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#6EA2B3]">
        <p>{personalInfo.name.toUpperCase()} &mdash; FASHION MERCHANDISING UNDERGRADUATE</p>
        <p className="mt-2 sm:mt-0">SLTC RESEARCH UNIVERSITY &copy; 2026</p>
      </div>

    </section>
  );
}