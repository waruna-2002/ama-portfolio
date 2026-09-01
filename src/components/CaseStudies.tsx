"use client";

import { motion } from "framer-motion";
import { Layers, Cpu, Recycle, BarChart3, ArrowUpRight, LucideIcon } from "lucide-react";
import { caseStudiesData } from "@/data/portfolioData";

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  Recycle,
  BarChart3,
};

export default function CaseStudies() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="case-studies" className="py-24 px-6 max-w-7xl mx-auto border-b border-white/5">
      <div className="text-center space-y-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#65E6FF] bg-[#65E6FF]/10 px-3 py-1 rounded-full border border-[#65E6FF]/20"
        >
          <Layers className="w-4 h-4" /> INDUSTRIAL CASE STUDIES
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase"
        >
          Applied Innovations
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-slate-400 max-w-xl mx-auto text-sm"
        >
          Technical innovations focused on functional comfort, sustainable circularity, and data intelligence.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {caseStudiesData.map((c, idx) => {
          const IconComponent = iconMap[c.icon] || Layers;
          return (
            <motion.div
              key={c.id}
              variants={cardVariants}
              whileHover={{ y: -8, borderColor: "rgba(101, 230, 255, 0.4)" }}
              className="bg-[#11141B] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all group shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#08090D] border border-white/10 flex items-center justify-center text-[#65E6FF] group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-[#65E6FF] bg-[#65E6FF]/10 px-3 py-1 rounded-full border border-[#65E6FF]/20">
                    {c.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#65E6FF] transition-colors flex items-center justify-between">
                  {c.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#65E6FF]" />
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">{c.desc}</p>
                
                <div className="bg-[#08090D] p-3.5 rounded-xl border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-[#65E6FF] uppercase">Key Result / Focus:</span>
                  <p className="text-xs text-slate-400 font-mono">{c.fullDetails}</p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>R&amp;D PROJECT 0{idx + 1}</span>
                <span className="text-emerald-400 flex items-center gap-1">&bull; VERIFIED</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}