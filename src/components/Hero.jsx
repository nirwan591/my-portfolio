import React, { useEffect, useState } from "react";
import profilePic from "../assets/695845981_1656532365494890_4681825014942848380_n.jpg";

const roles = [
  "Full Stack Developer",
  "React Developer",
  "Node.js Developer",
  "UI/UX Enthusiast",
  "Software Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.substring(0, text.length + 1));

        if (text === current) {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        setText(current.substring(0, text.length - 1));

        if (text === "") {
          setDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, deleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen bg-[#0f172a] overflow-hidden flex items-center">

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-[140px] rounded-full -top-52 -left-40 animate-pulse"></div>

        <div className="absolute w-[500px] h-[500px] bg-cyan-400/20 blur-[140px] rounded-full bottom-0 right-0 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}

        <div>

          <p className="uppercase tracking-[8px] text-cyan-400 font-mono mb-5">
            Welcome
          </p>

          <h1 className="text-white font-black text-5xl lg:text-7xl leading-tight font-mono">
            Hi,
            <br />
            I'm
            <span className="text-cyan-400 font-mono"> Milinda</span>
          </h1>

          <div className="text-2xl mt-8 font-semibold text-gray-300 h-10 font-mono">
            {text}
            <span className="animate-pulse text-cyan-400">|</span>
          </div>

          <p className="text-gray-400 mt-8 leading-8 max-w-xl font-mono">
            I design and develop modern, responsive web applications with
            React, Node.js, Express and MongoDB. Passionate about creating
            beautiful user experiences and scalable backend systems.
          </p>

          <div className="flex gap-5 mt-10">

            <button className="px-8 py-4 rounded-xl bg-cyan-400 text-black font-bold hover:scale-105 transition font-mono">
              Hire Me
            </button>

            <button className="px-8 py-4 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition font-mono">
              My Projects
            </button>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="flex justify-center">

          <div className="relative">

            {/* Rotating Glow */}

            <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-2xl opacity-70 animate-spin-slow"></div>

            {/* Floating Circles */}

            <div className="absolute -top-10 -left-10 w-6 h-6 bg-cyan-400 rounded-full animate-bounce"></div>

            <div className="absolute top-1/2 -right-12 w-5 h-5 bg-pink-500 rounded-full animate-ping"></div>

            <div className="absolute bottom-0 -left-8 w-4 h-4 bg-green-400 rounded-full animate-bounce"></div>

            {/* Floating Image */}

            <img
              src={profilePic}
              alt="Profile"
              className="relative w-80 h-80 lg:w-[430px] lg:h-[430px] rounded-[40px] object-cover border-4 border-cyan-400 shadow-2xl animate-float"
            />

            {/* Online */}

            <div className="absolute bottom-5 right-5 w-6 h-6 rounded-full bg-green-500 border-4 border-[#0f172a] animate-pulse"></div>

          </div>

        </div>

      </div>

      <style>{`

      @keyframes float{

      0%{
      transform:translateY(0px);
      }

      50%{
      transform:translateY(-18px);
      }

      100%{
      transform:translateY(0px);
      }

      }

      .animate-float{
      animation:float 4s ease-in-out infinite;
      }

      @keyframes spinSlow{

      from{
      transform:rotate(0deg);
      }

      to{
      transform:rotate(360deg);
      }

      }

      .animate-spin-slow{
      animation:spinSlow 10s linear infinite;
      }

      `}</style>

    </section>
  );
}