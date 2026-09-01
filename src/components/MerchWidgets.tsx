"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Clock, Sliders, CheckCircle2, RotateCcw } from "lucide-react";
import { tnaStepsData, TnaStep } from "@/data/portfolioData";

export default function MerchWidgets() {
  // Live Costing Calculator States
  const [fabricCost, setFabricCost] = useState(4.50);
  const [trimsCost, setTrimsCost] = useState(1.20);
  const [smv, setSmv] = useState(18);
  const [cmRate, setCmRate] = useState(0.12);
  const [margin, setMargin] = useState(15);

  const calculatedCM = smv * cmRate;
  const subTotal = fabricCost + trimsCost + calculatedCM;
  const finalFOB = subTotal * (1 + margin / 100);

  // TNA Steps State (copy from portfolioData for interactive toggling)
  const [tnaSteps, setTnaSteps] = useState<TnaStep[]>(tnaStepsData);

  const toggleStepStatus = (index: number) => {
    const nextSteps = [...tnaSteps];
    const currentStatus = nextSteps[index].status;
    if (currentStatus === "Pending") nextSteps[index].status = "In Progress";
    else if (currentStatus === "In Progress") nextSteps[index].status = "Completed";
    else nextSteps[index].status = "Pending";
    setTnaSteps(nextSteps);
  };

  const resetTna = () => {
    setTnaSteps(tnaStepsData);
  };

  return (
    <section id="costing-calculator" className="py-24 px-6 max-w-7xl mx-auto space-y-20 border-b border-white/5 relative">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#65E6FF] bg-[#65E6FF]/10 px-3 py-1 rounded-full border border-[#65E6FF]/20"
        >
          <Sliders className="w-4 h-4" /> INTERACTIVE SUPPLY CHAIN TOOLS
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase"
        >
          Merchandising Costing &amp; TNA Simulator
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-slate-400 max-w-xl mx-auto text-sm"
        >
          Simulate real-time garment costing structures and monitor production lifecycles with interactive precision.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Costing Calculator Widget */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#11141B] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#65E6FF]" /> Live FOB Calculator
              </h3>
              <span className="text-xs font-mono text-[#65E6FF] bg-[#65E6FF]/10 px-2.5 py-1 rounded">USD ($)</span>
            </div>

            {/* Sliders / Inputs */}
            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-sm mb-1.5 font-medium">
                  <span className="text-slate-300">Fabric Cost (Yards/Meters)</span>
                  <span className="font-mono text-[#65E6FF]">${fabricCost.toFixed(2)}</span>
                </div>
                <input 
                  type="range" min="1" max="15" step="0.25" value={fabricCost} 
                  onChange={(e) => setFabricCost(parseFloat(e.target.value))}
                  className="w-full accent-[#65E6FF] bg-slate-800 rounded-lg h-2 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1.5 font-medium">
                  <span className="text-slate-300">Trims &amp; Accessories</span>
                  <span className="font-mono text-[#65E6FF]">${trimsCost.toFixed(2)}</span>
                </div>
                <input 
                  type="range" min="0.20" max="5" step="0.10" value={trimsCost} 
                  onChange={(e) => setTrimsCost(parseFloat(e.target.value))}
                  className="w-full accent-[#65E6FF] bg-slate-800 rounded-lg h-2 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1.5 font-medium">
                  <span className="text-slate-300">SMV (Standard Minute Value)</span>
                  <span className="font-mono text-[#65E6FF]">{smv} mins</span>
                </div>
                <input 
                  type="range" min="5" max="45" step="1" value={smv} 
                  onChange={(e) => setSmv(parseInt(e.target.value))}
                  className="w-full accent-[#65E6FF] bg-slate-800 rounded-lg h-2 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1.5 font-medium">
                  <span className="text-slate-300">Target Profit Margin</span>
                  <span className="font-mono text-[#65E6FF]">{margin}%</span>
                </div>
                <input 
                  type="range" min="5" max="30" step="1" value={margin} 
                  onChange={(e) => setMargin(parseInt(e.target.value))}
                  className="w-full accent-[#65E6FF] bg-slate-800 rounded-lg h-2 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Calculation Breakdown Output */}
          <div className="mt-8 pt-6 border-t border-white/10 bg-[#08090D] p-5 rounded-xl flex items-center justify-between shadow-inner">
            <div className="space-y-1">
              <p className="text-xs text-slate-400 font-mono">CM Cost: <span className="text-slate-200">${calculatedCM.toFixed(2)}</span></p>
              <p className="text-xs text-slate-400 font-mono">Subtotal: <span className="text-slate-200">${subTotal.toFixed(2)}</span></p>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono text-slate-400 block tracking-wider uppercase">FINAL ESTIMATED FOB</span>
              <motion.span 
                key={finalFOB.toFixed(2)}
                initial={{ scale: 1.15, color: "#ffffff" }}
                animate={{ scale: 1, color: "#65E6FF" }}
                transition={{ duration: 0.3 }}
                className="text-3xl font-extrabold font-mono block"
              >
                ${finalFOB.toFixed(2)}
              </motion.span>
            </div>
          </div>
        </motion.div>

        {/* TNA Visualizer Widget */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#11141B] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#65E6FF]" /> 45-Day TNA Tracker
              </h3>
              <button
                onClick={resetTna}
                className="text-xs font-mono text-slate-400 hover:text-[#65E6FF] flex items-center gap-1 transition-colors"
                title="Reset Tracker"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset
              </button>
            </div>

            {/* Interactive Timeline Steps */}
            <div className="space-y-3">
              {tnaSteps.map((step, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ scale: 1.01 }}
                  onClick={() => toggleStepStatus(idx)}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#08090D] border border-white/5 cursor-pointer hover:border-[#65E6FF]/30 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className={`w-4 h-4 transition-colors ${
                      step.status === "Completed" ? "text-emerald-400" : 
                      step.status === "In Progress" ? "text-[#65E6FF]" : 
                      "text-slate-600"
                    }`} />
                    <div>
                      <p className="text-[11px] font-mono text-slate-400">{step.day}</p>
                      <p className="text-sm font-medium text-slate-200">{step.task}</p>
                    </div>
                  </div>
                  <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border transition-all ${
                    step.status === "Completed" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" :
                    step.status === "In Progress" ? "bg-[#65E6FF]/10 text-[#65E6FF] border-[#65E6FF]/30" :
                    "bg-slate-800 text-slate-400 border-white/5"
                  }`}>
                    {step.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 text-center border-t border-white/5">
            <p className="text-xs text-slate-400 font-mono">
              Click any step above to toggle status. Target: On-Time In-Full (OTIF) Delivery.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}