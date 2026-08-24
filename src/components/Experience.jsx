import React, { useState } from "react";
import { experience } from "../data/portfolioData";

const typeColor = {
  "Full-time": "text-accent-green border-accent-green/25 bg-accent-green/5",
  Contract: "text-accent-cyan border-accent-cyan/25 bg-accent-cyan/5",
  Freelance: "text-accent-purple border-accent-purple/25 bg-accent-purple/5",
};

export default function Experience() {
  const [active, setActive] = useState(0);
  const exp = experience[active];

  return (
    <section id="experience" className="py-28 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-accent-cyan/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="font-mono text-xs text-accent-cyan tracking-widest uppercase mb-4">// where i've worked</div>
          <h2 className="font-mono font-bold text-4xl text-white">
            Work <span className="text-gradient">experience</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Sidebar tabs */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
            {experience.map((e, i) => (
              <button
                key={e.company}
                onClick={() => setActive(i)}
                className={`shrink-0 text-left px-5 py-4 rounded-xl border transition-all duration-200 ${
                  active === i
                    ? "bg-bg-hover border-accent-blue/30 shadow-lg shadow-accent-blue/5"
                    : "bg-bg-card border-white/5 hover:border-white/10"
                }`}
              >
                <div className={`font-mono text-sm font-bold mb-0.5 ${active === i ? "text-white" : "text-slate-400"}`}>
                  {e.company}
                </div>
                <div className="font-mono text-xs text-slate-600">{e.period}</div>
              </button>
            ))}
          </div>

          {/* Detail pane */}
          <div className="lg:col-span-3 bg-bg-card border border-white/5 rounded-2xl p-8">
            {/* Role header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="font-mono font-bold text-xl text-white mb-1">{exp.role}</h3>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-accent-blue">{exp.company}</span>
                  <span className="text-slate-700">·</span>
                  <span className="font-mono text-xs text-slate-500">{exp.period}</span>
                </div>
              </div>
              <span className={`font-mono text-xs px-3 py-1 rounded-full border ${typeColor[exp.type] || "text-slate-500 border-white/10"}`}>
                {exp.type}
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-400 leading-relaxed mb-8">{exp.description}</p>

            {/* Highlights */}
            <div>
              <div className="font-mono text-xs text-slate-600 uppercase tracking-widest mb-4">Key highlights</div>
              <ul className="space-y-3">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                    <span className="text-slate-300 text-sm">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
