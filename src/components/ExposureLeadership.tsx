"use client";

import { motion } from "framer-motion";
import { Building2, Award, Users, Trophy, BookOpen, CheckCircle2 } from "lucide-react";
import { 
  qualifications, 
  industryExposures, 
  leadershipRoles, 
  memberships, 
  sportsAndAchievements, 
  volunteeringData 
} from "@/data/portfolioData";

export default function ExposureLeadership() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="exposure" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 space-y-16">
      
      {/* Section Header */}
      <div className="text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#65E6FF] bg-[#65E6FF]/10 px-3.5 py-1.5 rounded-full border border-[#65E6FF]/20"
        >
          <Building2 className="w-4 h-4" /> INDUSTRY EXPOSURE &amp; LEADERSHIP
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase"
        >
          Qualifications, Exposure &amp; Achievements
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-slate-400 max-w-xl mx-auto text-sm"
        >
          Bridging academic excellence, industrial factory visits, university leadership, and athletic championships.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        
        {/* Card 1: Industry Exposure (Field Visits) */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -6, borderColor: "rgba(101, 230, 255, 0.4)" }}
          className="bg-[#11141B] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-colors group"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-lg bg-[#08090D] border border-white/10 flex items-center justify-center text-[#65E6FF]">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-[#65E6FF] bg-[#65E6FF]/10 px-2.5 py-1 rounded">Field Visits</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white group-hover:text-[#65E6FF] transition-colors">Industry Exposure</h3>
              <p className="text-xs text-slate-400 mt-1">Direct observation of modern textile dyeing &amp; apparel manufacturing lines.</p>
            </div>
            <div className="space-y-3 pt-2">
              {industryExposures.map((exp, idx) => (
                <div key={idx} className="bg-[#08090D] p-3.5 rounded-xl border border-white/5 space-y-1">
                  <p className="text-sm font-semibold text-white">{exp.company}</p>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>{exp.location}</span>
                    <span className="text-[#65E6FF]">{exp.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Card 2: Qualifications & Certifications */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -6, borderColor: "rgba(101, 230, 255, 0.4)" }}
          className="bg-[#11141B] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-colors group"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-lg bg-[#08090D] border border-white/10 flex items-center justify-center text-[#65E6FF]">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-[#65E6FF] bg-[#65E6FF]/10 px-2.5 py-1 rounded">Diplomas &amp; Certs</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white group-hover:text-[#65E6FF] transition-colors">Qualifications</h3>
              <p className="text-xs text-slate-400 mt-1">IT, Human Resource Management, and professional English certifications.</p>
            </div>
            <div className="space-y-2.5 pt-1">
              {qualifications.map((q, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-[#08090D] border border-white/5">
                  <div>
                    <p className="text-xs font-semibold text-slate-200">{q.title}</p>
                    <p className="text-[10px] font-mono text-slate-400">{q.institution}</p>
                  </div>
                  <span className="text-[10px] font-mono text-[#65E6FF] bg-[#65E6FF]/10 px-2 py-0.5 rounded">{q.year}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Card 3: Leadership & Sports Achievements */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -6, borderColor: "rgba(101, 230, 255, 0.4)" }}
          className="bg-[#11141B] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-colors group"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-lg bg-[#08090D] border border-white/10 flex items-center justify-center text-[#65E6FF]">
                <Trophy className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-[#65E6FF] bg-[#65E6FF]/10 px-2.5 py-1 rounded">Leadership &amp; Sports</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white group-hover:text-[#65E6FF] transition-colors">Achievements &amp; Roles</h3>
              <p className="text-xs text-slate-400 mt-1">Executive leadership roles and sports championships.</p>
            </div>
            <div className="space-y-2.5 pt-1">
              {sportsAndAchievements.map((ach, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-[#08090D] border border-white/5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#65E6FF]" />
                    <span className="text-xs font-medium text-slate-200">{ach.title}</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">{ach.year}</span>
                </div>
              ))}
              <div className="pt-2 border-t border-white/5">
                <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1.5">University Leadership:</span>
                <p className="text-xs text-slate-300 font-mono leading-tight">
                  Coordinator Science Day, Content Lead "Mathaka" Film, Netball Vice-Captain, Head of Community Freshers.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </motion.div>

      {/* Memberships & Volunteering Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#11141B] border border-white/10 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="space-y-1 text-center md:text-left">
          <span className="text-xs font-mono text-[#65E6FF] uppercase">Clubs, Memberships &amp; Volunteering</span>
          <h4 className="text-base font-bold text-white">Active Campus Community Involvement</h4>
        </div>
        <div className="flex flex-wrap gap-2 justify-center md:justify-end">
          {memberships.map((m, idx) => (
            <span key={idx} className="px-3 py-1 bg-[#08090D] border border-white/10 text-xs font-mono text-slate-300 rounded-lg">
              {m}
            </span>
          ))}
          {volunteeringData.map((v, idx) => (
            <span key={`v-${idx}`} className="px-3 py-1 bg-[#08090D] border border-[#65E6FF]/30 text-xs font-mono text-[#65E6FF] rounded-lg">
              {v.title} ({v.period})
            </span>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
