"use client";
import { motion } from "framer-motion";

const timeline = [
  { year: "2023", event: "Started BTech", detail: "Began programming fundamentals, explored web dev basics from scratch." },
  { year: "2024", event: "Mastered MERN Stack", detail: "Dived deep into the JavaScript ecosystem — Node, Express, MongoDB, React." },
  { year: "2024–25", event: "Shipped Production Apps", detail: "Built auth systems, real-time apps, AI integrations deployed to production." },
  { year: "2026", event: "ML & Generative AI", detail: "Deep learning models, LLM-based agentic pipelines, multi-agent architectures." },
];

const domains = [
  { label: "Full Stack Web Development",   note: "MERN · Next.js · REST APIs" },
  { label: "Machine Learning", note: "Scikit-learn · Pandas · NumPy" },
  { label: "Deep Learning",    note: "PyTorch · CNNs · Transformers" },
  { label: "Generative AI",    note: "LangChain · LangGraph · Groq" },
  { label: "Agentic AI",       note: "Multi-agent · Docker sandboxes" },
  { label: "Data Structures and Algorithms",              note: "250+ problems · Java · C++" },
];

const fade = { hidden: { opacity: 0, y: 20 }, show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45 } }) };

export default function AboutMe() {
  return (
    <section id="aboutme" style={{ background: "var(--c-surface)", padding: "96px 0", borderTop: "1px solid var(--c-border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* Section header */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginBottom: 64 }}>
          <div className="sec-label" style={{ marginBottom: 20 }}>01 — About</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(16px, 4vw, 64px)", alignItems: "flex-end" }}>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "var(--c-white)", margin: 0, flex: "0 0 auto" }}>
              Who I am
            </h2>
            <p style={{ color: "var(--c-grey-1)", fontSize: "0.95rem", lineHeight: 1.75, maxWidth: 480, margin: 0, flex: 1, minWidth: 260 }}>
              BTech student turned builder. I started with curiosity about how the web works
              and ended up shipping full-stack systems with real-time features, AI pipelines,
              and agentic workflows. I care about code that is <em>maintainable</em> and{" "}
              <em>production-ready</em>, not just functional.
            </p>
          </div>
        </motion.div>

        <div className="rule" style={{ marginBottom: 64 }} />

        {/* Two column: timeline + domain expertise */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48 }}>

          {/* Timeline */}
          <div>
            <div className="mono" style={{ fontSize: "0.7rem", color: "var(--c-grey-2)", letterSpacing: "0.14em", marginBottom: 28, textTransform: "uppercase" }}>Journey</div>
            <div style={{ position: "relative", paddingLeft: 24 }}>
              <div style={{ position: "absolute", left: 0, top: 8, bottom: 0, width: 1, background: "var(--c-border)" }} />
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fade}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  style={{ position: "relative", paddingBottom: 32 }}
                >
                  {/* Dot */}
                  <div style={{
                    position: "absolute", left: -28, top: 6,
                    width: 7, height: 7, borderRadius: "50%",
                    background: i === timeline.length - 1 ? "var(--c-blue)" : "var(--c-grey-3)",
                    border: i === timeline.length - 1 ? "2px solid var(--c-blue)" : "2px solid var(--c-grey-2)",
                  }} />
                  <div className="mono" style={{ fontSize: "0.7rem", color: "var(--c-grey-2)", marginBottom: 4 }}>{item.year}</div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--c-white)", marginBottom: 6 }}>{item.event}</div>
                  <div style={{ fontSize: "0.83rem", color: "var(--c-grey-1)", lineHeight: 1.6 }}>{item.detail}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Domain expertise */}
          <div>
            <div className="mono" style={{ fontSize: "0.7rem", color: "var(--c-grey-2)", letterSpacing: "0.14em", marginBottom: 28, textTransform: "uppercase" }}>Expertise</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {domains.map((d, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fade}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="card"
                  style={{ padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "default" }}
                >
                  <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--c-white)" }}>{d.label}</span>
                  <span className="mono" style={{ fontSize: "0.7rem", color: "var(--c-grey-2)" }}>{d.note}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="rule" style={{ marginTop: 64, marginBottom: 48 }} />

        {/* Quote / philosophy strip */}
        <motion.blockquote
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            margin: 0, padding: "24px 28px",
            borderLeft: "2px solid var(--c-blue)",
            background: "var(--c-blue-dim)",
            borderRadius: "0 10px 10px 0",
          }}
        >
          <p style={{ margin: 0, fontWeight: 600, fontSize: "1.05rem", color: "var(--c-white)", lineHeight: 1.65 }}>
            "I enjoy working across the full complexity stack — from a pixel-perfect UI down to model architecture decisions — and I'm always building something."
          </p>
        </motion.blockquote>

      </div>
    </section>
  );
}
