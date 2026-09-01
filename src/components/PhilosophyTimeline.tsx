"use client";

import { motion } from "framer-motion";
import { Compass, Calendar } from "lucide-react";
import { milestonesData } from "@/data/portfolioData";

export default function PhilosophyTimeline() {
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
          <Compass className="w-4 h-4" /> CORE PHILOSOPHY &amp; EVOLUTION
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase"
        >
          Creative Thinking. Commercial Mindset. Fashion Future.
        </motion.h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {milestonesData.map((item, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -6, borderColor: "rgba(101, 230, 255, 0.4)" }}
            className="bg-[#11141B] border border-white/10 rounded-xl p-6 flex flex-col justify-between transition-colors shadow-xl group"
          >
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#65E6FF] bg-[#65E6FF]/10 px-2.5 py-1 rounded border border-[#65E6FF]/20">
                <Calendar className="w-3.5 h-3.5" /> {item.year}
              </span>
              <h3 className="text-base font-semibold text-white group-hover:text-[#65E6FF] transition-colors">{item.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-mono text-slate-500">
              {item.phase}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}