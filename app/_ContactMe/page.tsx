"use client";
import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

export default function ContactMe() {
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/sendEmail", { name, email, message });
      toast.success("Message sent!", { position: "bottom-right" });
      setName(""); setEmail(""); setMessage("");
    } catch {
      toast.error("Failed to send.", { position: "bottom-right" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contactme" style={{ background: "var(--c-surface)", padding: "96px 0", borderTop: "1px solid var(--c-border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginBottom: 56 }}>
          <div className="sec-label" style={{ marginBottom: 20 }}>05 — Contact</div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "var(--c-white)", margin: 0 }}>
            Let's Talk
          </h2>
        </motion.div>

        <div className="rule" style={{ marginBottom: 56 }} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48 }}>

          {/* LEFT — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            style={{ display: "flex", flexDirection: "column", gap: 32 }}
          >
            <p style={{ color: "var(--c-grey-1)", fontSize: "0.95rem", lineHeight: 1.75, margin: 0 }}>
              Open to full-time roles, contract work, and interesting collaborations.
              If you have a project or just want to connect — reach out.
            </p>

            {/* Contact info items */}
            {[
              {
                label: "Email",
                value: "work.akshaykapoor24@gmail.com",
                href: "mailto:work.akshaykapoor24@gmail.com",
              },
              {
                label: "Location",
                value: "Delhi, India",
                href: null,
              },
            ].map((item) => (
              <div key={item.label}>
                <div className="mono" style={{ fontSize: "0.68rem", color: "var(--c-grey-2)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 6 }}>
                  {item.label}
                </div>
                {item.href ? (
                  <a href={item.href} style={{ color: "var(--c-white)", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--c-blue)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--c-white)")}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span style={{ color: "var(--c-white)", fontSize: "0.9rem", fontWeight: 600 }}>{item.value}</span>
                )}
              </div>
            ))}

            {/* Social */}
            <div>
              <div className="mono" style={{ fontSize: "0.68rem", color: "var(--c-grey-2)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>
                Find me on
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                {[
                  { label: "GitHub",   href: "https://github.com/AkshayKapoor024" },
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/kapoorakshay24" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                    style={{ textDecoration: "none", fontSize: "0.8rem", padding: "8px 16px" }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            onSubmit={handleSubmit}
            style={{
              background: "var(--c-card)",
              border: "1px solid var(--c-border)",
              borderRadius: 14,
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {[
              { label: "Name",    type: "text",  val: name,    set: setName,    ph: "Your name" },
              { label: "Email",   type: "email", val: email,   set: setEmail,   ph: "your@email.com" },
            ].map((f) => (
              <div key={f.label}>
                <label className="mono" style={{ display: "block", fontSize: "0.68rem", color: "var(--c-grey-2)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                  {f.label}
                </label>
                <input
                  type={f.type}
                  value={f.val}
                  onChange={e => f.set(e.target.value)}
                  placeholder={f.ph}
                  className="field"
                  required
                />
              </div>
            ))}

            <div>
              <label className="mono" style={{ display: "block", fontSize: "0.68rem", color: "var(--c-grey-2)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                Message
              </label>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                className="field"
                rows={5}
                style={{ resize: "none" }}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-blue"
              style={{ justifyContent: "center", opacity: loading ? 0.6 : 1, cursor: loading ? "not-allowed" : "pointer" }}
            >
              {loading ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: "spin 1s linear infinite" }}>
                    <path d="M21 12a9 9 0 11-6.219-8.56" />
                  </svg>
                  Sending…
                </>
              ) : (
                <>
                  Send Message
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <Toaster richColors position="bottom-right" />
    </section>
  );
}
