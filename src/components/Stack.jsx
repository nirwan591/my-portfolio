import React, { useState } from "react";
import { stackData } from "../data/portfolioData";

const colorMap = {
  blue: {
    tag: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    icon: "bg-blue-500/10 border-blue-500/20",
    label: "text-blue-400",
    bar: "bg-blue-500",
  },
  cyan: {
    tag: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    icon: "bg-cyan-500/10 border-cyan-500/20",
    label: "text-cyan-400",
    bar: "bg-cyan-500",
  },
  purple: {
    tag: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    icon: "bg-purple-500/10 border-purple-500/20",
    label: "text-purple-400",
    bar: "bg-purple-500",
  },
  green: {
    tag: "bg-green-500/10 text-green-400 border-green-500/20",
    icon: "bg-green-500/10 border-green-500/20",
    label: "text-green-400",
    bar: "bg-green-500",
  },
};

export default function Stack() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="stack" className="py-28 px-6 relative">
      {/* Subtle separator glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-accent-blue/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="font-mono text-xs text-accent-blue tracking-widest uppercase mb-4">// tools & technologies</div>
          <h2 className="font-mono font-bold text-4xl text-white">
            My tech <span className="text-gradient">stack</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Tools I reach for daily and technologies I've shipped to production.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stackData.map((cat, i) => {
            const c = colorMap[cat.color];
            return (
              <div
                key={cat.category}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`relative bg-bg-card border rounded-2xl p-6 transition-all duration-300 cursor-default ${
                  hovered === i
                    ? "border-white/15 bg-bg-hover scale-[1.02]"
                    : "border-white/5"
                }`}
              >
                {/* Top accent bar */}
                <div
                  className={`absolute top-0 left-6 right-6 h-px transition-all duration-300 ${c.bar} ${
                    hovered === i ? "opacity-60" : "opacity-0"
                  }`}
                />

                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center text-lg ${c.icon}`}>
                    {cat.icon}
                  </div>
                  <span className={`font-mono font-bold text-sm ${c.label}`}>
                    {cat.category}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className={`font-mono text-xs px-2.5 py-1 rounded-lg border transition-all ${c.tag}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-slate-600 font-mono text-xs mt-10">
          + always learning something new · currently exploring{" "}
          <span className="text-accent-cyan">Rust</span> and{" "}
          <span className="text-accent-purple">LLM fine-tuning</span>
        </p>
      </div>
    </section>
  );
}
