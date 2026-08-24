import React, { useState, useEffect } from "react";
import { navLinks } from "../data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-white/5 py-3"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("#hero")}
          className="font-mono text-sm font-bold tracking-tight group"
        >
          <span className="text-accent-blue">K.M.N</span>
          <span className="text-slate-500">.PREMATHILAKA</span>
          <span className="text-slate-600">()</span>
          <span className="inline-block w-1.5 h-3.5 bg-accent-blue ml-0.5 align-middle animate-blink" />
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                className={`font-mono text-xs tracking-widest uppercase transition-colors ${
                  active === l.href
                    ? "text-accent-blue"
                    : "text-slate-500 hover:text-slate-200"
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:nirwanmilinda591@gmail.com"
          className="hidden md:inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-lg border border-accent-blue/30 text-accent-blue hover:bg-accent-blue/10 transition-all duration-200"
        >
          Hire me
          <span className="text-base leading-none">↗</span>
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="font-mono text-xs tracking-widest uppercase text-slate-400 hover:text-white text-left"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
