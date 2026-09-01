"use client";

import { motion } from "framer-motion";
import { Cpu, Scissors, BarChart, Code2, LucideIcon } from "lucide-react";
import { skillsCategories } from "@/data/portfolioData";

const iconMap: Record<string, LucideIcon> = {
  Scissors,
  Cpu,
  BarChart,
  Code2,
};

export default function SkillsMatrix() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto border-b border-[#49769F]/20">
      <div className="text-center space-y-4 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#7BBDE8] bg-[#7BBDE8]/15 px-3.5 py-1.5 rounded-full border border-[#7BBDE8]/30 shadow-sm"
        >
          <Cpu className="w-4 h-4" /> TECHNICAL CAPABILITIES
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase"
        >
          Skills Matrix
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#BDD8E9] max-w-lg mx-auto text-sm"
        >
          Combining apparel engineering, textile science, business mathematics, and digital technology.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skillsCategories.map((cat, idx) => {
          const IconComponent = iconMap[cat.icon] || Cpu;
          return (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, borderColor: "rgba(123, 189, 232, 0.5)" }}
              className="bg-[#0A4174]/60 border border-[#49769F]/30 rounded-2xl p-6 flex flex-col justify-between shadow-xl transition-colors group backdrop-blur-md"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#001328] border border-[#49769F]/30 flex items-center justify-center text-[#7BBDE8] group-hover:scale-110 transition-transform shadow-inner">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#7BBDE8] transition-colors">{cat.title}</h3>
                  <p className="text-xs text-[#6EA2B3] mt-1">{cat.description}</p>
                </div>
                <ul className="space-y-2.5 pt-2 border-t border-[#49769F]/20">
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="text-xs text-[#BDD8E9] font-mono flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7BBDE8] group-hover:scale-125 transition-transform" /> {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}