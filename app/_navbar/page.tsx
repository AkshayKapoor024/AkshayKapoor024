"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About",    href: "#aboutme" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certs",    href: "#certifications" },
  { label: "Contact",  href: "#contactme" },
];

export default function Nav() {
  const [solid,  setSolid]  = useState(false);
  const [open,   setOpen]   = useState(false);

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: solid ? "rgba(8,8,12,0.92)" : "transparent",
          backdropFilter: solid ? "blur(16px)" : "none",
          borderBottom: solid ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <a href="#hero" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "var(--c-blue)", letterSpacing: "0.1em" }}>AK</span>
            <span style={{ width: 1, height: 16, background: "var(--c-border-hi)" }} />
            <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "var(--c-grey-1)", letterSpacing: "0.04em" }}>Portfolio</span>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden-mobile">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  padding: "6px 14px", borderRadius: 6, fontSize: "0.82rem", fontWeight: 500,
                  color: "var(--c-grey-1)", textDecoration: "none", transition: "color 0.15s",
                  fontFamily: "'Syne', sans-serif",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--c-white)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--c-grey-1)")}
              >
                {l.label}
              </a>
            ))}
            <a href="#contactme" className="btn-blue" style={{ marginLeft: 12, textDecoration: "none", padding: "9px 20px" }}>
              Hire Me
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 6, display: "none" }}
            className="show-mobile"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <span style={{ display: "block", width: 22, height: 1.5, background: "var(--c-grey-1)", transform: open ? "rotate(45deg) translate(4px,4px)" : "none", transition: "transform 0.2s" }} />
              <span style={{ display: "block", width: 22, height: 1.5, background: "var(--c-grey-1)", opacity: open ? 0 : 1, transition: "opacity 0.2s" }} />
              <span style={{ display: "block", width: 22, height: 1.5, background: "var(--c-grey-1)", transform: open ? "rotate(-45deg) translate(3px,-3px)" : "none", transition: "transform 0.2s" }} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            style={{
              position: "fixed", top: 64, left: 0, right: 0, zIndex: 99,
              background: "rgba(8,8,12,0.97)", borderBottom: "1px solid var(--c-border)",
              backdropFilter: "blur(20px)", padding: "24px",
              display: "flex", flexDirection: "column", gap: 8,
            }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  padding: "12px 0", borderBottom: "1px solid var(--c-border)",
                  fontSize: "1rem", fontWeight: 600, color: "var(--c-grey-1)",
                  textDecoration: "none", fontFamily: "'Syne', sans-serif",
                }}
              >
                {l.label}
              </a>
            ))}
            <a href="#contactme" onClick={() => setOpen(false)} className="btn-blue" style={{ marginTop: 8, justifyContent: "center", textDecoration: "none" }}>
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: block !important; }
        }
      `}</style>
    </>
  );
}
