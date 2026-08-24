import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-slate-700">
          <span className="text-accent-blue">alex.chen()</span> · Built with React & Tailwind CSS · {year}
        </div>
        <div className="flex items-center gap-6">
          <a href="#hero" className="font-mono text-xs text-slate-700 hover:text-slate-400 transition-colors">
            Back to top ↑
          </a>
          <span className="font-mono text-xs text-slate-700">Designed & coded by hand</span>
        </div>
      </div>
    </footer>
  );
}
