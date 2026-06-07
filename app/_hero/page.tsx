"use client";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { list, BadgeLink } from "./links";

const roles = [
  "Full Stack Developer",
  "MERN & Next.js Engineer",
  "Machine Learning Engineer",
  "Deep Learning Practitioner",
  "Generative AI Builder",
  "Agentic AI Explorer",
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "var(--c-bg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Geometric accent — large circle top-right */}
      <div style={{
        position: "absolute", top: -120, right: -120,
        width: 520, height: 520, borderRadius: "50%",
        border: "1px solid rgba(79,142,247,0.1)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: -60, right: -60,
        width: 320, height: 320, borderRadius: "50%",
        border: "1px solid rgba(79,142,247,0.07)",
        pointerEvents: "none",
      }} />

      {/* Single subtle glow */}
      <div style={{
        position: "absolute", top: "15%", right: "10%",
        width: 400, height: 400,
        background: "radial-gradient(circle, rgba(79,142,247,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, maxWidth: 900, margin: "0 auto", padding: "0 24px", paddingTop: 80 }}>

        {/* Status line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 36 }}
        >
          <div className="dot-live" />
          <span className="mono" style={{ fontSize: "0.72rem", color: "var(--c-grey-1)", letterSpacing: "0.12em" }}>
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </motion.div>

        {/* Name — large editorial type */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(3rem, 8vw, 7rem)",
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            color: "var(--c-white)",
            margin: 0,
          }}
        >
          Akshay<br />
          <span style={{ color: "var(--c-blue)" }}>Kapoor</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 10 }}
        >
          <span className="mono" style={{ fontSize: "0.7rem", color: "var(--c-grey-2)", letterSpacing: "0.1em" }}>~/role</span>
          <span style={{ width: 1, height: 14, background: "var(--c-grey-3)" }} />
          <span className="mono" style={{ fontSize: "0.95rem", color: "var(--c-blue)", fontWeight: 500 }}>
            <Typewriter
              words={roles}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </span>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.45, duration: 0.5, transformOrigin: "left" }}
          style={{ height: 1, background: "var(--c-border)", margin: "32px 0", maxWidth: 480 }}
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{ color: "var(--c-grey-1)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 480, margin: 0 }}
        >
          Building scalable web systems and intelligent AI pipelines.
          Passionate about shipping things that actually work in production.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}
        >
          <a href="#projects" className="btn-blue" style={{ textDecoration: "none" }}>
            View Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
          </a>
          <a href="#contactme" className="btn-ghost" style={{ textDecoration: "none" }}>
            Contact Me
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          style={{ display: "flex", gap: 14, marginTop: 48, alignItems: "center" }}
        >
          {list.map((el: BadgeLink) => (
            <a
              key={el.link}
              href={el.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: 40, height: 40, borderRadius: 8,
                border: "1px solid var(--c-border)",
                background: "var(--c-card)",
                transition: "border-color 0.15s, background 0.15s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--c-blue-ring)"; e.currentTarget.style.background = "var(--c-blue-dim)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--c-border)"; e.currentTarget.style.background = "var(--c-card)"; }}
            >
              <img src={el.icon.replace("16161c","a0a0b0").replace("248cf3","a0a0b0").replace("ed5ea5","a0a0b0")} width="18" height="18" alt="" />
            </a>
          ))}
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", color: "var(--c-grey-2)", letterSpacing: "0.08em", marginLeft: 4 }}>
            github · linkedin · email
          </span>
        </motion.div>
      </div>

      {/* Bottom scroll nudge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        }}
      >
        <span className="mono" style={{ fontSize: "0.62rem", color: "var(--c-grey-2)", letterSpacing: "0.18em" }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--c-grey-2)" strokeWidth="1.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
