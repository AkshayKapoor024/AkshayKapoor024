"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const slides = [
  { src: "/DSA.jpg",                caption: "Data Structures & Algorithms in Java", tag: "CS" },
  { src: "/DataScience.jpg",        caption: "Data Science Certification",            tag: "Data" },
  { src: "/MERN.jpg",               caption: "MERN Stack Development",               tag: "Web" },
  { src: "/ML DL Certificate.jpeg", caption: "Machine Learning & Deep Learning",     tag: "AI/ML" },
  { src: "/GEN_AI Certificate.jpg", caption: "Generative AI",                        tag: "GenAI" },
];

export default function Certifications() {
  return (
    <section id="certifications" style={{ background: "var(--c-bg)", padding: "96px 0", borderTop: "1px solid var(--c-border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginBottom: 56 }}>
          <div className="sec-label" style={{ marginBottom: 20 }}>04 — Certifications</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(12px, 4vw, 64px)", alignItems: "flex-end" }}>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", color: "var(--c-white)", margin: 0 }}>
              Verified Credentials
            </h2>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {slides.map((s) => (
                <span key={s.tag} className="mono" style={{ fontSize: "0.68rem", padding: "4px 10px", borderRadius: 4, border: "1px solid var(--c-blue-ring)", color: "var(--c-blue)", background: "var(--c-blue-dim)" }}>
                  {s.tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="rule" style={{ marginBottom: 48 }} />

        {/* Carousel */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Swiper
            loop={true}
            modules={[Autoplay]}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={5500}
            slidesPerView={1}
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, padding: "0 8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span className="mono" style={{ fontSize: "0.68rem", color: "var(--c-blue)" }}>{slide.tag}</span>
                    <span style={{ width: 1, height: 12, background: "var(--c-border-hi)" }} />
                    <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--c-white)" }}>{slide.caption}</span>
                  </div>
                  <div style={{
                    border: "1px solid var(--c-border)",
                    borderRadius: 12,
                    overflow: "hidden",
                    background: "var(--c-card)",
                  }}>
                    <img
                      src={slide.src}
                      alt={slide.caption}
                      style={{ display: "block", maxHeight: 460, width: "auto", maxWidth: "100%" }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
}
