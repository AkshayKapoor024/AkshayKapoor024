"use client";
import { motion } from "framer-motion";

const navLinks = ["About me", "Skills", "Projects", "Certifications", "Contact"];

export default function Footer() {
  return (
    <footer style={{ background: "var(--c-bg)", borderTop: "1px solid var(--c-border)", padding: "48px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 24 }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "var(--c-white)", letterSpacing: "-0.02em" }}>
              Akshay <span style={{ color: "var(--c-blue)" }}>Kapoor</span>
            </div>
            <div className="mono" style={{ fontSize: "0.68rem", color: "var(--c-grey-2)", marginTop: 4, letterSpacing: "0.08em" }}>
              Full Stack · AI/ML Developer
            </div>
          </div>

          {/* Nav */}
          <nav style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {navLinks.map((l) => (
              <a
                key={l}
                href={`#${l.replace(/\s+/g, "").toLowerCase()}`}
                style={{ fontSize: "0.82rem", color: "var(--c-grey-2)", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--c-white)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--c-grey-2)")}
              >
                {l.split(' ')[0]}
              </a>
            ))}
          </nav>

          {/* Social + back-to-top */}
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {[
              { label: "GH", href: "https://github.com/AkshayKapoor024" },
              { label: "LI", href: "https://www.linkedin.com/in/kapoorakshay24" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mono"
                style={{
                  width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center",
                  borderRadius: 6, border: "1px solid var(--c-border)", background: "var(--c-card)",
                  fontSize: "0.65rem", color: "var(--c-grey-1)", textDecoration: "none", letterSpacing: "0.06em",
                  transition: "border-color 0.15s, color 0.15s",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--c-blue-ring)"; e.currentTarget.style.color = "var(--c-blue)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--c-border)"; e.currentTarget.style.color = "var(--c-grey-1)"; }}
              >
                {s.label}
              </a>
            ))}
            <a
              href="#hero"
              style={{
                marginLeft: 8, padding: "6px 14px", borderRadius: 6,
                border: "1px solid var(--c-blue-ring)", background: "var(--c-blue-dim)",
                fontSize: "0.75rem", color: "var(--c-blue)", textDecoration: "none",
                fontFamily: "'DM Mono', monospace", display: "flex", alignItems: "center", gap: 6,
              }}
            >
              ↑ Top
            </a>
          </div>
        </div>

        <div className="rule" style={{ margin: "32px 0" }} />

        <div className="mono" style={{ fontSize: "0.68rem", color: "var(--c-grey-2)", textAlign: "center", letterSpacing: "0.06em" }}>
          © 2026 Akshay Kapoor — Built with Next.js
        </div>
      </div>
    </footer>
  );
}
