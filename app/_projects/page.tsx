"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectSchema, projectsData } from "./Data";

export default function Projects() {
  const [active, setActive] = useState<projectSchema | null>(null);

  return (
    <section id="projects" style={{ background: "var(--c-surface)", padding: "96px 0", borderTop: "1px solid var(--c-border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginBottom: 56 }}>
          <div className="sec-label" style={{ marginBottom: 20 }}>03 — Projects</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(12px, 4vw, 64px)", alignItems: "flex-end" }}>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "var(--c-white)", margin: 0 }}>
              Featured Work
            </h2>
            <p style={{ color: "var(--c-grey-1)", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: 380, margin: 0 }}>
              Real-world applications — built to solve actual problems, shipped to production.
            </p>
          </div>
        </motion.div>

        <div className="rule" style={{ marginBottom: 48 }} />

        {/* Project list — editorial numbered rows */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {projectsData.map((p: projectSchema, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              onClick={() => setActive(p)}
              style={{
                display: "grid",
                gridTemplateColumns: "48px 1fr auto",
                gap: 24,
                alignItems: "center",
                padding: "28px 0",
                borderBottom: "1px solid var(--c-border)",
                cursor: "pointer",
                transition: "background 0.15s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--c-card)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              {/* Number */}
              <span className="mono" style={{ fontSize: "0.72rem", color: "var(--c-grey-2)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Info */}
              <div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "var(--c-white)", marginBottom: 6 }}>
                  {p.title}
                </div>
                <div style={{ fontSize: "0.83rem", color: "var(--c-grey-1)", marginBottom: 10, lineHeight: 1.55 }}>
                  {p.shortDescription}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.techStack.slice(0, 5).map((t, j) => (
                    <span
                      key={j}
                      className="mono"
                      style={{ fontSize: "0.68rem", color: "var(--c-grey-2)", padding: "3px 8px", borderRadius: 4, border: "1px solid var(--c-border)" }}
                    >
                      {t}
                    </span>
                  ))}
                  {p.techStack.length > 5 && (
                    <span className="mono" style={{ fontSize: "0.68rem", color: "var(--c-blue)" }}>+{p.techStack.length - 5}</span>
                  )}
                </div>
              </div>

              {/* Arrow */}
              <div style={{ color: "var(--c-grey-2)", transition: "color 0.15s, transform 0.15s" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Detail Overlay ── */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed", inset: 0, zIndex: 200,
              background: "rgba(4,4,8,0.88)",
              backdropFilter: "blur(18px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: 16,
            }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 20 }}
              transition={{ duration: 0.22 }}
              onClick={e => e.stopPropagation()}
              style={{
                width: "100%", maxWidth: 720,
                maxHeight: "90vh", overflowY: "auto",
                background: "var(--c-card)",
                border: "1px solid var(--c-border-hi)",
                borderRadius: 16,
              }}
            >
              {/* Thumbnail */}
              <div style={{ width: "100%", height: 240, overflow: "hidden", borderRadius: "16px 16px 0 0", flexShrink: 0 }}>
                <img src={active.thumbnail} alt={active.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>

              <div style={{ padding: "28px 32px" }}>
                {/* Close */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                  <div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "var(--c-white)" }}>{active.title}</div>
                    <div style={{ fontSize: "0.83rem", color: "var(--c-grey-1)", marginTop: 4 }}>{active.shortDescription}</div>
                  </div>
                  <button
                    onClick={() => setActive(null)}
                    style={{ background: "var(--c-card-2)", border: "1px solid var(--c-border)", borderRadius: 8, color: "var(--c-grey-1)", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  </button>
                </div>

                <div className="rule" style={{ marginBottom: 24 }} />

                {/* Overview */}
                <div style={{ marginBottom: 24 }}>
                  <div className="mono" style={{ fontSize: "0.68rem", color: "var(--c-grey-2)", letterSpacing: "0.12em", marginBottom: 8, textTransform: "uppercase" }}>Overview</div>
                  <p style={{ fontSize: "0.87rem", color: "var(--c-grey-1)", lineHeight: 1.7, margin: 0 }}>{active.overview}</p>
                </div>

                {/* Problem / Solution */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 24 }}>
                  <div style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: 10, padding: 16 }}>
                    <div className="mono" style={{ fontSize: "0.65rem", color: "var(--c-grey-2)", letterSpacing: "0.12em", marginBottom: 8, textTransform: "uppercase" }}>Problem</div>
                    <p style={{ fontSize: "0.82rem", color: "var(--c-grey-1)", lineHeight: 1.65, margin: 0 }}>{active.problem}</p>
                  </div>
                  <div style={{ background: "var(--c-blue-dim)", border: "1px solid var(--c-blue-ring)", borderRadius: 10, padding: 16 }}>
                    <div className="mono" style={{ fontSize: "0.65rem", color: "var(--c-blue)", letterSpacing: "0.12em", marginBottom: 8, textTransform: "uppercase" }}>Solution</div>
                    <p style={{ fontSize: "0.82rem", color: "var(--c-grey-1)", lineHeight: 1.65, margin: 0 }}>{active.solution}</p>
                  </div>
                </div>

                {/* Key features */}
                <div style={{ marginBottom: 24 }}>
                  <div className="mono" style={{ fontSize: "0.68rem", color: "var(--c-grey-2)", letterSpacing: "0.12em", marginBottom: 10, textTransform: "uppercase" }}>Key Features</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {active.keyFeatures.map((f, i) => (
                      <span key={i} style={{ fontSize: "0.78rem", padding: "5px 12px", borderRadius: 6, border: "1px solid var(--c-border)", color: "var(--c-grey-1)", background: "var(--c-surface)" }}>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div style={{ marginBottom: 28 }}>
                  <div className="mono" style={{ fontSize: "0.68rem", color: "var(--c-grey-2)", letterSpacing: "0.12em", marginBottom: 10, textTransform: "uppercase" }}>Stack</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {active.techStack.map((t, i) => (
                      <span key={i} className="mono" style={{ fontSize: "0.72rem", padding: "4px 10px", borderRadius: 4, border: "1px solid var(--c-border)", color: "var(--c-blue)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div style={{ display: "flex", gap: 12 }}>
                  <a href={active.codeLink} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ textDecoration: "none", flex: 1, justifyContent: "center" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    Source Code
                  </a>
                  <a href={active.liveLink} target="_blank" rel="noopener noreferrer" className="btn-blue" style={{ textDecoration: "none", flex: 1, justifyContent: "center" }}>
                    Live Demo
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
