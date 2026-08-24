import React, { useState } from "react";
import { projects } from "../data/portfolioData";

function ProjectCard({ project, featured }) {
  const [hovered, setHovered] = useState(false);

  if (featured) {
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`relative bg-bg-card border rounded-2xl p-7 col-span-full md:col-span-2 transition-all duration-300 overflow-hidden ${
          hovered ? "border-accent-blue/30 shadow-2xl shadow-accent-blue/10" : "border-white/5"
        }`}
      >
        {/* Top gradient line */}
        <div
          className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue to-transparent transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Glow blob */}
        <div
          className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent-blue/5 blur-3xl transition-opacity duration-500 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="relative flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{project.emoji}</span>
              <div>
                <div className="font-mono text-xs text-accent-blue tracking-widest uppercase mb-1">Featured project</div>
                <h3 className="font-mono font-bold text-xl text-white">{project.name}</h3>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-5">{project.description}</p>

            {/* Mini stats */}
            <div className="flex flex-wrap gap-3 mb-6">
              {project.stats.map((s) => (
                <span key={s} className="font-mono text-xs text-accent-cyan bg-accent-cyan/5 border border-accent-cyan/15 rounded-lg px-3 py-1">
                  {s}
                </span>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((t) => (
                <span key={t} className="font-mono text-xs text-slate-500 bg-white/5 rounded-lg px-2.5 py-1">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href={project.github}
                className="inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-lg border border-white/10 text-slate-400 hover:border-white/20 hover:text-white transition-all"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href={project.live}
                className="inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-lg bg-accent-blue/10 border border-accent-blue/25 text-accent-blue hover:bg-accent-blue/20 transition-all"
              >
                Live demo ↗
              </a>
            </div>
          </div>

          {/* Code preview decoration */}
          <div className="hidden md:block w-56 shrink-0 bg-bg-primary rounded-xl border border-white/5 p-4 font-mono text-xs leading-relaxed text-slate-600">
            <div className="flex gap-1.5 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
            </div>
            <span className="text-accent-purple">import</span> {"{"} <span className="text-accent-cyan">useState</span> {"}"}<br />
            <span className="text-accent-purple">from</span> <span className="text-green-400">'react'</span>;<br />
            <br />
            <span className="text-accent-purple">export</span> <span className="text-accent-blue">function</span>{" "}
            <span className="text-yellow-400">Board</span>() {"{"}<br />
            &nbsp;&nbsp;<span className="text-slate-700">// ⚡ live sync</span><br />
            &nbsp;&nbsp;<span className="text-accent-purple">return</span> &lt;<span className="text-accent-blue">Canvas</span> /&gt;;<br />
            {"}"}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative bg-bg-card border rounded-2xl p-6 flex flex-col transition-all duration-300 overflow-hidden ${
        hovered ? "border-white/15 -translate-y-1 shadow-xl shadow-black/30" : "border-white/5"
      }`}
    >
      <div
        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/60 to-transparent transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="flex items-start justify-between mb-5">
        <span className="text-2xl">{project.emoji}</span>
        <div className="flex gap-2">
          <a href={project.github} className="text-slate-600 hover:text-slate-300 transition-colors" title="GitHub">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a href={project.live} className="text-slate-600 hover:text-accent-blue transition-colors" title="Live">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      <h3 className="font-mono font-bold text-base text-white mb-2">{project.name}</h3>
      <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>

      {project.stats && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stats.map((s) => (
            <span key={s} className="font-mono text-xs text-accent-green bg-accent-green/5 border border-accent-green/15 rounded-md px-2 py-0.5">
              {s}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="font-mono text-xs text-slate-600 bg-white/5 rounded-md px-2.5 py-1">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-accent-purple/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="font-mono text-xs text-accent-purple tracking-widest uppercase mb-4">// selected work</div>
          <h2 className="font-mono font-bold text-4xl text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
A selection of full-stack web applications and digital experiences I've designed and developed using modern technologies.          </p>
        </div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {featured.map((p) => (
            <ProjectCard key={p.name} project={p} featured />
          ))}
        </div>

        {/* Other projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((p) => (
            <ProjectCard key={p.name} project={p} featured={false} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/nirwan591"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-slate-500 hover:text-accent-blue transition-colors group"
          >
            See all projects on GitHub
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
