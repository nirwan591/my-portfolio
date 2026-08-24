import React from "react";

const values = [
  { icon: "⚡", title: "Performance first", desc: "Every millisecond matters. I profile before I optimize, and I don't ship slow." },
  { icon: "🧪", title: "Test everything", desc: "Unit, integration, e2e — I write tests as I build, not after bugs surface in prod." },
  { icon: "📖", title: "Document as you go", desc: "Future me and future teammates deserve to understand what past me was thinking." },
  { icon: "🔁", title: "Ship, learn, iterate", desc: "Perfect is the enemy of shipped. I prefer small bets over big-bang releases." },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <div className="font-mono text-xs text-accent-blue tracking-widest uppercase mb-4">// about me</div>
            <h2 className="font-mono font-bold text-4xl text-white mb-6 leading-tight">
             
              <span className="text-gradient">Full-Stack Developer, turning ideas into digital solutions.</span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>Passionate Full-Stack Developer with hands-on experience building modern web applications using MongoDB, Express.js, React, and Node.js (MERN Stack). Currently pursuing a Higher National Diploma in Information Technology (HNDIT) at SLIATE, with a strong foundation in software development, IT support, and system administration.

I enjoy creating responsive, user-friendly, and scalable web applications that solve real-world problems. My experience includes developing e-commerce platforms, implementing secure authentication systems, integrating payment gateways, and building admin dashboards for business management.

Beyond development, I have experience in technical support, troubleshooting, networking, and data management. I am always eager to learn new technologies, improve my skills, and contribute to innovative projects that create value for users and businesses.

When I'm not coding, I explore emerging web technologies, contribute to personal projects, enhance my UI/UX design skills, and continuously expand my knowledge of full-stack development and cloud-based solutions.
                
              </p>
            </div>

            {/* Location / availability badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              <span className="flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full border border-white/10 text-slate-400">
                📍 Colombo, Sri Lanka
              </span>
              <span className="flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full border border-accent-green/30 text-accent-green bg-accent-green/5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                Open to remote roles
              </span>
              <span className="flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full border border-white/10 text-slate-400">
                🕐 UTC+5:30
              </span>
            </div>
          </div>

          {/* Right: values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-bg-card border border-white/5 rounded-2xl p-6 hover:border-accent-blue/20 hover:bg-bg-hover transition-all duration-300 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">{v.icon}</div>
                <h3 className="font-mono font-bold text-sm text-white mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
