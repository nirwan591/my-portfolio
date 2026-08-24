import React, { useState } from "react";

const socials = [
  {
    label: "GitHub",
    handle: "github.com/nirwan591",
    href: "https://github.com/nirwan591",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/k-m-nirwan-9a2b10321",
    href: "https://linkedin.com/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
 
  {
    label: "Email",
    handle: "nirwanmilinda591@gmail.com",
    href: "mailto:nirwanmilinda591@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-accent-blue/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-accent-blue/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="font-mono text-xs text-accent-blue tracking-widest uppercase mb-4">// let's talk</div>
          <h2 className="font-mono font-bold text-4xl text-white mb-4">
            Get in <span className="text-gradient">touch</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Open to interesting projects, full-time roles, and good conversations about software. I reply within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: social links */}
          <div className="lg:col-span-2 space-y-4">
            <div className="font-mono text-xs text-slate-600 uppercase tracking-widest mb-6">Find me online</div>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-bg-card border border-white/5 rounded-xl hover:border-accent-blue/25 hover:bg-bg-hover transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 group-hover:text-accent-blue group-hover:border-accent-blue/20 transition-all">
                  {s.icon}
                </div>
                <div>
                  <div className="font-mono text-xs text-slate-500 mb-0.5">{s.label}</div>
                  <div className="font-mono text-sm text-slate-300 group-hover:text-accent-blue transition-colors">
                    {s.handle}
                  </div>
                </div>
                <svg className="w-4 h-4 text-slate-700 group-hover:text-accent-blue ml-auto group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            ))}
          </div>

          {/* Right: contact form */}
          <div className="lg:col-span-3 bg-bg-card border border-white/5 rounded-2xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full min-h-64 text-center">
                <div className="text-5xl mb-4">🚀</div>
                <div className="font-mono font-bold text-xl text-white mb-2">Message sent!</div>
                <p className="text-slate-500">I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-xs text-slate-500 uppercase tracking-widest mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full bg-bg-primary border border-white/8 rounded-xl px-4 py-3 text-white placeholder-slate-700 font-mono text-sm outline-none focus:border-accent-blue/40 focus:ring-1 focus:ring-accent-blue/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-slate-500 uppercase tracking-widest mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full bg-bg-primary border border-white/8 rounded-xl px-4 py-3 text-white placeholder-slate-700 font-mono text-sm outline-none focus:border-accent-blue/40 focus:ring-1 focus:ring-accent-blue/20 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-mono text-xs text-slate-500 uppercase tracking-widest mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full bg-bg-primary border border-white/8 rounded-xl px-4 py-3 text-white placeholder-slate-700 font-mono text-sm outline-none focus:border-accent-blue/40 focus:ring-1 focus:ring-accent-blue/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-slate-500 uppercase tracking-widest mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, idea, or just say hi..."
                    required
                    rows={5}
                    className="w-full bg-bg-primary border border-white/8 rounded-xl px-4 py-3 text-white placeholder-slate-700 font-mono text-sm outline-none focus:border-accent-blue/40 focus:ring-1 focus:ring-accent-blue/20 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-accent-blue text-bg-primary font-mono font-bold text-sm hover:opacity-90 hover:shadow-lg hover:shadow-accent-blue/25 active:scale-95 transition-all duration-200"
                >
                  Send message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
