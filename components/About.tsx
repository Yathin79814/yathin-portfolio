"use client";

import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#FFFCF2]">
          Engineered for <span className="text-[var(--color-accent)]">Impact</span>
        </h2>
        
        <p className="text-xl text-[var(--color-secondary)] leading-relaxed mb-6">
          I produce high-volume AI video pipelines and viral short-form content at the intersection of Artificial Intelligence, video production, and brand storytelling. Currently pursuing my B.Tech in Computer Science & Engineering (AI) at IIITDM Kancheepuram, I combine AI systems thinking with rapid creative execution.
        </p>
        
        <p className="text-lg text-white/60 leading-relaxed mb-12">
          I've founded and grown designpreneurss to an organic community of 30,000+ followers. Having delivered 60+ AI videos for healthcare and education clients at Influx Health (sustaining a 5–10 video/day pace), my focus is on driving measurable engagement and scaling high-converting video pipelines.
        </p>
      </motion.div>
    </section>
  );
};
