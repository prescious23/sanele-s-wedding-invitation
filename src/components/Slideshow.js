import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Slideshow({ slides }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlide = slides[index];

  return (
    <div className="fullscreen-slideshow">
      <AnimatePresence initial={false}>
        {currentSlide.type === "image" ? (
          <motion.img
            key={currentSlide.src}
            src={currentSlide.src}
            alt={`slide-${index}`}
            className="fullscreen-image"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        ) : (
          <motion.video
            key={currentSlide.src}
            src={currentSlide.src}
            className="fullscreen-image"
            autoPlay
            muted
            loop
            playsInline
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      {/* Optional overlay text */}
      <div className="overlay-text">
        <h1 style={{ fontSize: '8rem', color: '#fff' }}>Siphesihle & Sanele</h1>
        <p style={{ whiteSpace: "pre-line", color: '#fff' }}>May 23, 2026 • Umhlanga, DBN</p>
      </div>
    </div>
  );
}
