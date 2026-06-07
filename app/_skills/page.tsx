"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contentList, Content } from "./skills";

// Real tech icons via devicons CDN (no color override needed)
const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

interface SkillItem { name: string; icon: string; }

const categories: { key: keyof Content; label: string; items: SkillItem[] }[] = [
  {
    key: "frontend",
    label: "Frontend",
    items: [
      { name: "React.js",    icon: `${ICON_BASE}/react/react-original.svg` },
      { name: "Next.js",     icon: `${ICON_BASE}/nextjs/nextjs-original.svg` },
      { name: "HTML5",       icon: `${ICON_BASE}/html5/html5-original.svg` },
      { name: "CSS3",        icon: `${ICON_BASE}/css3/css3-original.svg` },
      { name: "Tailwind",    icon: `${ICON_BASE}/tailwindcss/tailwindcss-original.svg` },
      { name: "Bootstrap",   icon: `${ICON_BASE}/bootstrap/bootstrap-original.svg` },
    ],
  },
  {
    key: "backend",
    label: "Backend",
    items: [
      { name: "Node.js",     icon: `${ICON_BASE}/nodejs/nodejs-original.svg` },
      { name: "Express.js",  icon: `${ICON_BASE}/express/express-original.svg` },
      { name: "REST APIs",   icon: `${ICON_BASE}/fastapi/fastapi-original.svg` },
      { name: "WebSockets",  icon: `${ICON_BASE}/socketio/socketio-original.svg` },
    ],
  },
  {
    key: "database",
    label: "Database",
    items: [
      { name: "MongoDB",     icon: `${ICON_BASE}/mongodb/mongodb-original.svg` },
      { name: "SQL",         icon: `${ICON_BASE}/mysql/mysql-original.svg` },
      { name: "Firebase",    icon: `${ICON_BASE}/firebase/firebase-original.svg` },
    ],
  },
  {
    key: "language",
    label: "Languages",
    items: [
      { name: "JavaScript",  icon: `${ICON_BASE}/javascript/javascript-original.svg` },
      { name: "Python",      icon: `${ICON_BASE}/python/python-original.svg` },
      { name: "Java",        icon: `${ICON_BASE}/java/java-original.svg` },
      { name: "C",           icon: `${ICON_BASE}/c/c-original.svg` },
      { name: "C++",         icon: `${ICON_BASE}/cplusplus/cplusplus-original.svg` },
    ],
  },
  {
    key: "tools",
    label: "Tools",
    items: [
      { name: "Git",         icon: `${ICON_BASE}/git/git-original.svg` },
      { name: "GitHub",      icon: `${ICON_BASE}/github/github-original.svg` },
      { name: "Docker",      icon: `${ICON_BASE}/docker/docker-original.svg` },
      { name: "Postman",     icon: `${ICON_BASE}/postman/postman-original.svg` },
      { name: "Figma",       icon: `${ICON_BASE}/figma/figma-original.svg` },
    ],
  },
  {
    key: "concepts",
    label: "Concepts",
    items: [
      { name: "OOPs",           icon: `${ICON_BASE}/java/java-original.svg` },
      { name: "DSA",            icon: `${ICON_BASE}/python/python-original.svg` },
      { name: "API Design",     icon: `${ICON_BASE}/nodejs/nodejs-original.svg` },
      { name: "Clean Arch.",    icon: `${ICON_BASE}/git/git-original.svg` },
    ],
  },
];

const aiStack: SkillItem[] = [
  { name: "LangChain",   icon: `${ICON_BASE}/python/python-original.svg` },
  { name: "LangGraph",   icon: `${ICON_BASE}/python/python-original.svg` },
  { name: "PyTorch",     icon: `${ICON_BASE}/pytorch/pytorch-original.svg` },
  { name: "Pandas",      icon: `${ICON_BASE}/pandas/pandas-original.svg` },
  { name: "NumPy",       icon: `${ICON_BASE}/numpy/numpy-original.svg` },
  { name: "Scikit",      icon: `${ICON_BASE}/scikitlearn/scikitlearn-original.svg` },
  { name: "FastAPI",     icon: `${ICON_BASE}/fastapi/fastapi-original.svg` },
  { name: "Streamlit",   icon: `${ICON_BASE}/python/python-original.svg` },
];

export default function Skills() {
  const [active, setActive] = useState(0);

  const current = categories[active];

  return (
    <section id="skills" style={{ background: "var(--c-bg)", padding: "96px 0", borderTop: "1px solid var(--c-border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginBottom: 56 }}>
          <div className="sec-label" style={{ marginBottom: 20 }}>02 — Skills</div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "var(--c-white)", margin: 0 }}>
            Tech Stack
          </h2>
        </motion.div>

        {/* Tab row */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
          {categories.map((cat, i) => (
            <button
              key={cat.key}
              onClick={() => setActive(i)}
              className={`cat-tab${active === i ? " active" : ""}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Pills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 72 }}
          >
            {current.items.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
                className="skill-pill"
              >
                <img src={skill.icon} alt={skill.name} width={18} height={18} style={{ flexShrink: 0 }} />
                {skill.name}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="rule" style={{ marginBottom: 56 }} />

        {/* AI/ML Stack — separate highlighted block */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
            <span className="mono" style={{ fontSize: "0.7rem", color: "var(--c-grey-2)", letterSpacing: "0.14em", textTransform: "uppercase" }}>AI / ML Stack</span>
            <div style={{ flex: 1, height: 1, background: "var(--c-border)" }} />
            <span style={{ background: "var(--c-blue-dim)", border: "1px solid var(--c-blue-ring)", borderRadius: 6, padding: "3px 10px", fontSize: "0.7rem", color: "var(--c-blue)", fontFamily: "'DM Mono', monospace" }}>
              Actively Growing
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {aiStack.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="skill-pill"
                style={{ borderColor: "var(--c-blue-ring)", background: "var(--c-blue-dim)" }}
              >
                <img src={skill.icon} alt={skill.name} width={16} height={16} />
                <span style={{ color: "var(--c-blue)" }}>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
