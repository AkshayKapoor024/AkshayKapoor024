"use client";
import AnimatedCounter from "./AnimatedCounter";
import { motion } from "framer-motion";

const achievements = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    value: 5,
    suffix: "+",
    label: "Projects Completed",
    desc: "Full-stack applications built from scratch",
    color: "#f45a33",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    value: 15,
    suffix: "+",
    label: "Technologies Mastered",
    desc: "From React.js to Next.js and beyond",
    color: "#3b82f6",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    value: 250,
    suffix: "+",
    label: "DSA Problems Solved",
    desc: "Mastered DP, Graphs, Greedy, Backtracking",
    color: "#22c3ad",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    value: 500,
    suffix: "+",
    label: "Hours of Coding",
    desc: "Dedicated to learning and building",
    color: "#8347ea",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden bg-[#0f0f1a] py-24 sm:py-32">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] glow-blue rounded-full blur-3xl pointer-events-none opacity-15" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center gap-14">

        {/* Badge + Heading */}
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="section-badge">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Milestones
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ fontWeight: 800 }}
          >
            Achievements &{" "}
            <span className="grad-fire">Impact</span>
          </motion.h2>
          <p className="text-[#94a3b8] text-base md:text-lg max-w-xl">
            Numbers that reflect dedication to growth and continuous improvement.
          </p>
        </div>

        {/* Achievement cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:border-[rgba(59,130,246,0.2)] transition-all duration-300 group"
            >
              <div
                className="p-4 rounded-xl transition-all duration-300 group-hover:scale-110"
                style={{ background: `${item.color}18`, color: item.color }}
              >
                {item.icon}
              </div>

              <div className="text-5xl sm:text-6xl font-black" style={{ color: item.color }}>
                <AnimatedCounter to={item.value} />{item.suffix}
              </div>

              <div>
                <div className="text-[#f1f5f9] font-bold text-base mb-1">{item.label}</div>
                <div className="text-[#94a3b8] text-xs leading-relaxed">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
