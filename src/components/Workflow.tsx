"use client";

import { motion } from "framer-motion";
import { GitBranch, CheckCircle2 } from "lucide-react";
import { workflowStepsData } from "@/data/portfolioData";

export default function Workflow() {
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
    <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/5">
      <div className="text-center space-y-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#65E6FF] bg-[#65E6FF]/10 px-3 py-1 rounded-full border border-[#65E6FF]/20"
        >
          <GitBranch className="w-4 h-4" /> OPERATIONAL PIPELINE
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase"
        >
          Merchandising Playbook Workflow
        </motion.h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {workflowStepsData.map((s, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -6, borderColor: "rgba(101, 230, 255, 0.4)" }}
            className="bg-[#11141B] border border-white/10 rounded-xl p-6 relative overflow-hidden transition-colors shadow-xl group"
          >
            <span className="absolute top-4 right-4 text-3xl font-extrabold font-mono text-white/5 group-hover:text-[#65E6FF]/10 transition-colors">
              {s.step}
            </span>
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#65E6FF]">PHASE {s.step}</span>
              <h3 className="text-base font-semibold text-white group-hover:text-[#65E6FF] transition-colors">{s.name}</h3>
              <p className="text-slate-400 text-xs">{s.desc}</p>
              <p className="text-[11px] font-mono text-slate-500 pt-2 border-t border-white/5">{s.details}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}